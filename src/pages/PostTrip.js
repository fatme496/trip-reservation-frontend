import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PostTrip.css";

const PostTrip = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    locations: "",
    startDate: "",
    endDate: "",
    price: "",
    availableSlots: "",
    category: ""
  });

  const [message, setMessage] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/categories", {
          withCredentials: true
        });
        setCategoryOptions(data.data);
      } catch (err) {
        console.error("❌ Failed to fetch categories", err);
        setMessage("❌ Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const cityArray = formData.locations
      .split(",")
      .map(city => city.trim())
      .filter(Boolean);

    const tripData = {
      ...formData,
      locations: cityArray,
      price: Number(formData.price),
      availableSlots: Number(formData.availableSlots),
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString()
    };

    try {
      const res = await axios.post("http://localhost:5000/api/trips", tripData, {
        withCredentials: true
      });
      setMessage(res.data.message);
      setFormData({
        title: "",
        description: "",
        locations: "",
        startDate: "",
        endDate: "",
        price: "",
        availableSlots: "",
        category: ""
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-trip-page">
      <h2>Create a Trip</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="trip-form">
        <input name="title" type="text" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

        <label>Enter Locations (comma-separated)</label>
        <input
          name="locations"
          type="text"
          placeholder="e.g., Beirut, Byblos, Tripoli"
          value={formData.locations}
          onChange={handleChange}
          required
        />

        <label>Start Date</label>
        <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />

        <label>End Date</label>
        <input name="endDate" type="date" value={formData.endDate} onChange={handleChange} required />

        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="availableSlots" type="number" placeholder="Available Slots" value={formData.availableSlots} onChange={handleChange} required />

        <label>Select Category</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">-- Select Category --</option>
          {categoryOptions.map(cat => (
            <option key={cat._id} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Trip"}
        </button>
      </form>
    </div>
  );
};

export default PostTrip;

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import "../styles/PostTrip.css";

// // const PostTrip = () => {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     locations: [],
// //     startDate: "",
// //     endDate: "",
// //     price: "",
// //     availableSlots: "",
// //     category: ""
// //   });
// //   const [message, setMessage] = useState("");
// //   const [locationOptions, setLocationOptions] = useState([]);
// //   const [categoryOptions, setCategoryOptions] = useState([]);

// //   useEffect(() => {
// //     const fetchOptions = async () => {
// //       try {
// //         const [locRes, catRes] = await Promise.all([
// //           axios.get("http://localhost:5000/api/locations", { withCredentials: true }),
// //           axios.get("http://localhost:5000/api/categories", { withCredentials: true })
// //         ]);
// //         setLocationOptions(locRes.data.data);
// //         setCategoryOptions(catRes.data.data);
// //       } catch (err) {
// //         console.error("Failed to fetch options", err);
// //       }
// //     };
// //     fetchOptions();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleMultiSelect = (e) => {
// //     const selected = Array.from(e.target.selectedOptions, opt => opt.value);
// //     setFormData(prev => ({
// //       ...prev,
// //       locations: selected
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const tripData = {
// //       ...formData,
// //       price: Number(formData.price),
// //       availableSlots: Number(formData.availableSlots),
// //       startDate: new Date(formData.startDate).toISOString(),
// //       endDate: new Date(formData.endDate).toISOString()
// //     };
// //     try {
// //       const res = await axios.post("http://localhost:5000/api/trips", tripData, {
// //         withCredentials: true
// //       });
// //       setMessage(res.data.response);
// //       setFormData({
// //         title: "",
// //         description: "",
// //         locations: [],
// //         startDate: "",
// //         endDate: "",
// //         price: "",
// //         availableSlots: "",
// //         category: ""
// //       });
// //     } catch (err) {
// //       setMessage(err.response?.data?.message || "❌ Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="post-trip-page">
// //       <h2>Create a Trip</h2>
// //       {message && <p className="message">{message}</p>}
// //       <form onSubmit={handleSubmit} className="trip-form">
// //         <input name="title" type="text" placeholder="Title" value={formData.title} onChange={handleChange} required />
// //         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

// //         <label>Select Locations</label>
// //         <select multiple value={formData.locations} onChange={handleMultiSelect}>
// //           {locationOptions.map(loc => (
// //             <option key={loc._id} value={loc.name}>{loc.name}</option>
// //           ))}
// //         </select>

// //         <label>Start Date</label>
// //         <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />

// //         <label>End Date</label>
// //         <input name="endDate" type="date" value={formData.endDate} onChange={handleChange} required />

// //         <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
// //         <input name="availableSlots" type="number" placeholder="Available Slots" value={formData.availableSlots} onChange={handleChange} required />

// //         <label>Select Category</label>
// //         <select name="category" value={formData.category} onChange={handleChange} required>
// //           <option value="">-- Select Category --</option>
// //           {categoryOptions.map(cat => (
// //             <option key={cat._id} value={cat.name}>{cat.name}</option>
// //           ))}
// //         </select>

// //         <button type="submit">Post Trip</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PostTrip;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/PostTrip.css";

// const PostTrip = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     locations: "", // Now a string input
//     startDate: "",
//     endDate: "",
//     price: "",
//     availableSlots: "",
//     category: ""
//   });

//   const [message, setMessage] = useState("");
//   const [categoryOptions, setCategoryOptions] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const catRes = await axios.get("http://localhost:5000/api/categories", { withCredentials: true });
//         setCategoryOptions(catRes.data.data);
//       } catch (err) {
//         console.error("Failed to fetch categories", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cityArray = formData.locations
//       .split(",")
//       .map(city => city.trim())
//       .filter(city => city !== "");

//     const tripData = {
//       ...formData,
//       locations: cityArray,
//       price: Number(formData.price),
//       availableSlots: Number(formData.availableSlots),
//       startDate: new Date(formData.startDate).toISOString(),
//       endDate: new Date(formData.endDate).toISOString()
//     };

//     try {
//       const res = await axios.post("http://localhost:5000/api/trips", tripData, {
//         withCredentials: true
//       });
//       setMessage("✅ " + res.data.message);
//       setFormData({
//         title: "",
//         description: "",
//         locations: "",
//         startDate: "",
//         endDate: "",
//         price: "",
//         availableSlots: "",
//         category: ""
//       });
//     } catch (err) {
//       setMessage(err.response?.data?.message || "❌ Something went wrong");
//     }
//   };

//   return (
//     <div className="post-trip-page">
//       <h2>Create a Trip</h2>
//       {message && <p className="message">{message}</p>}
//       <form onSubmit={handleSubmit} className="trip-form">
//         <input name="title" type="text" placeholder="Title" value={formData.title} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

//         <label>Enter Locations (comma-separated)</label>
//         <input
//           name="locations"
//           type="text"
//           placeholder="e.g., Beirut, Byblos, Tripoli"
//           value={formData.locations}
//           onChange={handleChange}
//           required
//         />

//         <label>Start Date</label>
//         <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />

//         <label>End Date</label>
//         <input name="endDate" type="date" value={formData.endDate} onChange={handleChange} required />

//         <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
//         <input name="availableSlots" type="number" placeholder="Available Slots" value={formData.availableSlots} onChange={handleChange} required />

//         <label>Select Category</label>
//         <select name="category" value={formData.category} onChange={handleChange} required>
//           <option value="">-- Select Category --</option>
//           {categoryOptions.map(cat => (
//             <option key={cat._id} value={cat.name}>{cat.name}</option>
//           ))}
//         </select>

//         <button type="submit">Post Trip</button>
//       </form>
//     </div>
//   );
// };

// export default PostTrip;