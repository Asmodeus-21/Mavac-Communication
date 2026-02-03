
// Fix: Import React to resolve the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export enum Category {
  ALL = 'All',
  BRANDED = 'Branded Content',
  CSR = 'CSR Impact',
  FILMS = 'Films',
  PUBLISHING = 'Publishing'
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
}

export interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
}