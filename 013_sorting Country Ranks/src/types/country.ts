export interface Country {
  id: number;
  name: string;
  rank: number;
  population: number;
  continent: string;
  gdp: number; // in billions USD
}

export type SortField = 'rank' | 'name' | 'population' | 'continent' | 'gdp';
export type SortDirection = 'asc' | 'desc';