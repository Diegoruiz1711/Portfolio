import { createContext, useState } from "react";
import i18n from 'i18next';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    // useStates
    const [activeModal, setActiveModal] = useState(null);
    const [activeComponent, setActiveComponent] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [theme, setTheme] = useState('light');
    const [activeTab, setActiveTab] = useState(0)
    const [lang, setLang] = useState('es')

    // Funtions

    const openModal = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const toggleComponent = (componentName) => {
        setActiveComponent(prev => (prev === componentName ? null : componentName));
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const toggleLang = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
    }


    // Context
    const contextValue = {
        activeModal,
        setActiveModal,
        activeComponent,
        setActiveComponent,
        dropdownOpen,
        setDropdownOpen,
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
        lang,
        setLang,
        toggleLang
    };

    return (
        <ProfileContext.Provider value={contextValue}>
            {children}
        </ProfileContext.Provider>
    );
}

export default ProfileProvider;