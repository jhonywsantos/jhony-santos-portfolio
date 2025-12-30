
import React from 'react';
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'Web',
    image: 'https://picsum.photos/seed/shop/800/600',
    link: '#',
    description: 'A full-stack e-commerce solution with real-time inventory.'
  },
  {
    id: '2',
    title: 'Fitness Tracker App',
    category: 'Mobile',
    image: 'https://picsum.photos/seed/gym/800/600',
    link: '#',
    description: 'Cross-platform mobile app built with React Native.'
  },
  {
    id: '3',
    title: 'Brand Identity',
    category: 'Design',
    image: 'https://picsum.photos/seed/brand/800/600',
    link: '#',
    description: 'Complete visual identity for a tech startup.'
  },
  {
    id: '4',
    title: 'Financial Dashboard',
    category: 'Web',
    image: 'https://picsum.photos/seed/dash/800/600',
    link: '#',
    description: 'Data visualization platform for crypto assets.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: '💻', category: 'Front-end' },
  { name: 'TypeScript', icon: '📘', category: 'Front-end' },
  { name: 'Next.js', icon: '⚡', category: 'Front-end' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Front-end' },
  { name: 'Node.js', icon: '🟢', category: 'Back-end' },
  { name: 'React Native', icon: '📱', category: 'Mobile' },
  { name: 'Figma', icon: '📐', category: 'Design' },
  { name: 'Adobe Suite', icon: '🖌️', category: 'Design' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Web Developer',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise-scale React applications.'
  },
  {
    company: 'Creative Studio',
    role: 'UI/UX Designer & Developer',
    period: '2020 - 2022',
    description: 'Bridging the gap between design and implementation for mobile apps.'
  },
  {
    company: 'Startup Hub',
    role: 'Junior Fullstack Developer',
    period: '2018 - 2020',
    description: 'Developed and maintained various client websites and internal tools.'
  }
];
