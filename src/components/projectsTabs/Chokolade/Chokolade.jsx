import ChokoladeVideo from '../../../assets/videos/chokoladeVideo.mp4'
import styles from './Chokolade.module.css'
import ChokoladeMobile from '../../../assets/chokoladeMobile.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import { useTranslation } from 'react-i18next'


const Chokolade = () => {

    const { theme } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>Chokolade La Plata</h2>
                <p className={styles.text}>{t('chokoladeDescription1')}</p>
                <p className={styles.text}>{t('chokoladeDescription2')}</p>
                <Link to='https://github.com/Diegoruiz1711/chokoladeLaPlata' target='_blank' className={styles.link}>
                    <p className={styles.text}>
                        {t('repository')}
                    </p>
                </Link>
            </div>
            <div className={styles.section}>
                <video src={ChokoladeVideo} controls className={styles.chokoladeVideo}></video>
            </div>
            <div className={styles.sectionMobile}>
                <img src={ChokoladeMobile} alt="Chokolade Mobile" className={styles.imgMobile} />
            </div>
        </div>
    )
}

export default Chokolade