import { ImageObj } from "../../hooks/useImagesSearch.types";

export interface ImageCardProps {
    photo: ImageObj;
    openModal: (image: ImageObj) => void;
  }