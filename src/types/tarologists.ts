export interface Tarologist {
  id: string;
  name: string;
  avatar: string;
  bg: string;
  spreads: Spread[];
}

export interface Spread {
  id: string;
  cards: number;
  name: string;
  cost: number;
  description: string;
}
