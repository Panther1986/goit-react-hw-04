const ImageCard = ({ imageUrl, alt, onClick, likes, create }) => {
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
        <p>Data of create: {create}</p>
        <p>Likes: {likes}</p>
      </div>
    </li>
  );
};

export default ImageCard;
