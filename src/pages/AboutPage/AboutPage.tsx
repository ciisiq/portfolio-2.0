import ToolsCard from '../../components/ToolsCard/ToolsCard';
import './AboutPage.css';
import { toolsDev, toolsDesign } from '../../util/dataTools';
import Marquee from 'react-fast-marquee';

export default function AboutPage() {
  return (
    <section className="details">
      <div className="about">
        <h3 className="section-title service-title">ABOUT ME</h3>

        <div className="left-text">
          <p>
            A passionate front-end developer ready to embark on my journey in
            the tech industry. With a background in graphic design, I bring
            creativity and technical expertise to the table.{' '}
          </p>
          <br />
          <p>
            My degree has equipped me with a keen eye for design and a deep
            understanding of user-centred principles. I love challenges and
            always want to learn and grow. Whether it’s solving complex problems
            or creating scalable, accessible web applications, I approach every
            task with enthusiasm and dedication.
          </p>
          <br />
          <p>
            My goal is to craft intuitive, responsive experiences that
            prioritize user needs while pushing the boundaries of innovation. In
            my work, I prioritize best practices for design, ensuring that every
            project I undertake is not only visually appealing but also
            functional and user-friendly. I am committed to staying up-to-date
            with the latest technologies and methodologies, constantly seeking
            new opportunities to expand my skill set.
          </p>
          <p className="location">London - Uk</p>
        </div>
      </div>
      <div className="tools-used">
        <h3 className="section-title service-title">WHAT I USE</h3>
        <div className="tools-container">
          <Marquee>
            {toolsDev.map((tool) => (
              <ToolsCard
                key={tool.id}
                id={tool.id}
                alt={tool.alt}
                logo={tool.logo}
              />
            ))}

            {toolsDesign.map((tool) => (
              <ToolsCard
                key={tool.id}
                id={tool.id}
                alt={tool.alt}
                logo={tool.logo}
              />
            ))}
          </Marquee>

          {/* <Marquee></Marquee> */}
        </div>
      </div>
    </section>
  );
}
