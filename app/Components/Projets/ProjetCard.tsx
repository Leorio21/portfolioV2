import React from "react";
import Image from "next/image";
import { IntProjectData } from "@/app/Interfaces/Interfaces";
import styles from "./ProjetCard.module.css";

interface ProjetCardProps {
  projet: IntProjectData;
  nmr: number;
}

export default function ProjetCard({ projet, nmr }: ProjetCardProps) {
  return (
    <article
      className={
        nmr % 2 === 0
          ? `${styles.container} ${styles.miniatureLeft}`
          : `${styles.container} ${styles.miniatureRight}`
      }
      id={projet.title}
    >
      <figure className={styles.miniature}>
        <Image
          src={projet.miniature}
          blurDataURL={projet.miniature}
          alt="Capture d'ecran du projet"
          priority={true}
          style={{ objectFit: "contain" }}
          sizes="25vw"
          fill
        />
      </figure>
      <h3 className={styles.title}>{projet.title}</h3>
      <p className={styles.description}>{projet.description}</p>
      {projet.code !== "" && (
        <p className={`${styles.code} ${styles.lien}`}>
          <a href={projet.code} target="_blank" rel="noreferrer">
            Voir le code
          </a>
        </p>
      )}
      {projet.site !== "" && (
        <p className={`${styles.site} ${styles.lien}`}>
          <a href={projet.site} target="_blank" rel="noreferrer">
            Voir le site
          </a>
        </p>
      )}
    </article>
  );
}
