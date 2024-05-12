import { FC } from "react";
import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: FC<ErrorMessageProps> = ({
  message = "Something seems to have gone wrong, please reload the page!",
}) => {
  return <p className={css.errorNotification}>{message}</p>;
};

export default ErrorMessage;
