import { nanoid } from "nanoid";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";

const ImageGallery = ({ data, onLoadMore, showButton, onClose }) => {
  return (
    <>
      <ul className="ImageGallery">
        {data && data.map((img) => (
          <ImageGalleryItem
            key={nanoid()}
            webformatURL={img.webformatURL}
            largeImageURL={img.largeImageURL}
            tags={img.tags}
            onClose={onClose}
          />
        ))}
      </ul>
      {showButton && <Button onLoadMore={onLoadMore} />}
    </>
  );
};

export default ImageGallery;
