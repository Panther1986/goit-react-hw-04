import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { createApi } from "unsplash-js";
// import nodeFetch from "node-fetch";

const API_URL = "https://api.unsplash.com/photos/";

const MY_KEY = "3E1uqS10ft75HtW6n-WWxNngOMkfjOfuZz96c8u9lqU";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${MY_KEY}`
      );
      const data = await response.json();
      console.log(data);

      // setArticles(response.data.hits);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <SearchBar />
      {articles.length > 0 && (
        <ul>
          {articles.map(({ id, urls, alt_description }) => (
            <li key={id}>
              <a href={urls.full} target="_blank" rel="noreferrer noopener">
                {alt_description}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
