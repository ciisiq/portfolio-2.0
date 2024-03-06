import { ServiceCardProps } from '../components/ServiceCard/ServiceCard';
import repaginate from '../assets/repaginate.svg';
import create from '../assets/create.svg';
import style from '../assets/style.svg';
import cms from '../assets/cms.svg';
import mobile from '../assets/mobile.svg';
import performance from '../assets/perfomace.svg';
import hosting from '../assets/hosting.svg';
import design from '../assets/design.svg';

export const servicesOptions: ServiceCardProps[] = [
  {
    id: 1,
    icon: repaginate,
    text: 'Repaginate your website or app',
  },

  {
    id: 2,
    icon: create,
    text: 'Create from scratch website or app',
  },

  {
    id: 3,
    icon: style,
    text: 'Make the design for your website or app',
  },
  {
    id: 4,
    icon: cms,
    text: 'Create CMS website',
  },
  {
    id: 5,
    icon: mobile,
    text: 'Optimize your website/app for mobile',
  },
  {
    id: 6,
    icon: performance,
    text: 'Review the accessibility and performance',
  },
  {
    id: 7,
    icon: hosting,
    text: 'Assistance with domain and web hosting',
  },
  {
    id: 8,
    icon: design,
    text: 'Graphic design and logo design',
  },
];
