import TextSphere from '../../components/TextSphere/TextSphere';
import './IntroPage.css';

export default function IntroPage() {
  return (
    <section className="intro">
      <div className="left-side">
        <div className="intro-text-container">
          {' '}
          <h1 className="intro-title">Hello, I'am Cintia</h1>
          <h2 className="intro-title">a Front end Developer</h2>
          <h5 className="sub-title">
            That loves building accessible applications
          </h5>
        </div>

        <button className="contactbtn">Contact me</button>
      </div>
      <div>
        <TextSphere />
      </div>
      <div className="custom-shape-divider-bottom-1709738698">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}