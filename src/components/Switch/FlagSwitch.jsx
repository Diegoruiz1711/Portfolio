import { useContext } from 'react';
import styles from './FlagSwitch.module.css'
import { ProfileContext } from '../../Context/ProfileContext';
import Spain from '../../assets/images/spain.png'
import UK from '../../assets/images/uk.png'

const FlagSwitch = () => {

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
        handleChange,
        toggled, setToggled, handleFlag, lang } = useContext(ProfileContext);

    return (

        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`} >
            <label className={styles.switch}>
                <input type="checkbox" checked={toggled} onChange={handleFlag} />
                <span className={styles.slider}>
                    {toggled ? (
                        <img src={Spain} alt="Bandera Espana" className={styles.flag} />
                    ) : (
                        <img src={UK} className={styles.flag} alt="Bandera UK" />
                    )}
                </span>
            </label>
        </div>

    )
}

export default FlagSwitch;