import styles from './CFP.module.css'
import ARGflag from '../../../../assets/images/argentina.png'
import { useContext } from 'react'
import { ProfileContext } from '../../../../Context/ProfileContext'
import { useTranslation } from 'react-i18next';

const CFP = () => {
    const { theme } = useContext(ProfileContext)
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>La Plata, Argentina </span><img src={ARGflag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Centro de Formación Profesional 401</h2>
                <ul>
                    <li className={styles.list}>{t('cfpWeb')}</li>
                    <li className={styles.list}>{t('cfpGD')}</li>
                </ul>
            </div>
        </div>
    )
}

export default CFP;