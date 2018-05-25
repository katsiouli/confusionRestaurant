import { Comment } from './comment';

export class Dish {
  id: number;
  name: string;
  image: string;
  category: string;
  price: string;
  featured: boolean;
  label: string;
  description: string;
  comments: Comment[];
}
