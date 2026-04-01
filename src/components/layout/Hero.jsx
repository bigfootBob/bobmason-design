import styles from './Hero.module.scss';
import { motion } from 'framer-motion';
import profilePicWebP from '../../assets/images/bobngracie-bw.webp'; 
import profilePicJpg from '../../assets/images/bobngracie-bw.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
  };
  
  return (
    <>
    <motion.section 
      className={styles.heroConsole}
      initial="hidden"
      animate="visible"
      variants={containerVariants}>

      <div className={styles.heroContent}>
        <motion.h1
          className={styles.heroHeadline}
          variants={itemVariants}
        >
          I have experience & I get things done
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className={styles.humanBreak}>
          Bob the human
        </motion.h2>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.portraitFrame}>
          {/* <motion.picture
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          > */}
          <picture>
            <source srcSet={profilePicWebP} type="image/webp" />
            <img 
              src={profilePicJpg} 
              alt="Robert Mason and his dog, a professional design technologist team." 
              className={styles.halftoneImg} 
            />
          </picture>
          {/* </motion.picture> */}
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Hero;