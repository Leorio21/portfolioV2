import React from "react";
import CompetenceCard from "./CompetenceCard";
import styles from "./Competences.module.css";

function Competences() {
  const competencesList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Sass",
    "React",
    "NodeJs",
    "NextJs",
  ];

  return (
    <section className={styles.container}>
      <h2>Compétences</h2>
      <div className={styles.competencesContainer}>
        {competencesList.map((comp, key) => {
          return <CompetenceCard name={comp} key={key} />;
        })}
      </div>
    </section>
  );
}

export default Competences;
