#!/usr/bin/env python3
"""
Auto Preview - Antigravity Kit
==============================
Manages (start/stop/status) the local development server for previewing the application.

Usage:
    python .agent/scripts/auto_preview.py start [port]
    python .agent/scripts/auto_preview.py stop
    python .agent/scripts/auto_preview.py status
"""

import os
import sys
import time
import json
import signal
import argparse
import subprocess
from pathlib import Path

AGENT_DIR = Path(".agent")
PID_FILE = AGENT_DIR / "preview.pid"
LOG_FILE = AGENT_DIR / "preview.log"

def get_project_root():
    return Path(".").resolve()

def is_running(pid):
    try:
        if sys.platform == 'win32':
            # tasklist check for windows
            output = subprocess.check_output(['tasklist', '/FI', f'PID eq {pid}'], stderr=subprocess.STDOUT).decode()
            return str(pid) in output
        else:
            os.kill(pid, 0)
            return True
    except:
        return False

def kill_process_on_port(port):
    if sys.platform == 'win32':
        try:
            # Find PID on port
            output = subprocess.check_output(['netstat', '-ano'], stderr=subprocess.STDOUT).decode()
            for line in output.splitlines():
                if f':{port}' in line and 'LISTENING' in line:
                    parts = line.split()
                    pid = parts[-1]
                    print(f"[INFO] Killing process {pid} on port {port}...")
                    subprocess.call(['taskkill', '/F', '/T', '/PID', pid])
        except Exception as e:
            print(f"[WARN] Could not kill process on port {port}: {e}")
    else:
        try:
            subprocess.call(['fuser', '-k', f'{port}/tcp'])
        except:
            pass

def get_start_command(root):
    pkg_file = root / "package.json"
    if not pkg_file.exists():
        return None
    
    with open(pkg_file, 'r') as f:
        data = json.load(f)
    
    scripts = data.get("scripts", {})
    if "dev" in scripts:
        return ["npm", "run", "dev"]
    elif "start" in scripts:
        return ["npm", "start"]
    return None

def start_server(port=3000):
    # Force kill anything on the port first
    kill_process_on_port(port)

    # Check if we have a managed PID
    if PID_FILE.exists():
        try:
            pid = int(PID_FILE.read_text().strip())
            if is_running(pid):
                print(f"[WARN] Preview already running (PID: {pid})")
                return
        except:
            pass # Invalid PID file

    root = get_project_root()
    cmd = get_start_command(root)
    
    if not cmd:
        print("[ERR] No 'dev' or 'start' script found in package.json")
        sys.exit(1)
    
    # Add port env var if needed
    env = os.environ.copy()
    env["PORT"] = str(port)
    
    print(f"[START] Starting preview on port {port}...")
    
    if not AGENT_DIR.exists():
        AGENT_DIR.mkdir(parents=True)

    with open(LOG_FILE, "w") as log:
        process = subprocess.Popen(
            cmd,
            cwd=str(root),
            stdout=log,
            stderr=log,
            env=env,
            shell=True 
        )
    
    PID_FILE.write_text(str(process.pid))
    print(f"[OK] Preview started! (PID: {process.pid})")
    print(f"   Logs: {LOG_FILE}")
    print(f"   URL: http://localhost:{port}")

def stop_server():
    if not PID_FILE.exists():
        print("[INFO] No preview server found.")
        return

    try:
        pid = int(PID_FILE.read_text().strip())
        if is_running(pid):
            if sys.platform == 'win32':
                subprocess.call(['taskkill', '/F', '/T', '/PID', str(pid)])
            else:
                os.kill(pid, signal.SIGTERM)
            print(f"[STOP] Preview stopped (PID: {pid})")
        else:
            print("[INFO] Process was not running.")
    except Exception as e:
        print(f"[ERR] Error stopping server: {e}")
    finally:
        if PID_FILE.exists():
            PID_FILE.unlink()

def status_server():
    running = False
    pid = None
    url = "Unknown"
    
    if PID_FILE.exists():
        try:
            pid = int(PID_FILE.read_text().strip())
            if is_running(pid):
                running = True
                url = "http://localhost:3000" 
        except:
            pass
            
    print("\n=== Preview Status ===")
    if running:
        print(f"[OK] Status: Running")
        print(f"🔢 PID: {pid}")
        print(f"🌐 URL: {url} (Likely)")
        print(f"📝 Logs: {LOG_FILE}")
    else:
        print("[OFF] Status: Stopped")
    print("===================\n")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("action", choices=["start", "stop", "status"])
    parser.add_argument("port", nargs="?", default="3000")
    
    args = parser.parse_args()
    
    if args.action == "start":
        start_server(int(args.port))
    elif args.action == "stop":
        stop_server()
    elif args.action == "status":
        status_server()

if __name__ == "__main__":
    main()
