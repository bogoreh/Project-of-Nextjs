export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  color?: string;
}

export interface ImageSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}