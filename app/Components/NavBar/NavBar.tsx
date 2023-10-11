"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { RxHamburgerMenu, RxCrossCircled } from "react-icons/rx";

export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const burger = document.getElementById("menu");
    const menuContainer = document.getElementById("menu_container");
    if (burger !== null && menuContainer !== null && window.innerWidth < 550) {
      if (!isMenuOpen) {
        menuContainer.classList.add(styles.openMenu);
        burger.classList.add(styles.move);
      } else {
        burger.classList.remove(styles.move);
        menuContainer.classList.remove(styles.openMenu);
      }
      setIsMenuOpen((prev: boolean) => !prev);
    }
  };

  return (
    <div className={styles.container} id="menu_container">
      <RxHamburgerMenu
        className={`${styles.burger} ${styles.icone}`}
        onClick={toggleMenu}
        aria-label="ouvrir ou fermer menu"
      />
      <div className={styles.menu} id="menu">
        <ToggleTheme toogleMenu={toggleMenu} />
        <nav className={styles.navBar}>
          <a href="#about" className={styles.navBar__Item} onClick={toggleMenu}>
            Qui suis-je ?
          </a>
          <a
            href="#competences"
            className={styles.navBar__Item}
            onClick={toggleMenu}
          >
            Compétences
          </a>
          <a
            href="#projets"
            className={styles.navBar__Item}
            onClick={toggleMenu}
          >
            Projets
          </a>
          <a
            href="#contact"
            className={styles.navBar__Item}
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
