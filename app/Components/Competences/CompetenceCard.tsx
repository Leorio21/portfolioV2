import React from "react";
import Image from "next/image";
import styles from "./CompetenceCard.module.css";

interface CardProps {
  name: string;
}

export default function CompetenceCard({ name }: CardProps) {
  return (
    <div className={styles.card}>
      <figure className={styles.recto}>
        <Image
          src={`/Competences/${name}.svg`}
          width={80}
          height={80}
          alt={`Logo ${name}`}
          loading="lazy"
        />
      </figure>
      <figure className={styles.figure}>
        <Image
          src={`/Competences/${name}.svg`}
          width={80}
          height={80}
          alt={`Logo ${name}`}
          loading="lazy"
        />
        <figcaption className={styles.figcaption}>{name}</figcaption>
      </figure>
    </div>
  );
}
