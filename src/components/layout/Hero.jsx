import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.greeting} variants={itemVariants}>
          Hi, I'm Bob Mason.
        </motion.p>
        
        <motion.h1 variants={itemVariants}>
          Bridging the gap between <span>human-centered UX</span>, front-end development, and agile product strategy.
        </motion.h1>
        
        <motion.div className={styles.credentials} variants={itemVariants}>
          <span className={styles.badge}>UX Principal</span>
          <span className={styles.badge}>Sr. Technical PO</span>
          <span className={styles.badge}>CSPO®</span>
        </motion.div>
        
        <motion.p className={styles.description} variants={itemVariants}>
          I build digital products that just work. From writing requirements and designing intuitive flows, to writing the React code that brings them to life.
        </motion.p>
        
        <motion.div className={styles.actions} variants={itemVariants}>
          <a href="#work" className={styles.primaryBtn}>View Selected Work</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>Download Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;