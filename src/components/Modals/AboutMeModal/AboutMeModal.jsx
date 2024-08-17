import styles from './AboutMeModal.module.css';
import { useContext } from 'react';
import { ProfileContext } from "../../../Context/ProfileContext";
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

const AboutMeModal = () => {

    const { activeModal, theme, closeModal } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (
        <Modal
            isOpen={activeModal === 'aboutMe'}
            onRequestClose={closeModal}
            className={styles.modalContainer}
            overlayClassName={styles.modalOverlay}
            shouldCloseOnOverlayClick={false}
        >
            <div className={`${styles.modalContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.header}>
                    <div className={styles.modalClose} onClick={closeModal}>X</div>
                    <div className={styles.modalTitle}><h2 className={styles.title}>{t('aboutMe')}</h2></div>
                </div>

                <div className={styles.modalContent}>
                    <p>{t('aboutMeText-1')}</p>
                    <p>{t('aboutMeText-2')}</p>
                    <p>{t('aboutMeText-3')}</p>
                    <p>{t('aboutMeText-4')}</p>
                    <p>{t('aboutMeText-5')}</p>
                </div>
            </div>

        </Modal >
    );
};

export default AboutMeModal;