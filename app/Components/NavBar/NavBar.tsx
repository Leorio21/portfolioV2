import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function NavBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <ToggleTheme />
      <nav className={styles.navBar}>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
