import { Mail, Link } from 'lucide-react';
import styles from './Comms.module.scss';
import { SOCIALS } from '../../data/constants';

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
            I am the human builder you need. I have experience in agenic AI, product, code and UX and can be your one man team.
            To set up some time to discuss, contact me.
          </p>
        </div>

        <div className={styles.actionGrid}>
          <a href={SOCIALS.EMAIL} className={styles.transmitBtn}>
            <Mail size={20} className={styles.btnIcon} />
            <span>Transmit Data (Email)</span>
          </a>

          <a 
            href={SOCIALS.LINKEDIN} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkBtn}
          >
            <Link size={20} className={styles.btnIcon} />
            <span>Establish Link (LinkedIn)</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Comms;