import React from "react";
import styles from "./Header.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>
        <AnimatedText inTextStart={"{name}"} inTextEnd="Jérôme Lefeuvre" />
      </h1>
      <h2>
        <AnimatedText
          inTextStart={"{profession}"}
          inTextEnd="Développeur Web"
          inStartDelay={500}
        />
      </h2>
    </header>
  );
}
