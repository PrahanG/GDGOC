export interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    images: string[];
    tags: string[];
    color: 'blue' | 'red' | 'yellow' | 'green';
  }