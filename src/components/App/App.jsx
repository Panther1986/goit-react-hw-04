import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { createApi } from "unsplash-js";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMoreImages, setHasMoreImages] = useState(true);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchArticles(query, pageNum) {
    try {
      setLoading(true);
      const MY_KEY = "3E1uqS10ft75HtW6n-WWxNngOMkfjOfuZz96c8u9lqU";
      const params = {
        client_id: MY_KEY,
        query: query,
        orientation: "landscape",
        page: pageNum,
        per_page: 12,
      };
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/`,
        {
          params: params,
          headers: {
            Authorization: `Client-ID ${MY_KEY}`,
          },
        }
      );
      const normalizadeData = response.data.results.map(
        ({ alt_description, id, urls, likes, created_at }) => ({
          alt: alt_description,
          id,
          small: urls.small,
          regular: urls.regular,
          likes: likes,
          create: created_at,
        })
      );
      if (pageNum === 1) {
        setImages(normalizadeData);
      } else {
        setImages((prevImages) => [...prevImages, ...normalizadeData]);
      }
      setError(false);

      if (response.data.results.length === 0) {
        setHasMoreImages(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query !== "") {
      fetchArticles(query, 1);
      setPage(1);
      setImages([]);
      setHasMoreImages(true);
    }
    if (page > 1) {
      fetchArticles(query, page);
    }
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}
      {hasMoreImages && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          images={selectedImage}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
