"use client";
import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar(): JSX.Element {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [buttonText, setButtonText] = useState("Light");

  const changeTheme = () => {
    console.log("change Theme");
    console.log("toggle =", toggleTheme)
    setToggleTheme((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    console.log("useEffect change", toggleTheme)
    if (toggleTheme) {
      setButtonText("Dark");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      setButtonText("Light");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [toggleTheme]);

  useEffect(() => {
    console.log("use Effect media page");
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      console.log("light");
      setToggleTheme(true);
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      console.log("dark");
      setToggleTheme(false);
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <>
      <div className={styles.container}>NavBar</div>
      <button
        type="button"
        id="theme"
        className={styles.button}
        value="theme"
        onClick={changeTheme}
      >
        {buttonText}
      </button>
    </>
  );
}
