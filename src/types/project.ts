export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  client?: string;
  period?: string;
  stack?: string[];
  image?: string;
}
