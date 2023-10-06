"use client";
import React from "react";
import ContactForm from "../Form/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export default function Contact(): JSX.Element {
  return (
    <section className={styles.container}>
      <h2 id="contact" className={styles.ancre}>
        Contact
      </h2>
      <ContactForm />
    </section>
  );
}
