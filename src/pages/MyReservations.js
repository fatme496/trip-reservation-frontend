// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/MyReservations.css";

// const MyReservations = () => {
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/reservations/user", { withCredentials: true })
//       .then(res => setReservations(res.data.reservations))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="my-reservations-page">
//       <h2>My Reservations</h2>
//       {reservations.length === 0 ? (
//         <p>You have no reservations yet.</p>
//       ) : (
//         <ul className="reservation-list">
//           {reservations.map((res) => (
//             <li key={res._id} className="reservation-item">
//               <h3>{res.trip_id?.title}</h3>
//               <p>📍 {res.trip_id?.locations?.map(l => l.name).join(", ")}</p>
//               <p>🗓️ {new Date(res.trip_id.startDate).toLocaleDateString()} - {new Date(res.trip_id.endDate).toLocaleDateString()}</p>
//               <p>👥 Guests: {res.num_guests}</p>
//               <p>Status: <strong>{res.status}</strong></p>
//               {/* Optional cancel button here if not too close */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyReservations;
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MyReservations.css";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = () => {
    axios.get("http://localhost:5000/api/reservations/user", { withCredentials: true })
      .then(res => setReservations(res.data.reservations))
      .catch(err => console.error(err));
  };

  const handleCancel = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/reservations/${id}`, { withCredentials: true });
      setMessage("✅ " + res.data.message);
      fetchReservations(); // Refresh the list
    } catch (err) {
      setMessage("❌ " + err.response?.data?.message || "Failed to cancel");
    }
  };

  const canCancel = (startDate, status) => {
    if (status !== "confirmed") return false;
    const now = new Date();
    const tripStart = new Date(startDate);
    const cutoff = new Date(tripStart.getTime() - 24 * 60 * 60 * 1000); // 24 hours before
    return now < cutoff;
  };

  return (
    <div className="my-reservations-page">
      <h2>My Reservations</h2>
      {message && <p className="reservation-msg">{message}</p>}

      {reservations.length === 0 ? (
        <p>You have no reservations yet.</p>
      ) : (
        <ul className="reservation-list">
          {reservations.map((res) => (
            <li key={res._id} className="reservation-item">
              <h3>{res.trip_id?.title}</h3>
              <p>📍 {res.trip_id?.locations?.map(l => l.name).join(", ")}</p>
              <p>🗓️ {new Date(res.trip_id.startDate).toLocaleDateString()} - {new Date(res.trip_id.endDate).toLocaleDateString()}</p>
              <p>👥 Guests: {res.num_guests}</p>
              <p>Status: <strong>{res.status}</strong></p>

              {canCancel(res.trip_id.startDate, res.status) && (
                <button
                  onClick={() => handleCancel(res._id)}
                  className="cancel-btn"
                >
                  Cancel Reservation
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;