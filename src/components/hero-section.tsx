'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Content } from '@/types/content'

interface HeroSectionProps {
  featuredContent: Content[]
}

const HeroSection = ({ featuredContent }: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentContent, setCurrentContent] = useState(featuredContent[0])

  // Auto-rotate featured content every 5 seconds
  useEffect(() => {
    if (featuredContent.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)

      return () => clearInterval(interval)
    }
    return undefined
  }, [featuredContent.length])

  useEffect(() => {
    setCurrentContent(featuredContent[currentIndex])
  }, [currentIndex, featuredContent])

  if (!currentContent) return null

  const handlePlayClick = () => {
    // In a real app, this would start video playback
    console.log(`Playing: ${currentContent.title}`)
  }

  const handleMoreInfoClick = () => {
    // In a real app, this would open a detail modal
    console.log(`More info for: ${currentContent.title}`)
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentContent.imageUrl})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {/* Content Type & Year */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                {currentContent.type === 'movie' ? 'Movie' : 'TV Series'}
              </span>
              <span className="text-white/80 text-sm">
                {currentContent.releaseYear}
              </span>
              {currentContent.isNew && (
                <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                  NEW
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {currentContent.title}
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed max-w-xl">
              {currentContent.description}
            </p>

            {/* Metadata */}
            <div className="flex items-center space-x-6 mb-8 text-white/80 text-sm">
              <span className="border border-white/40 px-2 py-1 text-xs">
                {currentContent.rating}
              </span>
              <span>
                {currentContent.type === 'movie' 
                  ? currentContent.duration 
                  : `${currentContent.seasons} Season${currentContent.seasons > 1 ? 's' : ''}`
                }
              </span>
              <span>
                {currentContent.genre.slice(0, 2).join(', ')}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={handlePlayClick}
                className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-semibold flex items-center space-x-2"
              >
                <span className="text-xl">▶</span>
                <span>Play</span>
              </Button>
              <Button
                onClick={handleMoreInfoClick}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-3 text-lg font-semibold flex items-center space-x-2"
              >
                <span className="text-xl">ℹ</span>
                <span>More Info</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      {featuredContent.length > 1 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HeroSection