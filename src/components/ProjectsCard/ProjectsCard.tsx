import './ProjectsCard.css';
import notFound from '../../assets/not-found.png';
import { useState } from 'react';
import { Project } from '../../util/dataProjects';

export default function ProjectsCard(project: Project) {
  const [imageError, setImageError] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const truncatedDescription = truncateText(project.description, 60);

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <div className="projects-container">
      <div className="project-card">
        <div className="top-card">
          {imageError ? (
            <img src={notFound} alt={'not found image'} />
          ) : (
            <img
              src={project.image}
              alt={project.description}
              onError={handleImageError}
            />
          )}
        </div>
        <div className="bottom-card">
          <div className="info">
            <h4 className="project-title">{project.title}</h4>

            <p className={`description ${expanded ? 'expanded' : ''}`}>
              {expanded ? project.description : truncatedDescription}
            </p>

            <div className="container-btns">
              {project.description.length > 50 && (
                <button className="read-more" onClick={toggleExpand}>
                  {expanded ? 'Show Less' : 'Read More'}
                </button>
              )}
              <a href={project.link} target="_blank" className="more-link">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
