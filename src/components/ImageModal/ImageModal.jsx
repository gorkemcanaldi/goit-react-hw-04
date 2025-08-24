import React from 'react';
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({isOpen, onClose, image}) => {
    if (!image) return null;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <button onClick={onClose} className={styles.closeBtn}>×</button>
            <img src={image.urls.regular} alt={image.alt_description} />
        </ReactModal>
    );
};

export default ImageModal;
