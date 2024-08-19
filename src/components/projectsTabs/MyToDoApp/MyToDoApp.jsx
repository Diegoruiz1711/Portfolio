import styles from './MyToDoApp.module.css'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import { Link } from 'react-router-dom'
import MyToDoAppVideo from '../../../assets/videos/myToDoAppVideo.webm'
import { useTranslation } from 'react-i18next'


const MyToDoApp = () => {
    const { theme } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (

        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>My ToDo App</h2>
                <p className={styles.text}>{t('todoDescription1')}</p>
                <p className={styles.text}>{t('todoDescription2')}</p>
                <Link to='https://github.com/Diegoruiz1711/ToDoAppFrontend' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('feRepository')}</p>
                </Link>
                <Link to='https://github.com/Diegoruiz1711/ToDoAppBackend' target='_blank' className={styles.link}>
                    <p className={styles.text}>{t('beRepository')}</p>
                </Link>
            </div>

            <div className={styles.section}>
                <video src={MyToDoAppVideo} controls className={styles.todoAppVideo}></video>
            </div>
        </div>
    )
}

export default MyToDoApp;