import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Knovator Technologies Pvt Ltd',
    position: 'Full-Stack Developer',
    location: 'Surat, Gujarat',
    image: '/company/knovator-technologies.webp',
    description: [
      'Built full-stack restaurant web app (MERN) with real-time order tracking via WebSockets, serving 1,000+ daily active users.',
      'Integrated Toast and Incentivio POS payment systems, improved API response times through Redis caching and query indexing.',
      'Engineered core authentication, order tracking, and POS payment integration for an advanced SaaS ordering platform (Next.js, NestJS, PostgreSQL).',
      'Handled direct client communication and worked with the tech support team to resolve production bugs under real user pressure.',
    ],
    startDate: 'September 2025',
    endDate: 'March 2026',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'NestJS',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Socket.io',
        href: 'https://socket.io/',
        icon: <SocketIo />,
      },
    ],
    website: 'https://knovator.com',
    linkedin: 'https://www.linkedin.com/company/knovator-technologies',
  },
  {
    isCurrent: false,
    company: 'Androbuddy Technologies Pvt Ltd',
    position: 'Frontend Developer',
    location: 'Pune, Maharashtra',
    image: '/company/abt.webp',
    description: [
      'Built an e-commerce ordering platform (React, Next.js SSR/SSG) with full payment integration, achieving 85–90 Lighthouse scores and 30% faster load times for 4,000+ monthly users.',
      'Developed two production admin panels — one for the ordering platform (Redux Toolkit, TanStack Query) and one for a Flutter-based community app (Next.js, TypeScript, ShadCN/UI, TanStack Query), enabling full content, user, and order management.',
      'Designed and developed creative landing pages for multiple internal company products, focusing on performance and visual polish.',
    ],
    startDate: 'August 2024',
    endDate: 'July 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'shadcn/ui',
        href: 'https://ui.shadcn.com/',
        icon: <Shadcn />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://androtechbuddy.com',
    linkedin: 'https://www.linkedin.com/company/androbuddy-technologies',
  },
];
