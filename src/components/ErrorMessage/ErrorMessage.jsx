
const ErrorMessage = ({message, onRetry}) => {
  return (
    <div className={styles.error}>
        <p>{message} </p>
        {onRetry && (
            <button className={styles.button} onClick={onRetry} >Tekrar dene</button>
        )}
    </div>
  )
}

export default ErrorMessage