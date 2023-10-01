"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ToggleTheme.module.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function ToggleTheme() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [buttonText, setButtonText] = useState("Light");
  const buttonTheme = useRef<HTMLDivElement>(null)

  const changeTheme = () => {
    setToggleTheme((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (toggleTheme) {
      setButtonText("Dark");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      buttonTheme.current?.classList.add(styles.buttonLight)
    } else {
      setButtonText("Light");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      buttonTheme.current?.classList.remove(styles.buttonLight);
    }
  }, [toggleTheme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setToggleTheme(true);
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      buttonTheme.current?.classList.add(styles.buttonLight);
    } else {
      setToggleTheme(false);
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      buttonTheme.current?.classList.remove(styles.buttonLight);
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
