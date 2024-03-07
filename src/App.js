import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { getImagesApi } from "./services/api";
import { infoMessage, errorMessage } from "./services/toasts";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    searchValue: "",
    page: 1,
    total: 0,
    showButton: true,
    isLoading: false,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.getImages();
    } else if (prevState.page !== this.state.page) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { searchValue, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await getImagesApi(searchValue, page);
      this.setState(
        (prevState) => ({
          images: prevState.images.length !== 0 ? [...prevState.images, ...hits] : hits,
          total: totalHits,
        }),
        () => {
          this.checkLengthArr();
        }
      );
    } catch (error) {
      errorMessage(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = (value) => {
    this.setState({ searchValue: value, images: [], showButton: true, page: 1 });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  clearRender = () => {
    this.setState({ searchValue: "" });
  };

  checkLengthArr = () => {
    if (this.state.images.length === this.state.total) {
      infoMessage("Unfortunately, there are no more images with this name");
      this.setState({ showButton: false });
    }
  };

  toggleModal = (largeImageURL) => {
    this.setState((state) => ({
      showModal: !state.showModal,
      largeImageURL: largeImageURL,
    }));
  };

  render() {
    const { images, showButton, searchValue, isLoading, showModal, largeImageURL } = this.state;
    const { handleSearchSubmit, clearRender, handleLoadMore, toggleModal } = this;
    return (
      <div className="App">
        <Searchbar onSubmit={handleSearchSubmit} clearRender={clearRender} />
        {searchValue !== "" && (
          <ImageGallery data={images} onLoadMore={handleLoadMore} showButton={showButton} onClose={toggleModal} />
        )}
        {searchValue === "" && <p className="Text">Start search some images!</p>}
        {isLoading && <Loader />}
        {showModal && <Modal value={searchValue} onClose={toggleModal} largeImageURL={largeImageURL} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
