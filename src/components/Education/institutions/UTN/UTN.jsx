import styles from './UTN.module.css';
import ARGflag from '../../../../assets/images/argentina.png'
import { useContext } from 'react'
import { ProfileContext } from '../../../../Context/ProfileContext'
import { useTranslation } from 'react-i18next';

const UTN = () => {
    const { theme } = useContext(ProfileContext)

    const { t } = useTranslation();

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>La Plata, Argentina </span><img src={ARGflag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Universidad Tecnológica Nacional - Facultad Regional La Plata</h2>
                <ul>
                    <li className={styles.list}>{t('engineer')}</li>
                    <li className={styles.list}>{t('technician')}</li>
                </ul>
            </div>

        </div>
    )
}

export default UTN;