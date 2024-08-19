import { Link } from 'react-router-dom'
import styles from './Lumatic.module.css'
import LumaticVideo from '../../../assets/videos/lumaticVideo.mp4'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import LumaticMobile from '../../../assets/images/lumaticMobile.png'
import { useTranslation } from 'react-i18next'


const Lumatic = () => {

    const { theme } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>Lumatic Events</h2>
                <p className={styles.text}>{t('lumaticDescription1')}</p>
                <p className={styles.text}>{t('lumaticDescription2')}</p>
                <p className={styles.text}>{t('lumaticDescription3')}</p>
                <p className={styles.text}>{t('lumaticDescription4')}</p>
                <Link to='https://github.com/nds-fsd/luma' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('repository')}</p>
                </Link>
                <Link to='https://lumatic.netlify.app/' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('website')}</p></Link>
            </div>

            <div className={styles.section}>
                <video src={LumaticVideo} controls className={styles.lumaticVideo}></video>
            </div>

            <div className={styles.sectionMobile}>
                <img src={LumaticMobile} alt="Lumatic Mobile" className={styles.imgMobile} />
            </div>
        </div>
    )
}

export default Lumatic