'use client'

import { useState } from 'react'
import { Content } from '@/types/content'
import { Button } from '@/components/ui/button'

interface ContentCardProps {
  content: Content
  onClick?: (content: Content) => void
}

const ContentCard = ({ content, onClick }: ContentCardProps) => {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick(content)
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div
      className="relative min-w-[250px] max-w-[300px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Main Card */}
      <div className="relative rounded-lg overflow-hidden bg-gray-900">
        {/* Image */}
        <div className="aspect-video relative">
          {!imageError ? (
            <img
              src={content.imageUrl}
              alt={content.title}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🎬</div>
                <div className="text-white/60 text-sm">
                  {content.type === 'movie' ? 'Movie' : 'TV Show'}
                </div>
              </div>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black via-black/80 to-transparent">
          <h3 className="font-bold text-sm mb-1 truncate">
            {content.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-white/80 mb-2">
            <span className="border border-white/40 px-1 text-xs">
              {content.rating}
            </span>
            <span>{content.releaseYear}</span>
            {content.isNew && (
              <span className="bg-red-600 px-1 py-0.5 text-xs font-bold rounded">
                NEW
              </span>
            )}
          </div>
          <p className="text-xs text-white/70 line-clamp-2 mb-2">
            {content.description.substring(0, 80)}...
          </p>
          <div className="text-xs text-white/60">
            {content.genre.slice(0, 2).join(', ')}
          </div>
        </div>
      </div>

      {/* Hover Card (appears above main card) */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bg-gray-900 rounded-lg shadow-2xl border border-white/10 p-4 transform scale-110 z-20">
          <div className="aspect-video relative mb-3 rounded overflow-hidden">
            {!imageError ? (
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🎬</div>
                  <div className="text-white/60 text-xs">
                    {content.type === 'movie' ? 'Movie' : 'TV Show'}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2 mb-3">
            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90 h-8 w-8 rounded-full flex items-center justify-center p-0"
            >
              <span className="text-sm">▶</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 h-8 w-8 rounded-full flex items-center justify-center p-0"
            >
              <span className="text-sm">+</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 h-8 w-8 rounded-full flex items-center justify-center p-0"
            >
              <span className="text-sm">👍</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 h-8 w-8 rounded-full flex items-center justify-center p-0 ml-auto"
            >
              <span className="text-sm">⌄</span>
            </Button>
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-2 text-xs text-white/80 mb-2">
            <span className="text-green-500 font-semibold">98% Match</span>
            <span className="border border-white/40 px-1">
              {content.rating}
            </span>
            <span>
              {content.type === 'movie' 
                ? content.duration 
                : `${content.seasons} Season${content.seasons > 1 ? 's' : ''}`
              }
            </span>
          </div>

          {/* Genres */}
          <div className="text-xs text-white/70">
            {content.genre.slice(0, 3).join(' • ')}
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentCard