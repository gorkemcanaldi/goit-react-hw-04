import { useEffect, useState } from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onRetry, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!message || !visible) return null;

  return (
    <div className={styles.toast}>
      <p>{message}</p>
      {onRetry && <button className={styles.button} onClick={onRetry}>Retry</button>}
    </div>
  );
};

export default ErrorMessage;
