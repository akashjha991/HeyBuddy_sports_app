import Link from "next/link";

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" style={{ textDecoration: "none", color: "#0f2f4b" }}>
          <strong>🏅 Hey Buddy</strong>
        </Link>
        <Link href="/auth/login" style={{ textDecoration: "none" }}>
          <button className="btn btn-secondary">Login</button>
        </Link>
      </div>
    </header>
  );
}
