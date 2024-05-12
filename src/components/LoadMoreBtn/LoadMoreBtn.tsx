import { FC } from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onSetMorePhotos }) => {
  return (
    <div className={css.buttonContainer}>
      <button onClick={onSetMorePhotos}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
