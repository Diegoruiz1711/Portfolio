import styles from './SimpleTab.module.css';
import React, { useContext, useEffect } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { ProfileContext } from '../../Context/ProfileContext';
import Chokolade from '../projectsTabs/Chokolade/Chokolade';
import JSCalculator from '../projectsTabs/JSCalculator/JSCalculator';
import Lumatic from '../projectsTabs/Lumatic/Lumatic';
import MyToDoApp from '../projectsTabs/MyToDoApp/MyToDoApp';
import { useTranslation } from 'react-i18next';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className={`${styles.tabItem} ${props.theme === 'dark' ? styles.dark : styles.light}`} p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const SimpleTab = () => {
    const { theme, activeTab, setActiveTab, handleChange } = useContext(ProfileContext);

    useEffect(() => {
        setActiveTab(0)
    }, [])
    const { t } = useTranslation();
    return (
        <div className={`${styles.tabsContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                aria-label="Proyectos"
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    backgroundColor: theme === 'dark' ? 'rgb(30, 29, 29)' : 'white',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                }}
            >
                <Tab
                    label="Chokolade La Plata"
                    sx={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'rgb(30, 29, 29)' : 'white',
                        '&.Mui-selected': {
                            color: theme === 'dark' ? 'black' : 'white',
                            backgroundColor: theme === 'dark' ? 'white' : 'rgb(30, 29, 29)',
                        },
                    }}
                />
                <Tab
                    label="Lumatic Events"
                    sx={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'rgb(30, 29, 29)' : 'white',
                        '&.Mui-selected': {
                            color: theme === 'dark' ? 'black' : 'white',
                            backgroundColor: theme === 'dark' ? 'white' : 'rgb(30, 29, 29)',
                        },
                    }}
                />
                <Tab
                    label={t('simpleCalculator')}
                    sx={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'rgb(30, 29, 29)' : 'white',
                        '&.Mui-selected': {
                            color: theme === 'dark' ? 'black' : 'white',
                            backgroundColor: theme === 'dark' ? 'white' : 'rgb(30, 29, 29)',
                        },
                    }}
                />
                <Tab
                    label="My ToDo app"
                    sx={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'rgb(30, 29, 29)' : 'white',
                        '&.Mui-selected': {
                            color: theme === 'dark' ? 'black' : 'white',
                            backgroundColor: theme === 'dark' ? 'white' : 'rgb(30, 29, 29)',
                        },
                    }}
                />
            </Tabs>

            <TabPanel value={activeTab} index={0} theme={theme}>
                <Chokolade />
            </TabPanel>
            <TabPanel value={activeTab} index={1} theme={theme}>
                <Lumatic />
            </TabPanel>
            <TabPanel value={activeTab} index={2} theme={theme}>
                <JSCalculator />
            </TabPanel>
            <TabPanel value={activeTab} index={3} theme={theme}>
                <MyToDoApp />
            </TabPanel>
        </div>
    );
};

export default SimpleTab;
