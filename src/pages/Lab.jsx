import { Link } from 'react-router-dom';
import styles from './Lab.module.scss';

const Lab = () => {
  return (
    <div className={styles.errorTerminal}>
      <div className={styles.content}>
        
        <h1 className={styles.errorCode}>Lab</h1>
        <h2 className={styles.errorCode}>Art / Experiements / Older Work</h2>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.btnReturn}>
            &larr; Return to Base
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Lab;

