import styles from './JSCalculator.module.css'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import { Link } from 'react-router-dom'
import CalculatorVideo from '../../../assets/videos/calculatorVideo.webm'
import { useTranslation } from 'react-i18next'

const JSCalculator = () => {

    const { theme } = useContext(ProfileContext);

    const { t } = useTranslation();

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>{t('simpleCalculator')}</h2>
                <p className={styles.text}>{t('simpleCalculatorDescription1')}</p>
                <p className={styles.text}>{t('simpleCalculatorDescription2')}</p>
                <p className={styles.text}>{t('simpleCalculatorDescription3')}</p>
                <Link to='https://github.com/Diegoruiz1711/JSCalculator' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('jsRepository')}</p>
                </Link>
                <Link to='https://github.com/Diegoruiz1711/ReactCalculator' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('reactRepository')}</p>
                </Link>
            </div>

            <div className={styles.section}>
                <video src={CalculatorVideo} controls className={styles.calculatorVideo}></video>
            </div>
        </div>
    )
}

export default JSCalculator