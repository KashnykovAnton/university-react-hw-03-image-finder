const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClose }) => {
  const onClickGalleryItem = () => {
    onClose(largeImageURL);
  };
  return (
    <li className="ImageGalleryItem" onClick={onClickGalleryItem}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
