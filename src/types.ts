export interface Member {
  name: string;
  school: string;
  role: string;
  pfp?: string; // profile picture placeholder description
  bio?: string;
}

export type ProjectType = 'Technology' | 'Culture' | 'Product' | 'Platform' | 'Philanthropy';
export type ProjectStatus = 'yet to start' | 'paused' | 'recruiting' | 'operating';

export interface ProjectUpdate {
  content: string;
  date: string;
}

export interface Comment {
  id: string; // unique id
  author: string;
  text: string;
  timestamp: string;
}

export interface Project {
  id: string;
  name: string;
  chineseName?: string;
  logoColor: string; // hex colour
  themeColor: string; // for UI matching
  type: ProjectType;
  status: ProjectStatus;
  founded: string;
  activeMembersCount: number;
  members: Member[];
  mission: string;
  vision: string;
  description: string;
  hiringNeeds?: {
    role: string;
    count: number;
  }[];
  updates: ProjectUpdate[];
  likes: number;
  comments: Comment[];
  websiteUrl?: string;
  pitchDeckUrl?: string;

  // Space coordinate for 3D exploration
  x: number;
  y: number;
  z: number;
  radius: number; // visual scale of the planet
}

export interface TeamMember {
  name: string;
  role: string;
  university: string;
  tagline: string;
  achievements: string[];
  bio: string;
}
