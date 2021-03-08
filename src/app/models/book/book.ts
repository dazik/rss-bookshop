export enum Category {
  Adventure = 'Adventure',
  Classics = 'Classics',
  Detective = 'Detective',
  Fantasy = 'Fantasy',
  Horror = 'Horror',
  Comics = 'Comics'
}

export interface Book {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category?: Category;
  createDate: number;
  isAvailable: boolean;
  quantity: number;
}
