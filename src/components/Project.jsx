import styles from "./Project.module.css";
import myntraImage from "../assets/myntra.png";
import delicazyImage from "../assets/delicazy.png";
import phnxImage from "../assets/movie ss.jpg"

const Project = () => {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectGrid}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${myntraImage})` }}
        >
          <div className={styles.overlay}>
            <h3 className={styles.cardTitle}>Myntra Clone</h3>
            <p className={styles.cardText}>
              A clone of the Myntra e-commerce site built with React and CSS.
            </p>
            <a
              href="https://myntra-clone-eosin-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>View Website</button>
            </a>
          </div>
        </div>

        <div
          className={styles.card}
          style={{ backgroundImage: `url(${delicazyImage})` }}
        >
          <div className={styles.overlay}>
            <h3 className={styles.cardTitle}>Delicazy</h3>
            <p className={styles.cardText}>
              A recipe app for browsing delicious meals. Built with React,
              Node.js, and MongoDB.
            </p>
            <a
              href="https://delicazy-v2.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>View Website</button>
            </a>
          </div>
        </div>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${phnxImage})` }}
        >
          <div className={styles.overlay}>
            <h3 className={styles.cardTitle}>PHNX Movie App</h3>
            <p className={styles.cardText}>
              A React Native app to discover and explore trending and latest
              movies. Built with Expo, TMDB API, and Appwrite.
            </p>
            <a
              href="https://github.com/your-username/phnx-movie-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
