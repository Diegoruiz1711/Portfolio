import styles from './Skills.module.css'
import Bootstrap from '../../assets/images/bootstrap.png'
import CorelDraw from '../../assets/images/corelDraw.png'
import HTML from '../../assets/images/html.png'
import CSS from '../../assets/images/css.png'
import TypeScript from '../../assets/images/typeScript.png'
import Java from '../../assets/images/java.png'
import React from '../../assets/images/react.png'
import ReactNative from '../../assets/images/reactNative.png'
import Node from '../../assets/images/node.png'
import Cypress from '../../assets/images/cypress.png'
import Insomnia from '../../assets/images/insomnia.png'
import MongoDB from '../../assets/images/mongoDB.png'
import Javascript from '../../assets/images/javascript.png'
import Express from '../../assets/images/express.png'
import Figma from '../../assets/images/figma.png'
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
                <div className={styles.skill}>
                    <img src={HTML} alt="Logo ReactJs" className={styles.skillImage} />
                    <p className={styles.skillText}>HTML 5</p>
                </div>
                <div className={styles.skill}>
                    <img src={CSS} alt="Logo NodeJs" className={styles.skillImage} />
                    <p className={styles.skillText}>CSS 3</p>
                </div>
                <div className={styles.skill}>
                    <img src={Javascript} alt="Logo Javascript" className={styles.skillImage} />
                    <p className={styles.skillText}>JavaScript</p>
                </div>

                <div className={styles.skill}>
                    <img src={React} alt="Logo ReactJs" className={styles.skillImage} />
                    <p className={styles.skillText}>React JS</p>
                </div>

                <div className={styles.skill}>
                    <img src={Node} alt="Logo NodeJs" className={styles.skillImage} />
                    <p className={styles.skillText}>Node Js</p>
                </div>
                <div className={styles.skill}>
                    <img src={ReactNative} alt="Logo react native" className={styles.skillImage} />
                    <p className={styles.skillText}>React Native</p>
                </div>
                <div className={styles.skill}>
                    <img src={Java} alt="Logo Java" className={styles.skillImage} />
                    <p className={styles.skillText}>Java</p>
                </div>
                <div className={styles.skill}>
                    <img src={Cypress} alt="Logo cypress" className={styles.skillImage} />
                    <p className={styles.skillText}>Cypress.io</p>
                </div>
                <div className={styles.skill}>
                    <img src={Insomnia} alt="Logo insomnia" className={styles.skillImage} />
                    <p className={styles.skillText}>Insomnia</p>
                </div>
                <div className={styles.skill}>
                    <img src={MongoDB} alt="Logo mongoDB" className={styles.skillImage} />
                    <p className={styles.skillText}>MongoDB</p>
                </div>
                <div className={styles.skill}>
                    <img src={Express} alt="Logo express" className={styles.skillImage} />
                    <p className={styles.skillText}>Express</p>
                </div>
                <div className={styles.skill}>
                    <img src={TypeScript} alt="Logo Typescript" className={styles.skillImage} />
                    <p className={styles.skillText}>TypeScript</p>
                </div>
                <div className={styles.skill}>
                    <img src={Bootstrap} alt="Logo Bototstrap" className={styles.skillImage} />
                    <p className={styles.skillText}>Bootstrap</p>
                </div>
                <div className={styles.skill}>
                    <img src={Figma} alt="Logo Figma" className={styles.skillImage} />
                    <p className={styles.skillText}>Figma</p>
                </div>
                <div className={styles.skill}>
                    <img src={CorelDraw} alt="Logo CorelDraw" className={styles.skillImage} />
                    <p className={styles.skillText}>CorelDRAW</p>
                </div>
            </div>
        </div>

    )
}

export default Skills;