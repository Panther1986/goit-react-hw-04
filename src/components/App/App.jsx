import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );

  // return <Player source={"http://media.w3.org/2010/05/sintel/trailer.mp4"} />;

  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const handleSearch = async (topic) => {
  //   try {
  //     setArticles([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await fetchArticlesWithTopic(topic);
  //     setArticles(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // return (
  //   <div>
  //     <SearchForm onSearch={handleSearch} />
  //     {loading && (
  //       <div>
  //         <Audio />
  //       </div>
  //     )}
  //     {error && (
  //       <p>Whoops, something went wrong! Please try reloading this page!</p>
  //     )}
  //     {articles.length > 0 && <ArticleList items={articles} />}
  //   </div>
  // );
};

export default App;
