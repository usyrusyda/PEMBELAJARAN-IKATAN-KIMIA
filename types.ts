
import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
  isDropdown?: boolean;
  dropdownLinks?: { label: string; url: string }[];
}

export interface AppContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playTone: (freq?: number, duration?: number, type?: OscillatorType) => void;
  isForumOpen: boolean;
  toggleForum: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface SectionProps {
  id: string;
}

export interface ForumPost {
  id: number;
  author: string;
  role: 'Siswa' | 'Guru' | 'AI';
  content: string;
  image?: string; // Base64 string
  likes: number;
  timestamp: string;
  replies: ForumPost[];
}
