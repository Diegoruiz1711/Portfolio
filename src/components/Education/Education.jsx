import styles from './Education.module.css'
import { useContext, useEffect } from 'react'
import { ProfileContext } from '../../Context/ProfileContext'
import UTNLogo from '../../assets/utnLogo.png'
import NuclioLogo from '../../assets/nuclio.png'
import CFPLogo from '../../assets/cfp.png'
import CodoACodoLogo from '../../assets/codoAcodo.png'
import CourseraLogo from '../../assets/Coursera.png'

import UTN from '../UTN/UTN'
import Nuclio from '../Nuclio/Nuclio'
import CaC from '../CaC/CaC'
import CFP from '../CFP/CFP'
import Coursera from '../Coursera/Coursera'

const Education = () => {

    const { setModalIsOpen,
        handleOpenCVModal,
        closeCVModal,
        activeComponent,
        setActiveComponent,
        toggleComponent,
        theme } = useContext(ProfileContext)

    useEffect(() => {
        setActiveComponent(null)
        return setActiveComponent(null)
    }, []);

    return (
        <>
            <div className={`${styles.educationContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.skillsContainer}>
                    <div className={styles.skill} onClick={() => toggleComponent('UTN')}>
                        <img src={UTNLogo} alt="Logo UTN" className={styles.skillImage} />
                    </div>
                    <div className={styles.skill} onClick={() => toggleComponent('Nuclio')}>
                        <img src={NuclioLogo} alt="Logo Nuclio" className={styles.skillImage} />
                    </div>
                    <div className={styles.skill} onClick={() => toggleComponent('CodoACodo')}>
                        <img src={CodoACodoLogo} alt="Logo Codo a Codo" className={styles.skillImage} />
                    </div>
                    <div className={styles.skill} onClick={() => toggleComponent('CFP')}>
                        <img src={CFPLogo} alt="Logo CFP" className={styles.skillImage} />
                    </div>
                    <div className={styles.skill} onClick={() => toggleComponent('Coursera')}>
                        <img src={CourseraLogo} alt="Logo Coursera" className={styles.skillImage} />
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