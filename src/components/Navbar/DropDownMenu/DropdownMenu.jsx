import { useContext } from 'react';
import styles from './DropdownMenu.module.css';
import { ProfileContext } from '../../../Context/ProfileContext';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import Spain from '../../../assets/spain.png'
import UK from '../../../assets/uk.png'
import { useTranslation } from 'react-i18next';

const DropdownMenu = () => {

  const { t } = useTranslation();

  const {
    theme,
    openModal,
    toggleDropdown,
    toggleTheme,
    lang,
    toggleLang } = useContext(ProfileContext);

  return (
    <div className={`${styles.dropdownContent} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <Link className={styles.dropdownItem} to='/skills' onClick={toggleDropdown}>
        {t('skills')}
      </Link>
      <Link className={styles.dropdownItem} to='/education' onClick={toggleDropdown}>
        {t('education')}
      </Link>
      <Link className={styles.dropdownItem} to='/projects' onClick={toggleDropdown}>
        {t('projects')}
      </Link>
      <div onClick={() => { openModal('cv'); toggleDropdown(); }} className={styles.dropdownItem}>
        CV
      </div>
      <div onClick={toggleTheme} className={styles.dropdownItem}>
        {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
      </div>
      <div onClick={toggleLang} className={styles.dropdownItem}>
        {lang === 'es' ? <img src={UK} alt="Bandera UK" className={styles.flag} /> : <img src={Spain} alt="Bandera Espana" className={styles.flag} />}

      </div>
    </div>
  );
};

export default DropdownMenu;