import React from "react";
import styles from "./Header.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>
        Jérôme Lefeuvre
      </h1>
      <h2>
        Développeur Web
      </h2>
    </header>
  );
}
