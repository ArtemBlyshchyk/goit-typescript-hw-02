import { RefObject } from "react";
import { ImageObj } from "../../hooks/useImagesSearch.types";

export interface ImageGalleryProps {
    results: ImageObj[],
    openModal: (image: ImageObj) => void,
    ref: RefObject<HTMLInputElement>,
  }