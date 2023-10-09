import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  value: string;
  color?: "send" | "reset";
  onClick?: () => void;
}

export default function ButtonForm({
  type,
  value,
  color = "send",
  onClick = () => {},
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
