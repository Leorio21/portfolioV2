"use client";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Competences from "./Components/Competences/Competences";
import Projets from "./Components/Projets/Projets";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <main className={styles.main}>
        <About />
        <Competences />
        <Projets />
        <Contact />
      </main>
    </>
  );
}
