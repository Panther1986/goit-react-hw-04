import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import css from "./App.module.css";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "../../../src/articles-api";
import SearchForm from "../SearchForm";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <div>
          <Audio />
        </div>
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
