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
          ? styles.container
          : `${styles.container} ${styles.reverse}`
      }
      id={projet.title}
    >
      <div className={styles.tilt}>
        <svg
          className={nmr % 2 !== 0 ? `${styles["tilt-rotate"]}` : ""}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
      <figure className={styles.miniature}>
        <Image
          src={projet.miniature}
          blurDataURL={projet.miniature}
          alt="Capture d'ecran du projet"
          priority={true}
          style={{ objectFit: "contain" }}
          sizes="25vw"
          fill
          loading="lazy"
        />
      </figure>
      <div className={styles["project-infos"]}>
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
      </div>
    </article>
  );
}
