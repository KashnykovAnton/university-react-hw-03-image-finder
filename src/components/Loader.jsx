import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots visible={true} height="80" width="80" color="#3f51b5" ariaLabel="three-dots-loading" />
  );
};

export default Loader;
