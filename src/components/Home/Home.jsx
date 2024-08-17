import { useContext } from 'react';
import styles from './Home.module.css';
import { ProfileContext } from '../../Context/ProfileContext';
import FotoCV from '../../assets/fotoCV.png'
import GHDark from '../../assets/ghDark.png'
import GHLight from '../../assets/ghLight.png'
import InDark from '../../assets/inDark.png'
import InLight from '../../assets/inLight.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { theme, openModal } = useContext(ProfileContext);
    const { t } = useTranslation();
    const ghIcon = theme === 'dark' ? GHDark : GHLight;
    const linkedInIcon = theme === 'dark' ? InDark : InLight;
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.imageSection}>
                <img src={FotoCV} alt="Imagen Home" className={styles.image} />
            </div>
            <div className={styles.introSection}>
                <div className={styles.titlesSection}>
                    <h2 className={styles.title}>Diego Ruiz Martín</h2>
                    <h3 className={styles.subtitle}>{t('subtitle-home')}</h3>
                </div>
                <div >
                    <p className={styles.text}>{t('welcome')}</p>
                    <p className={styles.text}>{t('hi')}</p>
                </div>

            </div>
            <div className={styles.aboutContact}>
                <div className={styles.linkSection}>
                    <Link to='https://github.com/Diegoruiz1711' target='_blank'><img src={ghIcon} alt="Ícono de Github" className={styles.social} />
                    </Link>
                    <Link to='https://www.linkedin.com/in/diegoruiz1711/' target='_blank'><img src={linkedInIcon} alt="Ícono de LinkedIn" className={styles.social} />
                    </Link>

                </div>
                <div className={styles.linkSection}>
                    <div className={styles.button} onClick={() => openModal('aboutMe')}>{t('aboutMe')}</div>
                </div>
                {/* <div className={styles.linkSection}>
                    <div className={styles.button}>{t('contact')}</div>
                </div> */}
            </div>
        </div>
    )
}


export default Home;