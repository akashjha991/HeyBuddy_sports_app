type PlayerCardProps = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  sports: string[];
};

export function PlayerCard({ name, level, sports }: PlayerCardProps) {
  return (
    <article className="card">
      <h4 style={{ marginTop: 0 }}>{name}</h4>
      <p>{level}</p>
      <div className="tags">
        {sports.map((sport) => (
          <span key={sport} className="tag">{sport}</span>
        ))}
      </div>
    </article>
  );
}
