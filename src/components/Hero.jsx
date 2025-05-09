import styles from "./Hero.module.css";
import atanu_photo from "../assets/atanu_photo.png";
import twittericon from "../assets/twitter-light.svg";
import githubicon from "../assets/github-light.svg";
import Linkedinicon from "../assets/linkedin-light.svg";
import CV2 from "../assets/cv2.pdf";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.colorModuleContainer}>
        <img className={styles.photo} src={atanu_photo} alt="" />
      </div>
      <div className={styles.info}>
        <h1>Atanu Das</h1>
        <h2>Aspiring Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twittericon} alt="" />
          </a>
          <a href="https://github.com/Atanu690" target="_blank">
            <img src={githubicon} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/atanu-das-8a30a4282/"
            target="_blank"
          >
            <img src={Linkedinicon} alt="" />
          </a>
          <p>
            A goal-oriented software engineer, seeking a software engineering
            role in your company and want to implement my skills and knowledge
            to provide innovative solutions and growth for my company.
          </p>
          <a href={CV2} download>
            <button className={styles.hoover}>Resume</button>
          </a>
        </span>
      </div>
    </section>
  );
};

export default Hero;
