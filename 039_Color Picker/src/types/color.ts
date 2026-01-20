export interface Color {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  hsl: {
    h: number;
    s: number;
    l: number;
  };
}

export interface PresetColor {
  name: string;
  hex: string;
}

export type ColorFormat = 'hex' | 'rgb' | 'hsl';