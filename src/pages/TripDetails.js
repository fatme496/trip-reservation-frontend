// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/TripDetails.css";

// const TripDetails = () => {
//   const { id } = useParams();
//   const [trip, setTrip] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [numGuests, setNumGuests] = useState(1);
//   const [notes, setNotes] = useState("");
//   const [message, setMessage] = useState("");

//   // State to store current reservation info (null if none)
//   const [reservation, setReservation] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/trips/${id}`)
//       .then(res => {
//         setTrip(res.data.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   const handleReserve = async () => {
//     try {
//     //   const token = localStorage.getItem("authToken");
//       const res = await axios.post("http://localhost:5000/api/reservations/", {
//         trip_id: id,
//         num_guests: numGuests,
//         notes
//       }, {
//       withCredentials: true
//     });
//       setMessage("✅ "+ res.data.message);
//     } catch (error) {
//       setMessage("❌ "+ error.response?.data?.message);
//     }
//   };

//   const formatDate = (date) =>
//     new Date(date).toLocaleDateString(undefined, {
//       weekday: "short", year: "numeric", month: "short", day: "numeric"
//     });

//   const calculateDuration = (start, end) => {
//     const s = new Date(start);
//     const e = new Date(end);
//     const diff = Math.ceil((e - s) / (1000 * 60 * 60 * 24)) || 1;
//     return diff;
//   };

//   if (loading) return <p className="loading-text">Loading trip...</p>;
//   if (!trip) return <p className="error-text">Trip not found.</p>;

//   return (
//     <div className="trip-details-page">
//       <div className="trip-header">
//         <h1>{trip.title}</h1>
//         <p className="trip-location">📍 {trip.locations?.map(loc => loc.name).join(", ")}</p>
//       </div>

//       <div className="trip-body">
//         <img src="/placeholder.jpg" alt={trip.title} className="trip-details-image" />
//         <div className="trip-info">
//           <p><strong>🗓️ Date:</strong> {formatDate(trip.startDate)} - {formatDate(trip.endDate)}</p>
//           <p><strong>🕒 Duration:</strong> {calculateDuration(trip.startDate, trip.endDate)} day(s)</p>
//           <p><strong>💺 Slots Left:</strong> {trip.availableSlots}</p>
//           <p><strong>💵 Price:</strong> ${trip.price}</p>
//           <p><strong>📝 Description:</strong> {trip.description}</p>

//           <div className="reservation-form">
//             <h3>Reserve This Trip</h3>
//             <label>Number of Guests</label>
//             <input type="number" value={numGuests} min="1" max={trip.availableSlots}
//                    onChange={(e) => setNumGuests(e.target.value)} />

//             <label>Notes (optional)</label>
//             <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />

//             <button onClick={handleReserve} className="reserve-btn">Reserve Now</button>
//             {message && <p className="reservation-msg">{message}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripDetails;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/TripDetails.css";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numGuests, setNumGuests] = useState(1);
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  
  // State to store current reservation info (null if none)
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch trip details
        const tripRes = await axios.get(`http://localhost:5000/api/trips/${id}`);
        setTrip(tripRes.data.data);

        // Fetch existing reservation for this trip by current user
        const resRes = await axios.get(`http://localhost:5000/api/reservations/user/${id}`, {
          withCredentials: true
        });
        if (resRes.data.data) {
          setReservation(resRes.data.data);
          setNumGuests(resRes.data.data.num_guests);
          setNotes(resRes.data.data.notes || "");
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Handle making a new reservation
  const handleReserve = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/reservations/",
        {
          trip_id: id,
          num_guests: numGuests,
          notes,
        },
        { withCredentials: true }
      );
      setMessage("✅ " + res.data.message);
      setReservation(res.data.data); // Save reservation to state
    } catch (error) {
      setMessage("❌ " + error.response?.data?.message || error.message);
    }
  };

  // Handle updating existing reservation
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/reservations/${reservation._id}`,
        {
          num_guests: numGuests,
          notes,
        },
        { withCredentials: true }
      );
      setMessage("✅ " + res.data.message);
      setReservation(res.data.data); // Update reservation state
    } catch (error) {
      setMessage("❌ " + error.response?.data?.message || error.message);
    }
  };

  // Handle canceling reservation
  const handleCancel = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/reservations/${reservation._id}`,
        { withCredentials: true }
      );
      setMessage("✅ " + res.data.message);
      setReservation(null);
      setNumGuests(1);
      setNotes("");
    } catch (error) {
      setMessage("❌ " + error.response?.data?.message || error.message);
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const calculateDuration = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = Math.ceil((e - s) / (1000 * 60 * 60 * 24)) || 1;
    return diff;
  };

  if (loading) return <p className="loading-text">Loading trip...</p>;
  if (!trip) return <p className="error-text">Trip not found.</p>;

  return (
    <div className="trip-details-page">
      <div className="trip-header">
        <h1>{trip.title}</h1>
        <p className="trip-location">📍 {trip.locations?.map((loc) => loc.name).join(", ")}</p>
      </div>

      <div className="trip-body">
        <img src="https://i.ibb.co/Hp1xX8Hr/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt={trip.title} className="trip-details-image" />
        <div className="trip-info">
          <p>
            <strong>🗓️ Date:</strong> {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
          </p>
          <p>
            <strong>🕒 Duration:</strong> {calculateDuration(trip.startDate, trip.endDate)} day(s)
          </p>
          <p>
            <strong>💺 Slots Left:</strong> {trip.availableSlots}
          </p>
          <p>
            <strong>💵 Price:</strong> ${trip.price}
          </p>
          <p>
            <strong>📝 Description:</strong> {trip.description}
          </p>

          <div className="reservation-form">
            <h3>{reservation ? "Update Your Reservation" : "Reserve This Trip"}</h3>
            <label>Number of Guests</label>
            <input
              type="number"
              value={numGuests}
              min="1"
              max={trip.availableSlots + (reservation ? reservation.num_guests : 0)} // Allow increase within capacity
              onChange={(e) => setNumGuests(e.target.value)}
            />

            <label>Notes (optional)</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />

            {!reservation ? (
              <button onClick={handleReserve} className="reserve-btn">
                Reserve Now
              </button>
            ) : (
              <>
                <button onClick={handleUpdate} className="update-btn">
                  Update Reservation
                </button>
                {reservation && (
  <>
    <p>Status: <strong>{reservation.status}</strong></p>
    <button onClick={handleCancel} className="cancel-btn">Cancel Reservation</button>
  </>
)}
              </>
            )}

            {message && <p className="reservation-msg">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;