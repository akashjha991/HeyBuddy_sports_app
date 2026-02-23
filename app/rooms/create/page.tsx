export default function CreateRoomPage() {
  return (
    <section className="card" style={{ marginTop: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Create a Room</h2>
      <p>Set up a match in under a minute.</p>
      <form className="grid grid-2">
        <label>
          Sport
          <select defaultValue="Cricket">
            <option>Cricket</option>
            <option>Football</option>
            <option>Badminton</option>
          </select>
        </label>

        <label>
          Required Players
          <input type="number" min={2} max={22} defaultValue={10} />
        </label>

        <label>
          Date
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label style={{ gridColumn: "1 / -1" }}>
          Location
          <input placeholder="Search location or drop pin" />
        </label>

        <label style={{ gridColumn: "1 / -1" }}>
          Description
          <textarea rows={4} placeholder="Skill level, bring your gear, etc." />
        </label>
      </form>
      <button className="btn btn-primary">Create room</button>
    </section>
  );
}
