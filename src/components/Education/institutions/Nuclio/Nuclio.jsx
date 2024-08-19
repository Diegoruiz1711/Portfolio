import styles from './Nuclio.module.css'
import ESPflag from '../../../../assets/images/spain.png'
import { useContext } from 'react'
import { ProfileContext } from '../../../../Context/ProfileContext'
import { useTranslation } from 'react-i18next'

const Nuclio = () => {
    const { theme } = useContext(ProfileContext)
    const { t } = useTranslation();

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>{t('country')}</span><img src={ESPflag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Nuclio Digital School</h2>
                <ul>
                    <li className={styles.list}>{t('nuclioDegree')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Nuclio;