import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function NavBar(): JSX.Element {

  return (
    <div className={styles.container}>
      <ToggleTheme />
    </div>
  );
}
