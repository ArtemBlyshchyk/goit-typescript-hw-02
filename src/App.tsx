import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ReactModal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";
import useImagesSearch from "./hooks/useImagesSearch";

ReactModal.setAppElement("#root");

function App() {
  //Custom hook
  const {
    results,
    isLoading,
    isError,
    isLoadMore,
    isModalOpen,
    selectedImage,
    showBtn,
    onSetSearchQuery,
    onSetMorePhotos,
    openModal,
    closeModal,
    listRef,
  } = useImagesSearch();

  
  return (
    <>
      <SearchBar onSubmit={onSetSearchQuery} />
      {results && (
        <ImageGallery results={results} openModal={openModal} ref={listRef} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isLoadMore && results && results.length !== 0 && showBtn && (
        <LoadMoreBtn onSetMorePhotos={onSetMorePhotos} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageUrl={selectedImage.urls.regular}
          imgData={selectedImage}
        />
      )}
    </>
  );
}

export default App;
