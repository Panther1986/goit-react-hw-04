const ImageCard = ({ imageUrl, alt, onClick }) => {
  return (
    <li>
      <div>
        <img
          src={imageUrl}
          alt={alt}
          onClick={onClick}
          width="320"
          height="200"
        />
      </div>
    </li>
  );
};

export default ImageCard;
