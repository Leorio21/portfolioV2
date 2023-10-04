import React from "react";
import Image from "next/image";
import styles from "./CompetenceCard.module.css"

interface CardProps {
  name: string;
}

function CompetenceCard({ name }: CardProps) {
  return (
    <figure className={styles.figure}>
      <Image
        src={`../competences/${name}.svg`}
        width={80}
        height={80}
        alt={`Logo ${name}`}
      />
      <figcaption className={styles.figcaption}>{name}</figcaption>
    </figure>
  );
}

export default CompetenceCard;
