import React from "react";
import styles from "./CompetenceCard.module.css";
import { FaArrowRotateLeft } from "react-icons/fa6"

interface CardProps {
  name: string;
}

export default function CompetenceCard({ name }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <figure className={styles.recto}>
          <img
            src={`/Competences/${name}.svg`}
            width={80}
            height={80}
            alt={`Logo ${name}`}
            loading="lazy"
          />
          <FaArrowRotateLeft className={styles.returnArrow} />
        </figure>
        <figure className={styles.figure}>
          <img
            src={`/Competences/${name}.svg`}
            width={80}
            height={80}
            alt={`Logo ${name}`}
            loading="lazy"
          />
          <figcaption className={styles.figcaption}>{name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
