import styles from './MyToDoApp.module.css'
import { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
import { Link } from 'react-router-dom'
import ToDoList from '../../../assets/todoList.png'
import createTask1 from '../../../assets/createTask1.png'
import createTask2 from '../../../assets/createTask2.png'
import editTask1 from '../../../assets/editTask1.png'
import editTask2 from '../../../assets/editTask2.png'
import { useTranslation } from 'react-i18next'


const MyToDoApp = () => {
    const { theme } = useContext(ProfileContext);
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.section}>
                <div className={styles.image}>
                    <img src={ToDoList} alt="ToDoApp image" className={styles.imgCalc} />
                </div>
                <div className={styles.textSection}>
                    <h2 className={styles.title}>My ToDo App</h2>
                    <p className={styles.text}>{t('todoDescription1')}</p>
                    <p className={styles.text}>{t('todoDescription2')}</p>
                    <Link to='https://github.com/Diegoruiz1711/ToDoAppFrontend' target='_blank' className={styles.link}>
                        <p className={styles.text}>{t('feRepository')}</p>
                    </Link>
                    <p className={styles.text}>{t('todoDescription3')}</p>
                    <Link to='https://github.com/Diegoruiz1711/ToDoAppBackend' target='_blank' className={styles.link}>
                        <p className={styles.text}>{t('beRepository')}</p>
                    </Link>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.image2}>
                    <img src={createTask1} alt="create Task image 1" className={styles.imgCalc} />
                </div>
                <div className={styles.image2}>
                    <img src={createTask2} alt="create task image 2" className={styles.imgCalc} />
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.image2}>
                    <img src={editTask1} alt="edit task image 1" className={styles.imgCalc} />
                </div>
                <div className={styles.image2}>
                    <img src={editTask2} alt="edit task image 2" className={styles.imgCalc} />
                </div>
            </div>
        </div>
    )
}

export default MyToDoApp;