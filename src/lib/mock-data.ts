import { Content, Movie, TVShow, ContentRow, Genre } from '@/types/content';

// Mock movie data
export const mockMovies: Movie[] = [
  {
    id: 'movie-1',
    title: 'Digital Horizon',
    description: 'In a world where technology and humanity collide, a brilliant programmer discovers a conspiracy that could change everything. An epic sci-fi thriller that explores the boundaries between human and artificial intelligence.',
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    rating: 'PG-13',
    duration: '2h 15m',
    releaseYear: 2024,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e853be6b-76b4-4926-b89c-d3efe56414b7.png',
    isFeatured: true,
    isNew: true,
    cast: ['Sarah Chen', 'Marcus Rodriguez', 'David Kim'],
    director: 'Alexandra Williams',
    type: 'movie'
  },
  {
    id: 'movie-2',
    title: 'Midnight Detective',
    description: 'A seasoned detective navigates the dark streets of the city, solving complex mysteries while battling personal demons. A gripping crime drama with unexpected twists.',
    genre: ['Crime', 'Drama', 'Mystery'],
    rating: 'R',
    duration: '1h 58m',
    releaseYear: 2024,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5bcbf9a4-1f71-450f-983e-e0ab36858cf4.png',
    isFeatured: false,
    isNew: true,
    cast: ['Michael Thompson', 'Elena Vasquez', 'Robert Park'],
    director: 'James Morrison',
    type: 'movie'
  },
  {
    id: 'movie-3',
    title: 'Ocean\'s Edge',
    description: 'An underwater adventure that takes viewers to the deepest parts of the ocean, where marine biologists discover ancient secrets beneath the waves.',
    genre: ['Adventure', 'Documentary', 'Nature'],
    rating: 'PG',
    duration: '1h 42m',
    releaseYear: 2023,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41b675d3-df7a-45d0-a2e3-76fff0076598.png',
    isFeatured: false,
    isNew: false,
    cast: ['Dr. Marina Santos', 'Captain Jack Wilson', 'Dr. Amy Liu'],
    director: 'Rebecca Martinez',
    type: 'movie'
  },
  {
    id: 'movie-4',
    title: 'Red Mountain',
    description: 'A high-octane action thriller set in the mountains, where a rescue team must navigate dangerous terrain to save trapped climbers before time runs out.',
    genre: ['Action', 'Adventure', 'Thriller'],
    rating: 'PG-13',
    duration: '2h 5m',
    releaseYear: 2023,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83c24d2e-9cb9-449d-82c7-70f70eac471c.png',
    isFeatured: false,
    isNew: false,
    cast: ['Tom Anderson', 'Lisa Chang', 'Mark Foster'],
    director: 'Steven Cooper',
    type: 'movie'
  },
  {
    id: 'movie-5',
    title: 'City Lights Romance',
    description: 'A heartwarming romantic comedy about two strangers who meet in a bustling city and discover that love can bloom in the most unexpected places.',
    genre: ['Romance', 'Comedy', 'Drama'],
    rating: 'PG-13',
    duration: '1h 35m',
    releaseYear: 2024,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db97fc5e-08c0-4d3c-bd4a-1b351200cd8b.png',
    isFeatured: false,
    isNew: true,
    cast: ['Emma Johnson', 'Ryan Mitchell', 'Sophie Turner'],
    director: 'Katherine Lee',
    type: 'movie'
  }
];

// Mock TV show data
export const mockTVShows: TVShow[] = [
  {
    id: 'tv-1',
    title: 'Quantum Investigations',
    description: 'A brilliant team of quantum physicists solve crimes using cutting-edge science and technology. Each episode blends complex scientific concepts with thrilling mystery plots.',
    genre: ['Sci-Fi', 'Crime', 'Drama'],
    rating: 'TV-14',
    seasons: 3,
    episodes: 42,
    releaseYear: 2022,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e16c485c-8b96-41ff-a682-17a69863574b.png',
    isFeatured: true,
    isNew: false,
    cast: ['Dr. Alex Rivera', 'Sam Parker', 'Maya Nakamura'],
    creator: 'Jonathan Blake',
    type: 'tv'
  },
  {
    id: 'tv-2',
    title: 'Valley High',
    description: 'Follow the lives of teenagers navigating high school drama, relationships, and the challenges of growing up in modern times. A coming-of-age series that resonates with all generations.',
    genre: ['Drama', 'Teen', 'Romance'],
    rating: 'TV-PG',
    seasons: 2,
    episodes: 24,
    releaseYear: 2023,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f72543dc-dd52-4d0a-8903-54db5cd5957f.png',
    isFeatured: false,
    isNew: true,
    cast: ['Zoe Williams', 'Jake Thompson', 'Mia Rodriguez'],
    creator: 'Sarah Davis',
    type: 'tv'
  },
  {
    id: 'tv-3',
    title: 'Chef\'s Table Global',
    description: 'An Emmy-winning culinary documentary series that showcases world-renowned chefs and their innovative approaches to cooking, culture, and creativity.',
    genre: ['Documentary', 'Food', 'Culture'],
    rating: 'TV-G',
    seasons: 4,
    episodes: 32,
    releaseYear: 2021,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/530f0471-0992-4bed-a410-cd2dd8226038.png',
    isFeatured: false,
    isNew: false,
    cast: ['Various Chefs'],
    creator: 'Culinary Productions',
    type: 'tv'
  },
  {
    id: 'tv-4',
    title: 'Space Station Alpha',
    description: 'A gripping space drama following the crew of an international space station as they face technical challenges, personal conflicts, and the vast mysteries of space.',
    genre: ['Sci-Fi', 'Drama', 'Thriller'],
    rating: 'TV-14',
    seasons: 1,
    episodes: 8,
    releaseYear: 2024,
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57ee9560-e7cd-477d-9fc1-44802e2634f8.png',
    isFeatured: true,
    isNew: true,
    cast: ['Commander Sarah Hayes', 'Dr. Yuki Tanaka', 'Engineer Carlos Santos'],
    creator: 'Michael Roberts',
    type: 'tv'
  }
];

// Combine all content
export const allContent: Content[] = [...mockMovies, ...mockTVShows];

// Content rows for homepage
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    items: [mockMovies[0], mockTVShows[0], mockMovies[1], mockTVShows[3], mockMovies[4]]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    items: allContent.filter(item => item.isNew)
  },
  {
    id: 'movies',
    title: 'Popular Movies',
    items: mockMovies
  },
  {
    id: 'tv-shows',
    title: 'TV Shows',
    items: mockTVShows
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    items: allContent.filter(item => 
      item.genre.includes('Action') || 
      item.genre.includes('Adventure') || 
      item.genre.includes('Thriller')
    )
  },
  {
    id: 'sci-fi',
    title: 'Sci-Fi & Fantasy',
    items: allContent.filter(item => 
      item.genre.includes('Sci-Fi') || 
      item.genre.includes('Fantasy')
    )
  }
];

// Featured content for hero section
export const featuredContent = allContent.filter(item => item.isFeatured);

// Genre list
export const genres: Genre[] = [
  { id: 'action', name: 'Action', slug: 'action' },
  { id: 'adventure', name: 'Adventure', slug: 'adventure' },
  { id: 'comedy', name: 'Comedy', slug: 'comedy' },
  { id: 'crime', name: 'Crime', slug: 'crime' },
  { id: 'documentary', name: 'Documentary', slug: 'documentary' },
  { id: 'drama', name: 'Drama', slug: 'drama' },
  { id: 'horror', name: 'Horror', slug: 'horror' },
  { id: 'romance', name: 'Romance', slug: 'romance' },
  { id: 'sci-fi', name: 'Sci-Fi', slug: 'sci-fi' },
  { id: 'thriller', name: 'Thriller', slug: 'thriller' }
];