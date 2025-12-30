
export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Design';
  image: string;
  link: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Front-end' | 'Back-end' | 'Mobile' | 'Design' | 'Others';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
