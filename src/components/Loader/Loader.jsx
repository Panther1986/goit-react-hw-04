import { Comment } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Comment
        visible={true}
        height={50}
        width={50}
        color="gray"
        strokeWidth={5}
        animationDuration={0.75}
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
