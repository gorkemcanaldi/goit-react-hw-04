import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
