import styles from './Education.module.css'
import { useContext, useEffect } from 'react'
import { ProfileContext } from '../../Context/ProfileContext'
import UTNLogo from '../../assets/images/utnLogo.png'
import NuclioLogo from '../../assets/images/nuclio.png'
import CFPLogo from '../../assets/images/cfp.png'
import CodoACodoLogo from '../../assets/images/codoAcodo.png'
import CourseraLogo from '../../assets/images/coursera.png'

import UTN from './institutions/UTN/UTN'
import Nuclio from './institutions/Nuclio/Nuclio'
import CaC from './institutions/CaC/CaC'
import CFP from './institutions/CFP/CFP'
import Coursera from './institutions/Coursera/Coursera'

const Education = () => {

    const {
        activeComponent,
        setActiveComponent,
        toggleComponent,
        theme,
        selectedInstitute,
        setSelectedInstitute,
        handleInstituteClick } = useContext(ProfileContext)

    useEffect(() => {
        setActiveComponent(null)
        return setActiveComponent(null)
    }, []);

    return (
        <>
            <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.institutesContainer}>
                    <div
                        className={styles.institutes}
                        style={{ transform: selectedInstitute === 'UTN' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('UTN');
                            handleInstituteClick('UTN');
                        }}
                    >
                        <img src={UTNLogo} alt="Logo UTN" className={styles.institutesImage} />
                    </div>
                    <div
                        className={styles.institutes}
                        style={{ transform: selectedInstitute === 'Nuclio' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Nuclio');
                            handleInstituteClick('Nuclio');
                        }}
                    >
                        <img src={NuclioLogo} alt="Logo Nuclio" className={styles.institutesImage} />
                    </div>
                    <div
                        className={styles.institutes}
                        style={{ transform: selectedInstitute === 'CodoACodo' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('CodoACodo');
                            handleInstituteClick('CodoACodo');
                        }}
                    >
                        <img src={CodoACodoLogo} alt="Logo Codo a Codo" className={styles.institutesImage} />
                    </div>
                    <div
                        className={styles.institutes}
                        style={{ transform: selectedInstitute === 'CFP' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('CFP');
                            handleInstituteClick('CFP');
                        }}
                    >
                        <img src={CFPLogo} alt="Logo CFP" className={styles.institutesImage} />
                    </div>
                    <div
                        className={styles.institutes}
                        style={{ transform: selectedInstitute === 'Coursera' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Coursera');
                            handleInstituteClick('Coursera');
                        }}
                    >
                        <img src={CourseraLogo} alt="Logo Coursera" className={styles.institutesImage} />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    {activeComponent === 'UTN' && <UTN />}
                    {activeComponent === 'Nuclio' && <Nuclio />}
                    {activeComponent === 'CodoACodo' && <CaC />}
                    {activeComponent === 'CFP' && <CFP />}
                    {activeComponent === 'Coursera' && <Coursera />}
                </div>
            </div>
        </>
    )
}

export default Education;