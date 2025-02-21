export interface IShow{
  score: number,
  show: IShowDetails
};

export interface IShowDetails {
  id: number,
  name: string;
  image: IImage;
  type: string;
  language: string;
  summary: string;
  url: string;
  rating: {
    average: number
  }
};

export interface IImage{
  medium: string,
  original: string;
}