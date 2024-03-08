import './ProjectsCard.css';
import notFound from '../../assets/not-found.png';
import { useState } from 'react';
import { Project } from '../../util/dataProjects';

export default function ProjectsCard(project: Project) {
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

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
            <p className="description">{project.description}</p>
            <p className="category">{project.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
