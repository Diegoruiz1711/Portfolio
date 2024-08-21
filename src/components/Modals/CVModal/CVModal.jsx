import styles from './CVModal.module.css';
import { useContext } from 'react';
import { ProfileContext } from "../../../Context/ProfileContext";
import Modal from 'react-modal';
import CVEnglish from '../../../assets/images/resume.png'
import CVSpanish from '../../../assets/images/CV.png'
import CVEnglishPDF from '../../../assets/resume.pdf'
import CVSpanishPDF from '../../../assets/CV.pdf'
import { useTranslation } from 'react-i18next'

const CVModal = () => {

    const { activeModal, closeModal, theme, lang, setLang, toggleLang } = useContext(ProfileContext);
    const selectedCV = lang === 'en' ? CVEnglish : CVSpanish;
    const selectedPDF = lang === 'en' ? CVEnglishPDF : CVSpanishPDF;
    const { t } = useTranslation();

    return (
        <Modal
            isOpen={activeModal === 'cv'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
        >
            <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.header}>
                    <div className={styles.modalClose} onClick={closeModal}>X</div>
                    <h2 className={styles.title}>Curriculum Vitae Diego Ruiz Martin</h2>
                </div>
                <div className={styles.modalContent}>
                    <img
                        src={selectedCV}
                        alt="Curriculum Vitae"
                        className={styles.imageViewer}
                    />
                </div>
                <div className={styles.footer}>
                    <a href={selectedPDF} download="Curriculum_Vitae.pdf" className={styles.button}>
                        {t('downloadCV')}
                    </a>
                </div>
            </div>
        </Modal>
    );
};

export default CVModal;
