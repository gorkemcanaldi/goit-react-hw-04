import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
  });

  return response.data;
};
