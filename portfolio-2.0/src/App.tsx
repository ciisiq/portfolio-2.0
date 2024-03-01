import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import ServicePage from './pages/ServicePage/ServicePage';
import WorkPage from './pages/WorkPage/WorkPage';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <ServicePage />
      <AboutPage />
      <WorkPage />
      <ContactPage />
    </>
  );
}

export default App;
