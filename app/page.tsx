"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect } from "react";
import Competences from "./Components/Competences/Competences";

export default function Home() {
  return (
    <>
      <NavBar />
      <Competences />
      <Contact />
    </>
  );
}