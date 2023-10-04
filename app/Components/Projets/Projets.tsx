import React from "react";
import styles from "./Projets.module.css";
import ProjetCard from "./ProjetCard";

export default function Projets() {
  const projets = [
    {
      title: "Portfolio - WIP",
      miniature: "/carousel/Portfolio.webp",
      description:
        "Ce portfolio\nPremier projet pour découvrir NextJS et affichage dark/Ligth mode en fonction des préférences utilisateur\n\nTechologies utilisées:\n\n- NextJS - TypeScript",
      code: "https://github.com/Leorio21/portfolio",
      site: "https://portfolio-leorio21.vercel.app/",
    },
    {
      title: "Compteur",
      miniature: "/carousel/Compteur.webp",
      description:
        "Compteur avec pales tournantes avec effet 3D\n\nTechologies utilisées:\n\n- HTML - CSS - JS",
      code: "https://github.com/Leorio21/compteur",
      site: "https://compteur.vercel.app/",
    },
    {
      title: "Cube 3D",
      miniature: "/carousel/cube3D.webp",
      description:
        "Petit cube en 3D\n\nTechologies utilisées:\n\n- HTML - CSS - JS",
      code: "https://github.com/Leorio21/cube3D",
      site: "https://cube3-d.vercel.app/",
    },
    {
      title: "Groupomania",
      miniature: "/carousel/Groupomania.webp",
      description:
        "Dernier Projet de la formation OpenClassRoom: créer un reseau social d'entreprise. TS permet de typer les variables et d'éviter certaines erreurs lors du developpement. L'ORM Prisma pour la gestion de la BDD de manière sécurisée\n\nTechologies utilisées:\n\n- React(ViteJS) - NodeJS - TypeScript - Express - MySql - Prisma",
      code: "https://github.com/Leorio21/Oc-P7-Groupomania",
      site: "",
    },
    {
      title: "Booki",
      miniature: "/carousel/Booki.webp",
      description:
        "Projet de la formation OpenClassRoom: Transformez une maquette (2 fichiers jpeg - 1 desktop - 1 mobile) en site web avec HTML & CSS\n\nTechologies utilisées:\n\n- HTML - CSS",
      code: "https://github.com/Leorio21/OC-P2-Booki",
      site: "https://leorio21.github.io/OC-P2-Booki/",
    },
    {
      title: "OhMyFood",
      miniature: "/carousel/OhMyFood.webp",
      description:
        "Projet de la formation OpenClassRoom: Après avoir transformé la maquette en site HTML - CSS/SASS, dynamiser le site avec des animations CSS\n\nTechologies utilisées:\n\n- HTML - CSS - SASS",
      code: "https://github.com/Leorio21/OC-P3-Ohmyfood",
      site: "https://leorio21.github.io/OC-P3-Ohmyfood/index.html",
    }
  ];

  return (
    <section className={styles.container}>
      <h2>Projets</h2>
      {projets.map((projet, idx) => {
        return <ProjetCard projet={projet} nmr={idx} key={idx} />
      })}
    </section>
  );
}
