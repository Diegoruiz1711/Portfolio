import styles from './JSCalculator.module.css'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import { Link } from 'react-router-dom'
import CJS1 from '../../../assets/cjs1.png'
import CJS2 from '../../../assets/cjs2.png'
import CJS3 from '../../../assets/cjs3.png'
import CJS4 from '../../../assets/cjs4.png'
import { useTranslation } from 'react-i18next'

const JSCalculator = () => {
    const { theme } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.section}>
                <div className={styles.image}>
                    <img src={CJS1} alt="Calculadora simple JS imagen 1" className={styles.imgCalc} />
                </div>
                <div className={styles.textSection}>
                    <h2 className={styles.title}>{t('simpleCalculator')}</h2>
                    <p className={styles.text}>{t('simpleCalculatorDescription1')}</p>
                    <p className={styles.text}>{t('simpleCalculatorDescription2')}</p>
                    <p className={styles.text}>{t('simpleCalculatorDescription3')}</p>
                    <Link to='https://github.com/Diegoruiz1711/JSCalculator' target='_blank' className={styles.link}>
                        <p className={styles.text}>
                            {t('jsRepository')}
                        </p>
                    </Link>
                    <Link to='https://github.com/Diegoruiz1711/ReactCalculator' target='_blank' className={styles.link}>
                        <p className={styles.text}>
                            {t('reactRepository')}
                        </p>
                    </Link>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.image2}>
                    <img src={CJS2} alt="Calculadora simple JS imagen 2" className={styles.imgCalc} />
                </div>
                <div className={styles.image2}>
                    <img src={CJS3} alt="Calculadora simple JS imagen 3" className={styles.imgCalc} />
                </div>
                <div className={styles.image2}>
                    <img src={CJS4} alt="Calculadora simple JS imagen 4" className={styles.imgCalc} />
                </div>
            </div>
        </div>
    )
}

export default JSCalculator