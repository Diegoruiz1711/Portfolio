import { useContext } from 'react';
import styles from './Footer.module.css'
import { ProfileContext } from '../../Context/ProfileContext';

const Footer = () => {

    const { theme, toggleTheme } = useContext(ProfileContext);

    return (
        <div className={`${styles.menu} ${theme === 'dark' ? styles.dark : styles.light}`}>

        </div>
    )
}

export default Footer;