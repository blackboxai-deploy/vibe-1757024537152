// Content types for Netflix-like streaming platform

export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  rating: string;
  duration: string;
  releaseYear: number;
  imageUrl: string;
  videoUrl?: string;
  isFeatured: boolean;
  isNew: boolean;
  cast: string[];
  director: string;
  type: 'movie';
}

export interface TVShow {
  id: string;
  title: string;
  description: string;
  genre: string[];
  rating: string;
  seasons: number;
  episodes: number;
  releaseYear: number;
  imageUrl: string;
  videoUrl?: string;
  isFeatured: boolean;
  isNew: boolean;
  cast: string[];
  creator: string;
  type: 'tv';
}

export type Content = Movie | TVShow;

export interface ContentRow {
  id: string;
  title: string;
  items: Content[];
}

export interface User {
  id: string;
  name: string;
  profileImage: string;
  favoriteGenres: string[];
  watchList: string[];
  watchHistory: string[];
}

export interface SearchResult {
  query: string;
  results: Content[];
  totalCount: number;
}

export interface Genre {
  id: string;
  name: string;
  slug: string;
}