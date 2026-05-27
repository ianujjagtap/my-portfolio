import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

// Dark placeholder used for projects without a screenshot
const PLACEHOLDER = '/project/placeholder-dark.png';

export const projects: Project[] = [
  {
    title: 'Pulse Extension',
    description:
      'Antigravity extension tracking LLM model quotas across multiple accounts. Zero-config setup with no Google Cloud setup required, 300+ beta downloads.',
    image: '/project/pulse.webp',
    link: 'https://open-vsx.org/extension/EchoLabs/pulse-antigravity-quota',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    live: 'https://open-vsx.org/extension/EchoLabs/pulse-antigravity-quota',
    details: false,
    projectDetailsPageSlug: '/projects/pulse',
    isWorking: true,
  },
  {
    title: 'Route LLM',
    description:
      'Prompt router that selects the most suitable LLM using a custom distillation algorithm built with Vercel AI SDK.',
    image: '/project/logo-dark.png',
    link: 'https://route-llm.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    live: 'https://route-llm.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/route-llm',
    isWorking: true,
  },
  {
    title: 'ScribeAI',
    description:
      'AI writing editor with speech-to-text, grammar correction, and context-aware rewriting via Gemini API.',
    image: PLACEHOLDER,
    link: 'https://scrib-ai-orb.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    live: 'https://scrib-ai-orb.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/scribeai',
    isWorking: true,
  },
  {
    title: 'Echo',
    description:
      'AI chatbot with syntax-highlighted code blocks, and Gemini 2.5 Flash integration. Features OAuth/JWT auth, markdown rendering.',
    image: PLACEHOLDER,
    link: 'https://github.com/ianujjagtap/echo',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <Motion key="motion" /> },
    ],
    github: 'https://github.com/ianujjagtap/echo',
    live: 'https://github.com/ianujjagtap/echo',
    details: false,
    projectDetailsPageSlug: '/projects/echo',
    isWorking: true,
  },
];
