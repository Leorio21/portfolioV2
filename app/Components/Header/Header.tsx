import React from "react";
import styles from "./Header.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";

export default function Header() {
  return (
    <header className={styles.container}>
        <AnimatedText
          inTextStart={"$" + "{name}"}
          inTextEnd="Jérôme Lefeuvre"
        />
        <AnimatedText
          inTextStart={"$" + "{profession}"}
          inTextEnd="Développeur Web"
          inStartDelay={500}
        />
    </header>
  );
}
