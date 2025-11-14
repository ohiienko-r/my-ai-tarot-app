export interface Tarologist {
  id: string;
  name: string;
  avatar: string;
  bg: string;
  spreads: Spread[];
}

export interface Spread {
  id: string;
  name: string;
  cost: number;
  description: string;
}
