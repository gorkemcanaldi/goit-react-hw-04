import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
