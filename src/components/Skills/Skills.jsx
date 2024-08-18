import styles from './Skills.module.css'
import Bootstrap from '../../assets/bootstrap.png'
import TypeScript from '../../assets/typeScript.png'
import Java from '../../assets/java.png'
import React from '../../assets/react.png'
import ReactNative from '../../assets/reactNative.png'
import Node from '../../assets/node.png'
import Cypress from '../../assets/cypress.png'
import Insomnia from '../../assets/insomnia.png'
import MongoDB from '../../assets/mongoDB.png'
import Javascript from '../../assets/javascript.png'
import Express from '../../assets/express.png'
import { useContext } from 'react'
import { ProfileContext } from '../../Context/ProfileContext'

const Skills = () => {

    const { theme, refresh, setRefresh } = useContext(ProfileContext);

    return (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>

            <div className={styles.title}>
                {['S', 'k', 'i', 'l', 'l', 's'].map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>

            <div className={styles.skillsContainer}>
                <div className={styles.skill}><img src={React} alt="Logo ReactJs" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Node} alt="Logo NodeJs" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Javascript} alt="Logo Javascript" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={ReactNative} alt="Logo react native" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Java} alt="Logo Java" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Cypress} alt="Logo cypress" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Insomnia} alt="Logo insomnia" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={MongoDB} alt="Logo mongoDB" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Express} alt="Logo express" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={TypeScript} alt="Loso Typescript" className={styles.skillImage} /></div>
                <div className={styles.skill}><img src={Bootstrap} alt="Logo Bototstrap" className={styles.skillImage} /></div>
            </div>
        </div>

    )
}

export default Skills;