# SportsBuddy (Hey Buddy) Frontend Plan

## Product Goals
Build a frontend that is:
- ⚡ **Fast** (low-latency interactions, optimized rendering)
- 📱 **Mobile-first** (one-hand usage, simple navigation)
- 🎯 **Easy to use** (clear user journeys and minimal friction)
- 🧭 **Location-aware** (nearby room discovery and map-based interactions)

Core UX promise:
> **Open app → Find game → Join game in 3 clicks**

---

## 1) Recommended Frontend Stack
- **Next.js (App Router)** for routing, server components, and performance.
- **React** for UI composition.
- **Tailwind CSS** for utility-first styling.
- **shadcn/ui** for accessible and consistent UI primitives.
- **Axios** for API calls and interceptors.
- **Redux Toolkit** (or Context API for MVP) for app-wide state.
- **Google Maps API** for map picker and nearby discovery.
- **Socket.io Client** for real-time notifications and room updates (Phase 2).

---

## 2) Suggested Folder Structure
```txt
/app
  /auth
  /dashboard
  /rooms
  /profile
/components
  Navbar
  RoomCard
  PlayerCard
  MapView
/services
  api.ts
/store
  authSlice.ts
  roomSlice.ts
/utils
```

### Scaling Notes
- Keep shared UI in `/components` and route-specific UI under each `/app` segment.
- Add `/types` once API response models grow.
- Add `/hooks` for reusable logic (`useAuth`, `useNearbyRooms`, etc.).

---

## 3) Core Frontend Modules

### A. Authentication Module
**Pages**
- Login
- Signup
- Forgot Password

**Features**
- JWT storage (secure strategy based on backend auth design)
- Form validation with clear field-level errors
- Protected routes for authenticated areas

---

### B. Dashboard Module
**Purpose**
Main landing experience after login.

**UI Sections**
- Sport search (Cricket, Football, Badminton)
- Nearby rooms list
- "Create Room" call-to-action
- Quick filters: Today / Tomorrow / Weekend

---

### C. Create Room Module
**Fields**
- Sport type
- Date
- Time
- Location (map picker + manual address fallback)
- Required players
- Description

**UX Flow**
1. Fill form
2. Submit
3. API request
4. Success feedback
5. Redirect to room detail

---

### D. Room Detail Module
**Display**
- Room details
- Joined players
- Slots left
- Join button
- Optional chat section (Phase 2)

**Host/Admin Controls**
- Accept player
- Remove player
- Close room

---

### E. Map + Nearby Discovery Module
**Features**
- Nearby rooms on map
- Distance filters (5km, 10km, custom)
- Auto location detection + permission handling
- Graceful fallback when location is denied

---

### F. Profile Module
**Features**
- Edit profile
- Sports preferences
- Rating display
- Past games
- Hosted rooms history

---

### G. Real-time Module (Phase 2)
**Events**
- Live join notifications
- Room updates
- In-room chat
- Match reminders

---

## 4) UI Design System Direction
- Rounded cards with clean spacing
- Minimal visual clutter
- Light/Dark mode toggle
- Sporty brand palette (Green + Blue)
- Consistent button hierarchy (Primary, Secondary, Tertiary)

---

## 5) Mobile-First UX Strategy
- Bottom navigation for primary tabs
- Large tap targets and clear call-to-actions
- Sticky “Create Room” button on key screens
- One-hand-friendly interactions for core journeys
- Optimized list performance for low-end devices

---

## 6) API Integration Plan
1. Create `/services/api.ts` with Axios instance.
2. Add interceptors for auth token + error normalization.
3. Implement reusable service functions:
   - `login()`
   - `register()`
   - `createRoom()`
   - `getNearbyRooms()`
   - `joinRoom()`
4. Centralize API error handling to simplify UI logic.

---

## 7) State Management Plan
Use Redux Toolkit (recommended) for:
- Logged-in user session
- Active room state
- Notifications
- Search/filter criteria

MVP shortcut:
- Use Context API for auth + simple UI state.
- Migrate to Redux Toolkit when async/state complexity grows.

---

## 8) Delivery Phases

### Phase 1 (MVP)
- Auth
- Dashboard
- Create Room
- Join Room
- Profile

### Phase 2
- Chat
- Real-time room updates
- Ratings system

### Phase 3
- Payments (optional)
- Tournament mode
- AI team matching

---

## 9) Success Metrics (Recommended)
Track these from day one:
- Time to first room discovery
- Join conversion rate
- % users who join within 3 clicks
- Drop-off points in create/join flows
- Daily active users near target locations

---

## 10) Immediate Build Order (Practical Sprint Plan)
1. Bootstrap Next.js app shell + theme + base layout.
2. Implement auth flows + route guards.
3. Build dashboard with filters and nearby room list.
4. Add create room form + validation + API integration.
5. Implement room detail/join flow.
6. Add profile management.
7. Introduce map integration.
8. Add real-time features.

This sequence gets the core "find and join game quickly" value shipped early while keeping architecture scalable.
