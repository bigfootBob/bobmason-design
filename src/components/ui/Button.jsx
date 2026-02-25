import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ 
  children, 
  variant = 'primary', // primary | secondary | design | ghost
  to, 
  href, 
  onClick, 
  className = '', 
  icon,
  ...props 
}) => {

  const classes = `${styles.btn} ${styles[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </>
  );

  // Internal Link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // External Link
  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {content}
        {/* Optional: Add a tiny external link arrow here if you want */}
      </a>
    );
  }

  // Standard Button (i.e. form submit)
  return (
    <button className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;