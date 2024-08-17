import styles from './Projects.module.css'
import { useContext } from 'react'
import { ProfileContext } from '../../Context/ProfileContext'
import SimpleTab from '../Tabs/SimpleTab';

const Projects = () => {
    const { theme } = useContext(ProfileContext);

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <SimpleTab />
        </div>
    )
}

export default Projects;