import React from "react";
import styles from "./CompetenceCard.module.css";
import { FaArrowRotateLeft } from "react-icons/fa6"

interface CardProps {
  inName: string;
}

export default function CompetenceCard({ inName }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.figure} ${styles.recto}`}>
          <img
            src={`/Competences/${inName}.svg`}
            width={80}
            height={80}
            alt={`Logo ${inName}`}
            loading="lazy"
          />
          <FaArrowRotateLeft className={styles.returnArrow} />
        </div>
        <figure className={`${styles.figure} ${styles.verso}`}>
          <img
            src={`/Competences/${inName}.svg`}
            width={80}
            height={80}
            alt={`Logo ${inName}`}
            loading="lazy"
          />
          <figcaption className={styles.figcaption}>{inName}</figcaption>
        </figure>
      </div>
    </div>
  );
}
