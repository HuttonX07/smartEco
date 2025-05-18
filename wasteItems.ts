import { WasteItem } from '../types';
import { wasteClassifier } from '../lib/wasteClassifier';

export const wasteItems: WasteItem[] = [
  {
    id: 'plastic-bottle',
    name: 'Plastic Bottle',
    category: 'plastic',
    binColor: '#FFCB05', // Yellow
    recyclingInstructions: 'Empty, rinse, and flatten the bottle. Remove the cap and place both in the yellow recycling bin.',
    reuseIdeas: [
      'Use as a plant pot for small herbs',
      'Create a bird feeder',
      'Make a self-watering planter'
    ],
    points: 10,
    environmentalImpact: 'Recycling one plastic bottle saves enough energy to power a fan for 6 hours.',
    link: '/info/plastic-bottle'
  },
  {
    id: 'glass-jar',
    name: 'Glass Jar',
    category: 'glass',
    binColor: '#4CAF50', // Green
    recyclingInstructions: 'Remove the lid, empty and rinse the jar. Place in the green recycling bin.',
    reuseIdeas: [
      'Use as a storage container',
      'Create a candle holder',
      'Make a terrarium for small plants'
    ],
    points: 15,
    environmentalImpact: 'Recycling one glass jar saves enough energy to power a computer for 25 minutes.',
    link: '/info/glass-jar'
  },
  {
    id: 'cardboard-box',
    name: 'Cardboard Box',
    category: 'paper',
    binColor: '#2196F3', // Blue
    recyclingInstructions: 'Flatten the box and remove any tape or stickers. Place in the blue recycling bin.',
    reuseIdeas: [
      'Use for storage',
      'Create DIY organizers',
      'Make compost for your garden'
    ],
    points: 5,
    environmentalImpact: 'Recycling one cardboard box saves 17 trees and 7,000 gallons of water.',
    link: '/info/cardboard-box'
  },
  {
    id: 'aluminum-can',
    name: 'Aluminum Can',
    category: 'metal',
    binColor: '#9E9E9E', // Gray
    recyclingInstructions: 'Rinse the can and place it in the gray recycling bin.',
    reuseIdeas: [
      'Make a pen holder',
      'Create a small planter',
      'Use as a cookie cutter'
    ],
    points: 10,
    environmentalImpact: 'Recycling one aluminum can saves enough energy to power a TV for 3 hours.',
    link: '/info/aluminum-can'
  }
];

export const getWasteItemById = (id: string): WasteItem | undefined => {
  return wasteItems.find(item => item.id === id);
};

export const recognizeWaste = async (imageFile: File): Promise<WasteItem> => {
  try {
    return await wasteClassifier.classifyImage(imageFile);
  } catch (error) {
    console.error('Error recognizing waste:', error);
    throw new Error('Failed to recognize waste item');
  }
};