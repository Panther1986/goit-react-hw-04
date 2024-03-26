import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <ImageCard url={url} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
