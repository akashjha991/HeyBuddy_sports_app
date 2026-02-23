export default function ForgotPasswordPage() {
  return (
    <section className="card" style={{ marginTop: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Forgot password</h2>
      <p>Enter your email and we will send reset instructions.</p>
      <form>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <button className="btn btn-primary" type="submit">Send reset link</button>
      </form>
    </section>
  );
}
