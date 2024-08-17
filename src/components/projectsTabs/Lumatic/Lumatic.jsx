import { Link } from 'react-router-dom'
import styles from './Lumatic.module.css'
import Lumatic1 from '../../../assets/lumatic1.png'
import Lumatic2 from '../../../assets/lumatic2.png'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import Lumatic4 from '../../../assets/lumatic4.png'
import LumaticMobile from '../../../assets/lumaticMobile.png'
import { useTranslation } from 'react-i18next'


const Lumatic = () => {

    const { theme } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.row}>
                <div className={styles.image1}>
                    <img src={Lumatic1} alt="" className={styles.imgWeb} />
                </div>
                <div className={styles.textSection}>
                    <h2 className={styles.title}>Lumatic Events</h2>
                    <p className={styles.text}>{t('lumaticDescription1')}</p>
                    <p className={styles.text}>{t('lumaticDescription2')}</p>
                    <Link to='https://github.com/nds-fsd/luma' target='_blank' className={styles.link}>
                        <p className={styles.text}>
                            {t('repository')}
                        </p>
                    </Link>
                    <Link to='https://lumatic.netlify.app/' target='_blank' className={styles.link}>
                        <p className={styles.text}>
                            {t('website')}
                        </p>
                    </Link>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.image2}>
                    <img src={Lumatic2} alt="" className={styles.imgWeb} />
                </div>
                <div className={styles.image5}>
                    <img src={Lumatic4} alt="" className={styles.imgWeb} />
                </div>
                <div className={styles.image4}>
                    <img src={LumaticMobile} alt="" className={styles.imgWeb} />
                </div>
            </div>
        </div>
    )
}

export default Lumatic