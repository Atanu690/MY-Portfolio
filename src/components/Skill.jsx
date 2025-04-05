import styles from "./Skill.module.css";

const Skill = () => {
  return (
    <section className={styles.skillSection}>
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.grid}>
        <ul className={styles.skillList}>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>Bootstrap</li>
          <li>HTML</li>
        </ul>
        <ul className={styles.skillList}>
          <li>CSS</li>
          <li>React Js</li>
          <li>Git</li>
          <li>Github</li>
          <li>MySQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
