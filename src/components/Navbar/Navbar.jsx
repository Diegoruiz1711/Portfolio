import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ProfileContext } from '../../Context/ProfileContext';
import DropdownMenu from './DropDownMenu/DropdownMenu';
import { FaMoon, FaSun } from 'react-icons/fa';
import { LuMenuSquare } from "react-icons/lu";
import styles from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import Spain from '../../assets/spain.png'
import UK from '../../assets/uk.png'
import Logo from '../../assets/programmingImg.png'

const Navbar = () => {

    const { t } = useTranslation();

    const { activeModal,
        setActiveModal,
        activeComponent,
        setActiveComponent,
        dropdownOpen,
        theme,
        setTheme,
        activeTab,
        setActiveTab,
        openModal,
        closeModal,
        toggleComponent,
        toggleDropdown,
        toggleTheme,
        handleChange, lang, setLang, toggleLang } = useContext(ProfileContext);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 810);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <Link className={styles.logo} to='/'>
                <img src={Logo} style={{ height: '5vh', padding: '0% 1%' }} alt="" /><div>
                    {t('logo')}
                </div>
            </Link>
            {isMobile ? (
                <div className={styles.link} onClick={toggleDropdown}>
                    <LuMenuSquare size={36} />
                </div>
            ) : (
                <div className={styles.options}>
                    <Link className={styles.link} to='/skills'>
                        <div> {t('skills')}</div>
                    </Link>
                    <Link className={styles.link} to='/education'>
                        <div>{t('education')}</div>
                    </Link>
                    <Link className={styles.link} to='/projects'>
                        <div>{t('projects')}</div>
                    </Link>
                    <div onClick={() => openModal('cv')} className={styles.link}>
                        CV
                    </div>
                    <div onClick={toggleTheme} className={styles.link}>
                        {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                    </div>
                    <div onClick={toggleLang} className={styles.link}>
                        {lang === 'es' ? <img src={UK} className={styles.flag} alt="Bandera UK" /> : <img src={Spain} alt="Bandera Espana" className={styles.flag} />}
                    </div>
                </div>
            )}
            {dropdownOpen && isMobile && <DropdownMenu />}
        </div>
    );
};

export default Navbar;
