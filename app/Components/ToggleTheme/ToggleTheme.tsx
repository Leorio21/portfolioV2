"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import styles from "./ToggleTheme.module.css";

function ToggleTheme() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const buttonTheme = useRef<HTMLDivElement>(null);

  const changeTheme = () => {
    setToggleTheme((prev) => {
      return !prev;
    });
  };

  const lightThemeActive = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    buttonTheme.current?.classList.add(styles.buttonMove);
  };

  const darkThemeActive = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    buttonTheme.current?.classList.remove(styles.buttonMove);
  };

  useEffect(() => {
    if (toggleTheme) {
      lightThemeActive();
    } else {
      darkThemeActive();
    }
  }, [toggleTheme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setToggleTheme(true);
      lightThemeActive();
    } else {
      setToggleTheme(false);
      darkThemeActive();
    }
  }, []);

  return (
    <div className={styles.container} onClick={changeTheme}>
      <BsFillMoonStarsFill className={styles.themeIcon} />
      <BsFillSunFill className={styles.themeIcon} />
      <div className={styles.button} ref={buttonTheme}></div>
    </div>
  );
}

export default ToggleTheme;
