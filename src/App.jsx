import { Route, Routes } from 'react-router-dom'
import Modal from 'react-modal';
import styles from './App.module.css';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import CVModal from './components/Modals/CVModal/CVModal';
import AboutMeModal from './components/Modals/AboutMeModal/AboutMeModal';
import './i18n';

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='education' element={<Education />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
      <CVModal />
      <AboutMeModal />
    </>
  );
}
export default App;