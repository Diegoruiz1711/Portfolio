import styles from './Coursera.module.css'
import { useContext } from 'react'
import { ProfileContext } from '../../Context/ProfileContext'
import { useTranslation } from 'react-i18next';

const Coursera = () => {
    const { theme } = useContext(ProfileContext)

    const { t } = useTranslation();

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.Institution}>
                <h2 className={styles.title}>Coursera</h2>
                <ul>
                    <h3 className={styles.subtitle}>{t('specializations')}</h3>
                    <li className={styles.list}>{t('leadership')}</li>
                    <li className={styles.list}>{t('google')}</li>
                    <li className={styles.list}>{t('management')}</li>
                    <li className={styles.list}>{t('bsf')}</li>
                    <h3 className={styles.subtitle}>{t('courses')}</h3>
                    <li className={styles.list}>{t('courseraB4')}</li>
                    <li className={styles.list}>{t('html')}</li>
                    <li className={styles.list}>{t('bppm')}</li>
                    <li className={styles.list}>{t('fom')}</li>
                    <li className={styles.list}>{t('costs1')}</li>
                    <li className={styles.list}>{t('costs2')}</li>
                    <li className={styles.list}>{t('costs3')}</li>
                    <li className={styles.list}>{t('risks')}</li>
                    <li className={styles.list}>{t('analysis')}</li>
                    <li className={styles.list}>{t('projectPlanning')}</li>
                    <li className={styles.list}>{t('projectManagement')}</li>
                    <li className={styles.list}>{t('formulation')}</li>
                </ul>
            </div>
            <div className={styles.location}>{t('onlineCourses')}</div>
        </div>
    )
}

export default Coursera;