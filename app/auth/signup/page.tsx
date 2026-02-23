export default function SignupPage() {
  return (
    <section className="card" style={{ marginTop: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Sign up</h2>
      <form>
        <label>
          Full name
          <input placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create a secure password" />
        </label>
        <button className="btn btn-primary" type="submit">Create account</button>
      </form>
    </section>
  );
}
