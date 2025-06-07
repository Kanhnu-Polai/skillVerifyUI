import axios from "axios";

const base_URL = "http://localhost:8084/api/news";

const NewsService = {
  getAllNews: async () => {
    try {
      const response = await axios.get(base_URL);
      console.log("Fetched response.data:", response.data); // ✅ Correct log
      return response.data; // ✅ returns { articles: [...] }
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  },
};

export default NewsService;