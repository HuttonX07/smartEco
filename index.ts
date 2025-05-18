export interface WasteItem {
  id: string;
  name: string;
  category: WasteCategory;
  binColor: string;
  recyclingInstructions: string;
  reuseIdeas: string[];
  points: number;
  imageUrl?: string;
  environmentalImpact: string;
  link: string;
}

export type WasteCategory = 
  | 'plastic'
  | 'paper'
  | 'glass'
  | 'metal';

export interface UserState {
  points: number;
  scannedItems: string[];
}