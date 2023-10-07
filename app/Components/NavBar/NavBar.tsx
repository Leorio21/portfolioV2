"use client";
import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const burger = document.getElementById("menu");
    if (burger !== null && window.innerWidth < 550) {
      if (!isMenuOpen) {
        burger.classList.add(styles.move);
      } else {
        burger.classList.remove(styles.move);
      }
      setIsMenuOpen((prev: boolean) => !prev);
    }
  };

  return (
    <>
      <RxHamburgerMenu className={styles.burger} onClick={toggleMenu} />
      <div className={styles.container} id="menu">
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
    </>
  );
}
