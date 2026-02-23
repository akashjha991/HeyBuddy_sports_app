# HeyBuddy Sports App (Frontend Scaffold)

This repository contains a Next.js App Router frontend scaffold for a mobile-first sports room discovery platform.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Included modules
- Auth pages (`/auth/login`, `/auth/signup`, `/auth/forgot-password`)
- Dashboard (`/dashboard`)
- Create room (`/rooms/create`)
- Room detail (`/rooms/[id]`)
- Profile (`/profile`)
- Shared UI components and API/store scaffolding

## Vercel deployment notes
- Uses stable `next@14` + `react@18.2` pair for compatibility.
- Requires Node.js `>=18.18.0` (set in `package.json` engines).
- `tsconfig.json` includes `baseUrl` for alias path resolution on CI/build agents.
