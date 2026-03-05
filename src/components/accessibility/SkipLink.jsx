import styles from './SkipLink.module.scss';

const SkipLink = () => {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Skip to main content
    </a>
  );
};

export default SkipLink;