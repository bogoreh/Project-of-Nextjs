export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
}

export interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  isBold: boolean;
}

export interface MemeState {
  selectedMeme: Meme | null;
  topText: string;
  bottomText: string;
  textColor: string;
  fontSize: number;
  memes: Meme[];
}