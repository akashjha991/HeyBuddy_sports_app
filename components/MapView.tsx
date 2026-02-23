export function MapView() {
  return (
    <section className="card" aria-label="Map preview">
      <h3 style={{ marginTop: 0 }}>Nearby map (placeholder)</h3>
      <p>Google Maps integration will plot nearby rooms here.</p>
      <div
        style={{
          borderRadius: 12,
          background: "linear-gradient(140deg, #e6fff2, #e6efff)",
          height: 220,
          display: "grid",
          placeItems: "center",
          color: "#1d4064",
          fontWeight: 700
        }}
      >
        🗺️ Map View
      </div>
    </section>
  );
}
