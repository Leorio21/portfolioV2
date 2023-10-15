import React from "react";
import Image from "next/image";
import { IntProjectData } from "@/app/Interfaces/Interfaces";
import styles from "./ProjetCard.module.css";

interface ProjetCardProps {
  inProjet: IntProjectData;
  inNmr: number;
}

export default function ProjetCard({ inProjet, inNmr }: ProjetCardProps) {
  return (
    <article
      className={
        inNmr % 2 === 0
          ? styles.container
          : `${styles.container} ${styles.reverse}`
      }
    >
      <div className={styles.tilt}>
        <svg
          className={inNmr % 2 !== 0 ? styles["tilt-rotate"] : ""}
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
      <picture className={styles.miniature}>
        <source
          media="(min-width: 992px)"
          srcSet={`/carousel/mini_${inProjet.miniature}_large.webp`}
          width={373}
          height={280}
        />
        <img
          className={styles.illustration}
          src={`/carousel/mini_${inProjet.miniature}_medium.webp`}
          alt={`Capture d'ecran du projet ${inProjet.title}`}
          loading="lazy"
          width={163}
          height={280}
        />
      </picture>
      <div className={styles["project-infos"]}>
        <h3 className={styles.title}>{inProjet.title}</h3>
        <p className={styles.description}>{inProjet.description}</p>
        {inProjet.code !== "" && (
          <a
            href={inProjet.code}
            target="_blank"
            rel="noreferrer"
            className={`${styles.code} ${styles.lien}`}
          >
            Voir le code
          </a>
        )}
        {inProjet.site !== "" && (
          <a
            href={inProjet.site}
            target="_blank"
            rel="noreferrer"
            className={`${styles.site} ${styles.lien}`}
          >
            Voir le site
          </a>
        )}
      </div>
    </article>
  );
}
