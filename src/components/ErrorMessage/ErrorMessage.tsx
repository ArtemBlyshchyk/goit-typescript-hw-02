import { FC } from "react";
import css from "./ErrorMessage.module.css";

// First variant
// const ErrorMessage: FC = () => {
//   return <p className={css.errorNotification}>Something seems to have gone wrong, please reload the page!</p>;
// };

//Second variant
const message: string = 'Something seems to have gone wrong, please reload the page!';

const ErrorMessage: FC = (
) => {
  return <p className={css.errorNotification}>{message}</p>;
};

export default ErrorMessage;
