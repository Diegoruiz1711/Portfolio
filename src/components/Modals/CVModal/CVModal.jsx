import styles from './CVModal.module.css';
import { useContext } from 'react';
import { ProfileContext } from "../../../Context/ProfileContext";
import Modal from 'react-modal';
import CVEnglish from '../../../assets/resume.pdf'
import CVSpanish from '../../../assets/CV.pdf'

const CVModal = () => {

    const { activeModal, closeModal, theme, lang, setLang, toggleLang } = useContext(ProfileContext);
    const selectedCV = lang === 'en' ? CVEnglish : CVSpanish;

    return (
        <Modal
            isOpen={activeModal === 'cv'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            shouldCloseOnOverlayClick={false}
        >
            <div className={`${styles.modalContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.modalClose} onClick={closeModal}>X</div>
                <div className={styles.modalContent}>
                    <h2>Curriculum Vitae Diego Ruiz Martin</h2>
                    <iframe
                        src={selectedCV}
                        className={styles.pdfViewer}
                        title="Curriculum Vitae"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default CVModal;
