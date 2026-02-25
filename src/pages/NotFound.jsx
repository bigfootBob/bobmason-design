import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.errorTerminal}>
      <div className={styles.content}>
        
        <h1 className={styles.errorCode}>404</h1>
        
        <div className={styles.messageBox}>
          <h2 className={styles.title}>Signal Lost in the Woods</h2>
          <p className={styles.description}>
            The coordinates you entered do not correspond to any known sector in this portfolio. 
            You may have ventured off the trail or the data has been declassified.
          </p>
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.btnReturn}>
            &larr; Return to Base
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;