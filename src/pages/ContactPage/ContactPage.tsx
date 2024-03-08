import React, { useRef, useEffect } from 'react';
import { PopupButton } from 'react-calendly';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const rootElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElementRef.current = rootElement as HTMLDivElement;
    }
  }, []);

  return (
    <section className="contactpage">
      <div className="test">
        <div className="left">
          <h2>Thank you!</h2>
          <p>Contact me by this Schedule button or use my social medial.</p>
          <div className="cont-logos">
            <p>Twitter Logo</p>
            <p>Linkedin LOGO</p>
            <p>Behance Logo</p>
          </div>
        </div>

        <div className="verticalLine"></div>

        <div className="calendar">
          <h2>Contact me 👇</h2>
          <PopupButton
            url="https://calendly.com/cii_3/15min?background_color=1f2135&text_color=00b0c5&primary_color=00b0c5"
            rootElement={rootElementRef.current as HTMLElement}
            text="Click here to schedule!"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
