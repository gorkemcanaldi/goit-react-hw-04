import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({onSubmit}) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            alert("Lütfen arama terimi girin.");
            return;
        }
        onSubmit(input);
        setInput("");
    };
  return (

    <header className={styles.header}>
        <form className={styles.form} onSubmit={handleSubmit} >
            <input type="text" className={styles.input} placeholder="Search images and photos" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className={styles.button}>Search</button>
        </form>
         </header>

)
}

export default SearchBar