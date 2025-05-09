import { useState } from "react";

export default function TripPage() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [note, setNote] = useState("");

  const handleReservation = (e) => {
    e.preventDefault();
    alert(`Reserved ${seats} seat(s) for ${name}.`);
  };

  return (
    <div className="trip-page">
      <style>
        {`
          .trip-page {
            font-family: 'Segoe UI', sans-serif;
            padding: 40px;
            background-color: #f7f9fb;
            color: #002D46;
            max-width: 800px;
            margin: 0 auto;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            margin-top:30px;
          }
          .trip-title {
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .trip-details {
            margin-bottom: 20px;
            line-height: 1.6;
          }
          form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
          }
          input, textarea, select {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ccc;
            border-radius: 8px;
          }
          button {
            background-color: #002D46;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
          }
          button:hover {
            background-color: #00172e;
          }
        `}
      </style>

      <div className="trip-title">Trip to Cedars Forest</div>

      <div className="trip-details">
        <p><strong>Date:</strong> June 15, 2025</p>
        <p><strong>Location:</strong> Bsharri, North Lebanon</p>
        <p><strong>Seats Available:</strong> 30</p>
        <p><strong>Description:</strong> Join us for a day trip to the legendary Cedars Forest. Transportation and snacks included!</p>
      </div>

      <form onSubmit={handleReservation} style={{alignItems:"normal"}}>
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Seat{ i > 0 ? 's' : '' }
            </option>
          ))}
        </select>

        <textarea
          placeholder="Any notes or preferences?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
        />

        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import "../styles/TripPage.css"; // Optional: your CSS file

// const TripPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     participants: 1,
//   });

//   const [reserved, setReserved] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleReservation = (e) => {
//     e.preventDefault();
//     // Here you can call your backend API to store the reservation
//     console.log("Reservation submitted:", formData);
//     setReserved(true);
//   };

//   return (
//     <div className="trip-page">
//       <div className="trip-header">
//         <h1>Trip to Chouwen Lake</h1>
//         <img src="/images/chouwen-banner.jpg" alt="Chouwen Lake" />
//         <p className="short-description">
//           Discover Lebanon's hidden paradise on this 1-day hiking trip!
//         </p>
//       </div>

//       <div className="trip-info">
//         <p><strong>Date:</strong> June 10, 2025</p>
//         <p><strong>Time:</strong> 8:00 AM - 5:00 PM</p>
//         <p><strong>Price:</strong> $25 per person</p>
//         <p><strong>Location:</strong> Chouwen, Jbeil District</p>
//       </div>

//       <div className="trip-details">
//         <h2>Itinerary</h2>
//         <ul>
//           <li>08:00 – Departure from Beirut</li>
//           <li>10:00 – Arrive at Chouwen</li>
//           <li>10:30 – Start hiking</li>
//           <li>13:00 – Lunch & swimming</li>
//           <li>15:00 – Return hike</li>
//           <li>17:00 – Head back to Beirut</li>
//         </ul>

//         <h2>What's Included</h2>
//         <ul>
//           <li>Transportation</li>
//           <li>Guided hike</li>
//           <li>Snacks</li>
//         </ul>

//         <h2>What to Bring</h2>
//         <ul>
//           <li>Comfortable shoes</li>
//           <li>Water bottle</li>
//           <li>Swimwear & towel</li>
//         </ul>
//       </div>

//       <div className="reservation-form">
//         <h2>Reserve Your Spot</h2>
//         {reserved ? (
//           <p className="success-message">✅ Reservation successful! We'll contact you soon.</p>
//         ) : (
//           <form onSubmit={handleReservation}>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="number"
//               name="participants"
//               placeholder="Number of Participants"
//               min="1"
//               value={formData.participants}
//               onChange={handleChange}
//               required
//             />
//             <button type="submit">Reserve Now</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TripPage;
