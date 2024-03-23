// api.js
const BASE_URL = 'https://json-server-2-6rxd.onrender.com'; // Replace with your JSON Server URL

export const fetchPets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pets`);
    if (!response.ok) {
      throw new Error('Failed to fetch pets');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

// Add more API functions as needed
