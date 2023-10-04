"use client";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Competences from "./Components/Competences/Competences";
import Projets from "./Components/Projets/Projets";

export default function Home() {
  return (
    <>
      <NavBar />
      <Competences />
      <Projets />
      <Contact />
    </>
  );
}
