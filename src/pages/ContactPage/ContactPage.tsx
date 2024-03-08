import './ContactPage.css';
import { InlineWidget, PopupWidget, PopupButton } from 'react-calendly';

export default function ContactPage() {
  return (
    <section className="contactpage">
      <h2>Thank you!</h2>
      <p>Contact me by this form or use my social medial.</p>
      <p>Twitter Logo</p>
      <p>Linkedin LOGO</p>
      <p>Behance Logo</p>

      {/* <!-- Calendly inline widget begin --> */}
      {/* <div className="inline-widget">
        <InlineWidget url="https://calendly.com/cii_3/15min?background_color=1f2135&text_color=00b0c5&primary_color=00b0c5" />
      </div> */}

      {/* <div className="popup-widget">
        <PopupWidget
          url="https://calendly.com/cii_3/15min?background_color=1f2135&text_color=00b0c5&primary_color=00b0c5"
          rootElement={document.getElementById('root')}
          text="Schedule Time with me"
          textColor="#ffffff"
          color="#00b0c5"
        />
      </div> */}

      <div className="App">
        <PopupButton
          url="https://calendly.com/cii_3/15min?background_color=1f2135&text_color=00b0c5&primary_color=00b0c5"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById('root')}
          text="Click here to schedule!"
        />
      </div>
      {/* <!-- Calendly inline widget end --> */}
    </section>
  );
}
