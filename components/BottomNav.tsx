import Link from "next/link";

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/rooms/create">Create</Link></li>
        <li><Link href="/rooms/demo-room">Room</Link></li>
        <li><Link href="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}
