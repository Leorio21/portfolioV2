import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      <h2 id="about" className={styles.ancre}>
        About
      </h2>
      <div className={styles.presentation}>
        <p>
          Bienvenue dans mon portfolio ! Je suis Jérôme LEFEUVRE, un passionné
          de développement. À travers ces pages, je vous invite à explorer mon
          parcours professionnel et mes compétences.
        </p>
        <p>
          Depuis toujours, j'ai été attiré par l'informatique et le
          développement et j'ai consacré de nombreuses années à développer mes
          compétences dans ce domaine. Que ce soit la conception de sites web ou
          la résolution de problèmes liés au problèmes métier, j'aime relever
          les défis qui se présentent à moi.
        </p>
        <p>
          Consciencieux, doté d'une grande capacité d'adaptation et capable de
          mener plusieurs projets de front, je saurai être une vraie ressource
          au sein de votre structure.
        </p>
        <p>
          Chaque projet que j'ai entrepris au cours de ma formation ou à titre
          personnel est une opportunité d'apprentissage et d'amélioration.
        </p>
        <p>
          En parcourant mon portfolio, vous découvrirez un éventail de projets
          qui représentent mon parcours professionnel. J'espère que ces
          réalisations vous donneront un aperçu de mon travail et de ma passion
          pour le développement.
        </p>
        <p>
          N'hésitez pas à explorer mes projets, à me contacter pour discuter de
          nouvelles opportunités de collaboration ou à en savoir plus sur mon
          parcours. Je suis toujours ouvert aux défis créatifs et aux projets
          inspirants.
        </p>
        <p>
          Merci de prendre le temps de visiter mon portfolio. J'espère que vous
          apprécierez ce que vous y découvrirez et que nous aurons l'occasion de
          travailler ensemble à l'avenir.
        </p>
      </div>
    </section>
  );
}
