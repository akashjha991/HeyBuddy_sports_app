import Link from "next/link";

type RoomCardProps = {
  id: string;
  sport: string;
  location: string;
  when: string;
  slotsLeft: number;
};

export function RoomCard({ id, sport, location, when, slotsLeft }: RoomCardProps) {
  return (
    <article className="card">
      <h3 style={{ marginTop: 0 }}>{sport}</h3>
      <p>{location}</p>
      <div className="tags">
        <span className="tag">{when}</span>
        <span className="tag">{slotsLeft} slots left</span>
      </div>
      <Link href={`/rooms/${id}`}>
        <button className="btn btn-primary" style={{ marginTop: "0.8rem" }}>Join room</button>
      </Link>
    </article>
  );
}
