import styles from './Comms.module.scss';

const Comms = () => {
  return (
    <section id="comms" className={styles.commsArray}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.statusLight}></div>
          <h2 className={styles.title}>Hailing Frequencies Open</h2>
        </div>

        <div className={styles.message}>
          <p>
            I am currently interested in opportunities in engineering and leadership <strong>2026</strong>. 
            If you need a Design Technologist to bridge the gap between your 
            product strategy and front-end reality, contact me.
          </p>
        </div>

        <div className={styles.actionGrid}>
          <a href="mailto:bob.j.mason+portfolio@gmail.com" className={styles.transmitBtn}>
            <span className={styles.btnIcon}>✉</span>
            <span>Transmit Data (Email)</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/robert-bob-mason/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkBtn}
          >
            <span className={styles.btnIcon}>in</span>
            <span>Establish Link (LinkedIn)</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Comms;