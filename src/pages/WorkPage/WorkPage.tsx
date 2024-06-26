import ProjectsCard from '../../components/ProjectsCard/ProjectsCard';
import './WorkPage.css';
import { Project } from '../../util/dataProjects';
import { useEffect, useState } from 'react';

interface ListProjectsProps {
  projects: Project[];
}

export default function WorkPage({ projects }: ListProjectsProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [originalProjects, setOriginalProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Extracting unique categories from projects
    const uniqueCategories: string[] = [];
    projects.forEach((project) => {
      const projectCategories = project.category
        .split(',')
        .map((category) => category.trim());
      uniqueCategories.push(...projectCategories);
    });
    setCategories(Array.from(new Set(uniqueCategories)));
    setProjectList(projects);
    setOriginalProjects(projects);
  }, [projects]);

  // To handle the user choices for category
  const handleCategoryChange = (selectedCategory: string) => {
    if (selectedCategory === '') {
      setProjectList(originalProjects);
    } else {
      const filteredProjects = originalProjects.filter((project) =>
        project.category.includes(selectedCategory)
      );
      setProjectList(filteredProjects);
    }
  };

  return (
    <section className="workpage">
      <div className="work-top">
        <h2 className="section-title">LATEST WORK</h2>
        <div>
          <select
            className="category"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option className="category-content" value="">
              All Categories
            </option>
            {categories.map((category, index) => (
              <option className="category-content" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container-projects">
        {projectList.length === 0 ? (
          <p className="no-projects">No Projects found</p>
        ) : (
          projectList.map((project) => (
            <ProjectsCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              category={project.category}
              link={project.link}
            />
          ))
        )}
      </div>
    </section>
  );
}
