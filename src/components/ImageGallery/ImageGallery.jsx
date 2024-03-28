import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.small}
          alt={image.alt}
          likes={image.likes}
          create={image.create}
          onClick={() => onClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
