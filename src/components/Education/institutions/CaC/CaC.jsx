import styles from './CaC.module.css';
import ARGflag from '../../../../assets/images/argentina.png'
import { useContext } from 'react'
import { ProfileContext } from '../../../../Context/ProfileContext'
import { useTranslation } from 'react-i18next';

const CaC = () => {
    const { t } = useTranslation();

    const { theme } = useContext(ProfileContext)
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.location}><span>Buenos Aires, Argentina </span><img src={ARGflag} alt="Logo Argentina" className={styles.flag} /> </div>
            <div className={styles.institution}>
                <h2 className={styles.title}>Agencia de Habilidades para el Futuro</h2>
                <ul>
                    <li className={styles.list}>{t('cacJava')}</li>
                    <li className={styles.list}>{t('cacUxUi')}</li>
                </ul>
            </div>
        </div>
    )
}

export default CaC;