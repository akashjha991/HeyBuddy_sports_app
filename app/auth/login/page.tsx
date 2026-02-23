export default function LoginPage() {
  return (
    <section className="card" style={{ marginTop: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Login</h2>
      <form>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="btn btn-primary" type="submit">Continue</button>
      </form>
    </section>
  );
}
