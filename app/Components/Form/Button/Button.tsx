import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  inType: "button" | "submit" | "reset";
  inValue: string;
  inColor?: "send" | "reset";
  inOnClick?: () => void;
}

export default function ButtonForm({
  inType,
  inValue,
  inColor = "send",
  inOnClick = () => {},
}: ButtonProps): JSX.Element {
  return (
    <button
      type={inType}
      className={`${styles.button} ${styles[inColor]}`}
      onClick={inOnClick}
    >
      {inValue}
    </button>
  );
}
