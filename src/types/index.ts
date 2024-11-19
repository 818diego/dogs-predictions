export interface DogBreed {
  id: string;
  name: string;
  characteristics: string[];
  care: {
    grooming: string;
    exercise: string;
    training: string;
  };
  diet: {
    recommendations: string[];
    frequency: string;
    portions: string;
  };
  responsibilities: string[];
  imageUrl: string;
}

export type Theme = 'light' | 'dark';