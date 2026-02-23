export default function ProfilePage() {
  return (
    <section className="card" style={{ marginTop: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Your Profile</h2>
      <p>Manage sports preferences and history.</p>
      <div className="tags">
        <span className="tag">Rating: 4.7</span>
        <span className="tag">Games played: 24</span>
        <span className="tag">Hosted: 7</span>
      </div>
    </section>
  );
}
