import example from '../assets/presentation.png';
import bossanova from '../assets/work/bossanova.jpg';

export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
};

export const listProjects: Project[] = [
  {
    id: 1,
    image: bossanova,
    title: 'Job Tracker - BossaNova',
    description:
      'Project created in Agile team, the main idea off this fullstack project is that other people could use to list their work without using tables or email, main main function in this project was deal with the styling, feat dark mode and did some of the testing in the backend routes and BDD frontend E2E',
    category: 'Fullstack, Tailwinds, Reactjs, Jest, API, mobile-friendly',
    link: 'https://bossanova.netlify.app/',
  },
  {
    id: 2,
    image: example,
    title: 'Test 2',
    description: 'something',
    category: 'Website, Design',
    link: 'https://bossanova.netlify.app/',
  },

  {
    id: 3,
    image: example,
    title: 'Test 3',
    description: 'something',
    category: 'Nodejs, Nextjs',
    link: 'https://bossanova.netlify.app/',
  },

  {
    id: 4,
    image: example,
    title: 'Test 4',
    description: 'something',
    category: 'fullstack, frontend',
    link: 'https://bossanova.netlify.app/',
  },
];
