import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/IntroPage';
import ServicePage from './pages/ServicePage/ServicePage';
import WorkPage from './pages/WorkPage/WorkPage';
import { listProjects } from './util/dataProjects';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <ServicePage />
      <AboutPage />
      <WorkPage projects={listProjects} />
      <ContactPage />
    </>
  );
}

export default App;
