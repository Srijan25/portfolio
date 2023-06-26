import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <motion.p variants={fadeIn("", "", 0.1, 1)}>
          I'm skilled software developer and full stack developer with
          experience in developing web applications and software. I have
          experience in developing web applications using ReactJS, AngularJS,
          NodeJS, ExpressJS, MongoDB, MySQL, PostgreSQL, TailwindCSS,
          MaterialUI, Bootstrap, HTML, CSS, JavaScript, TypeScript, Python, C++,
          C, Java, Postman, APIs and more.I'm quick learner and I'm always ready to learn new technologies and skills.
          Let's work together to bring your ideas to life.
        </motion.p>
      </motion.div>
    </>
  );
};

export default About;
