import TextSphere from '../../components/TextSphere/TextSphere';
import './IntroPage.css';

export default function IntroPage() {
  return (
    <div className="intro">
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
    </div>
  );
}
