# ABM Ecosystem — Project Rules & Context

> **Goal**: Build a premium, AI-ready CRM starting with Companies and Contacts.

---

## 🏗️ Technical Guardrails
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4 only. No Tailwind CSS v3 or other CSS frameworks.
- **Database**: Supabase (PostgreSQL). Use the defined schema in `SCHEMA.md`.
- **Components**: Use `shadcn/ui` for high-quality, accessible UI elements.
- **Clean Code**: Follow the `clean-code` skill. No unnecessary comments. Modular components.

## 🗃️ Data Integrity
- **Schema**: ALL database changes MUST be reflected in `SCHEMA.md` immediately.
- **Naming**: Use `snake_case` for database columns and `camelCase` for TypeScript/React code.
- **RLS**: Row-Level Security is MANDATORY for all tables. No public access.

## 🤝 Project Protocol
- **Single Table Planning**: All progress updates must refer to `ABM_Project_Ledger.md`.
- **Verification**: Every feature must be verified against the "Verify By" criteria in the ledger.
- **Socratic Gate**: For any change beyond the two core modules (Companies/Contacts), STOP and ASK the Producer first.

## 🧩 Module Focus (Phase 2)
1. **Companies**: Name, Industry, Website, Employee Size, Revenue, Notes.
2. **Contacts**: Linked to Company, Name, Email, Phone, Designation, Notes.
3. **Auth**: Admin, TL, Agent roles.

---
**Status**: ACTIVE. Follow these rules for all future code generation in this workspace.
