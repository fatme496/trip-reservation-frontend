// components/FilterSidebar.jsx
// import React, { useState } from "react";
import '../styles/FilterSidebar.css';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCheckbox = (e) => {
  //   const { name, value, checked } = e.target;
  //   setFilters((prev) => {
  //     const types = new Set(prev[name] || []);
  //     if (checked) types.add(value);
  //     else types.delete(value);
  //     return { ...prev, [name]: Array.from(types) };
  //   });
  // };

  return (
    <aside className="sidebar">
      <h3>Filter Trips</h3>

      <label>Search Title</label>
      <input
        type="text"
        name="title"
        value={filters.title || ""}
        onChange={handleChange}
        placeholder="e.g., beach"
      />

      <label>Start Date</label>
      <input
        type="date"
        name="startDate"
        value={filters.startDate || ""}
        onChange={handleChange}
      />

      <label>Location</label>
      <select name="location" value={filters.location || ""} onChange={handleChange}>
        <option value="">All</option>
        <option value="665c1fd9a9e4de19b5c427c1">Beirut</option>
        <option value="665c1fd9a9e4de19b5c427c2">Jbeil</option>
        {/* Add real location IDs dynamically later */}
      </select>

      {/* <label>Location</label>
      <select name="location" onChange={handleChange}>
        <option value="">All</option>
        <option value="Beirut">Beirut</option>
        <option value="Jbeil">Jbeil</option>
      </select> */}

      <label>Category</label>
      <select name="category" value={filters.category || ""} onChange={handleChange}>
        <option value="">All</option>
        <option value="665c1fc5a9e4de19b5c427ae">Adventure</option>
        <option value="665c1fc5a9e4de19b5c427af">Culture</option>
      </select>

      {/* <label>Trip Type</label>
      <div>
        <input type="checkbox" name="type" value="Hiking" onChange={handleCheckbox} /> Hiking
        <input type="checkbox" name="type" value="Camping" onChange={handleCheckbox} /> Camping
        <input type="checkbox" name="type" value="Cultural" onChange={handleCheckbox} /> Cultural
      </div>

      <label>Difficulty</label>
      <div>
        <input type="radio" name="difficulty" value="Easy" onChange={handleChange} /> Easy
        <input type="radio" name="difficulty" value="Medium" onChange={handleChange} /> Medium
        <input type="radio" name="difficulty" value="Hard" onChange={handleChange} /> Hard
      </div> */}
    </aside>
  );
};

export default FilterSidebar;