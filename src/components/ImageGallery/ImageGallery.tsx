import { FC, Ref, forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

//React.FC<ImageGalleryProps> One from variant
const ImageGallery: FC<ImageGalleryProps> = forwardRef(function ImageGallery(
  { results, openModal },
  ref: Ref<HTMLUListElement>
) {
  return (
    <ul className={css.listContainer} ref={ref}>
      {Array.isArray(results) &&
        results.map((photo) => {
          return (
            <li key={photo.id}>
              <ImageCard photo={photo} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
});

export default ImageGallery;
