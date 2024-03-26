import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { createApi } from "unsplash-js";
import Loader from "../Loader/Loader";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchArticles() {
      try {
        const MY_KEY = "3E1uqS10ft75HtW6n-WWxNngOMkfjOfuZz96c8u9lqU";
        const params = {
          client_id: MY_KEY,
          query: query,
          orientation: "landscape",
          page: pageNum,
          per_page: 12,
        };
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/`,
          {
            params: params,
            headers: {
              Authorization: `Client-ID ${MY_KEY}`,
            },
          }
        );
        setArticles(response.data.hits);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <SearchBar />
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      {articles.length > 0 && <ImageGallery items={articles} />}
    </div>
  );
};

export default App;
