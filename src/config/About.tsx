import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import GraphQL from '@/components/technologies/GraphQL';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import MySQL from '@/components/technologies/MySQL';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import Redux from '@/components/technologies/Redux';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export const mySkills = [
  // Frontend
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <ReactIcon key="react" />,
  <NextJs key="nextjs" />,
  <Redux key="redux" />,
  <TailwindCss key="tailwindcss" />,
  <Shadcn key="shadcn" />,
  <Motion key="motion" />,
  // Backend
  <NodeJs key="nodejs" />,
  <ExpressJs key="expressjs" />,
  <NestJs key="nestjs" />,
  <GraphQL key="graphql" />,
  <SocketIo key="socketio" />,
  <Redis key="redis" />,
  // Databases
  <MongoDB key="mongodb" />,
  <PostgreSQL key="postgresql" />,
  <MySQL key="mysql" />,
  <Prisma key="prisma" />,
  // DevOps & Tools
  <Docker key="docker" />,
  <Github key="github" />,
  <Vercel key="vercel" />,
];

export const about = {
  name: 'Anuj Jagtap',
  description: `I'm a Full Stack Developer with hands-on experience building scalable web applications. I specialize in React, Next.js, Node.js, NestJS, and modern databases like PostgreSQL and MongoDB. I enjoy crafting clean, performant products that solve real problems — from real-time ordering platforms to AI-powered tools.`,
};
