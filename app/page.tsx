import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid" style={{ marginTop: "1rem" }}>
      <div className="card">
        <h1>Find your next game in 3 clicks</h1>
        <p>Open app → discover nearby rooms → join instantly.</p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link href="/dashboard"><button className="btn btn-primary">Go to dashboard</button></Link>
          <Link href="/rooms/create"><button className="btn btn-secondary">Create room</button></Link>
        </div>
      </div>
    </section>
  );
}
