import { useEffect, useRef, useState } from "react";
import { requestPhotos } from "../api/api";
import { ImageObj } from "./useImagesSearch.types";

const useImagesSearch = () => {
  const [results, setResults] = useState<ImageObj[] | null>(null);
  const [query, setQuery] = useState<string>(""); // input
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageObj | null>(null); // State of chosen photo
  const [showBtn, setShowBtn] = useState<boolean>(false);
  //Auto scroll
  const listRef = useRef<HTMLInputElement>(null);
  const scrollHeight = useRef(0);
  useEffect(() => {
    if (!listRef.current) return;
    window.scroll({ behavior: "smooth", top: scrollHeight.current });
    scrollHeight.current = listRef.current.clientHeight;
  }, [results]);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchPhotosByQuery(): Promise<void> {
      try {
        setIsLoading(true);
        const data = await requestPhotos(query, page);

        setShowBtn(data.total_pages > page);
        if (results === null) {
          setResults(data.results);
        } else {
          setResults((prevResults) => {
            if (prevResults === null) {
              return data.results;
            } else{
              return [...prevResults, ...data.results]
            }
          } );
        }
        setIsLoadMore(true);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query, page]);

  const onSetSearchQuery = (searchPhotos: string): void => {
    if (searchPhotos === query) {
      return;
    } else {
      setQuery(searchPhotos);
    }
    //Remove previous quiry
    setResults([]);
  };

  const onSetMorePhotos = (): void => {
    setPage((prevPage: number) => prevPage + 1);
  };

  //Modal React options
  const openModal = (image: ImageObj): void => {
    // Pass this function like a props to the ImageGallery component
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return {
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
  };
};

export default useImagesSearch;
