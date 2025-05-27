// tripService.js
const API_BASE_URL = "http://localhost:5000/api"; // adjust your backend URL here

export async function fetchTrips(filters = {}) {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}/trips/filter/search?${queryParams}`);
    if (!response.ok) {
      throw new Error("Failed to fetch trips");
    }
    const trips = await response.json();
    return trips;
  } catch (error) {
    console.error("Error fetching trips:", error);
    throw error;
  }
}