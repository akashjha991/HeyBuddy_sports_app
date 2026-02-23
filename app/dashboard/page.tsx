import { MapView } from "@/components/MapView";
import { RoomCard } from "@/components/RoomCard";

const rooms = [
  { id: "cricket-evening", sport: "Cricket", location: "Andheri Turf", when: "Today • 7:00 PM", slotsLeft: 3 },
  { id: "football-saturday", sport: "Football", location: "Bandra Ground", when: "Saturday • 6:30 AM", slotsLeft: 5 }
];

export default function DashboardPage() {
  return (
    <section className="grid" style={{ marginTop: "1rem" }}>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Discover games nearby</h2>
        <div className="tags">
          <span className="tag">Cricket</span>
          <span className="tag">Football</span>
          <span className="tag">Badminton</span>
        </div>
        <div className="tags" style={{ marginTop: "0.75rem" }}>
          <span className="tag">Today</span>
          <span className="tag">Tomorrow</span>
          <span className="tag">Weekend</span>
        </div>
      </div>
      <MapView />
      <div className="grid grid-2">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </section>
  );
}
