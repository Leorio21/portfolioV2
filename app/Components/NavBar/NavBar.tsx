import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function NavBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <ToggleTheme />
      <nav className={styles.navBar}>
        <a href="#competences" className={styles.navBar__Item}>
          Compétences
        </a>
        <a href="#projets" className={styles.navBar__Item}>
          Projets
        </a>
        <a href="#contact" className={styles.navBar__Item}>
          Contact
        </a>
      </nav>
    </div>
  );
}
