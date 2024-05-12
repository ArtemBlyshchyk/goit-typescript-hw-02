import { FC } from "react";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({ photo, openModal }) => {
  return (
    <div>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;
