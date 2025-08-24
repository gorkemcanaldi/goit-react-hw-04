import { useState } from "react";
import styles from "./SearchBar.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a search term."); // artık toast
      return;
    }
    onSubmit(input);
    setInput("");
    setError(""); // reset error
  };

  return (
    <>
      <header className={styles.header}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search images and photos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className={styles.button}>Search</button>
        </form>
      </header>
      <ErrorMessage message={error} />
    </>
  );
};

export default SearchBar;
