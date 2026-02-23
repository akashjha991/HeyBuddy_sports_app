import { PlayerCard } from "@/components/PlayerCard";

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  return (
    <section className="grid" style={{ marginTop: "1rem" }}>
      <article className="card">
        <h2 style={{ marginTop: 0 }}>Room: {params.id}</h2>
        <p>Andheri Turf • Today 7:00 PM</p>
        <div className="tags">
          <span className="tag">Cricket</span>
          <span className="tag">Slots left: 3</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
          <button className="btn btn-primary">Join room</button>
          <button className="btn btn-secondary">Share</button>
        </div>
      </article>
      <section className="grid grid-2">
        <PlayerCard name="Aman" level="Intermediate" sports={["Cricket", "Football"]} />
        <PlayerCard name="Riya" level="Advanced" sports={["Cricket"]} />
      </section>
    </section>
  );
}
