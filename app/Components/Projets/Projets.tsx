import React from "react";
import styles from "./Projets.module.css";
import ProjetCard from "./ProjetCard";

export default function Projets() {
  const projets = [
    {
      title: "Portfolio",
      miniature: "Portfolio",
      description:
        "Ce portfolio\nPremier projet pour découvrir NextJS et gerer le premier affichage en dark/Ligth mode en fonction des préférences utilisateur\n\nTechologies utilisées:\n\n- NextJS - TypeScript -",
      code: "https://github.com/Leorio21/portfolio",
      site: "https://portfolio-leorio21.vercel.app/",
    },
    {
      title: "Le jeu du pendu",
      miniature: "jeuPendu",
      description:
        "Jeu du pendu (Challenge frontEnd-Mentor)\n\nTechologies utilisées:\n\n- NextJS - TypeScript -",
      code: "https://github.com/Leorio21/leJeuDuPendu",
      site: "https://le-jeu-du-pendu.vercel.app/",
    },
    {
      title: "Groupomania",
      miniature: "Groupomania",
      description:
        "Dernier Projet de la formation OpenClassRoom: créer un reseau social d'entreprise. TS permet de typer les variables et d'éviter certaines erreurs lors du developpement. L'ORM Prisma pour la gestion de la BDD de manière sécurisée\n\nTechologies utilisées:\n\n- React(ViteJS) - NodeJS - TypeScript - Express - MySql - Prisma -",
      code: "https://github.com/Leorio21/Oc-P7-Groupomania",
      site: "",
    },
    {
      title: "Booki",
      miniature: "Booki",
      description:
        "Projet de la formation OpenClassRoom: Transformez une maquette en site web avec HTML & CSS\n\nTechologies utilisées:\n\n- HTML - CSS -",
      code: "https://github.com/Leorio21/OC-P2-Booki",
      site: "https://leorio21.github.io/OC-P2-Booki/",
    },
    {
      title: "OhMyFood",
      miniature: "OhMyFood",
      description:
        "Projet de la formation OpenClassRoom: Après avoir transformé la maquette en site HTML - CSS/SASS, dynamiser le site avec des animations CSS\n\nTechologies utilisées:\n\n- HTML - CSS - SASS -",
      code: "https://github.com/Leorio21/OC-P3-Ohmyfood",
      site: "https://leorio21.github.io/OC-P3-Ohmyfood/index.html",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 id="projets" className={styles.ancre}>
        Projets
      </h2>
      {projets.map((projet, idx) => {
        return <ProjetCard inProjet={projet} inNmr={idx} key={idx} />;
      })}
    </section>
  );
}
