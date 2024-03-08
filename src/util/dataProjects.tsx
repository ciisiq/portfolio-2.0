import example from '../assets/presentation.png';

export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
};

export const listProjects: Project[] = [
  {
    id: 1,
    image: example,
    title: 'Test',
    description: 'something',
    category: 'Ui, frontend',
  },
  {
    id: 2,
    image: example,
    title: 'Test 2',
    description: 'something',
    category: 'Website, Design',
  },

  {
    id: 3,
    image: example,
    title: 'Test 3',
    description: 'something',
    category: 'Nodejs, Nextjs',
  },

  {
    id: 4,
    image: example,
    title: 'Test 4',
    description: 'something',
    category: 'fullstack, frontend',
  },
];
