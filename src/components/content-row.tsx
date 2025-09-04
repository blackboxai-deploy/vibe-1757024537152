'use client'

import { useRef } from 'react'
import { Content } from '@/types/content'
import ContentCard from './content-card'
import { Button } from '@/components/ui/button'

interface ContentRowProps {
  title: string
  content: Content[]
  onContentClick?: (content: Content) => void
}

const ContentRow = ({ title, content, onContentClick }: ContentRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust scroll distance as needed
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  if (!content || content.length === 0) {
    return null
  }

  return (
    <div className="mb-8">
      {/* Row Title */}
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-8">
        {title}
      </h2>

      {/* Content Container */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <Button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white border-none rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          variant="outline"
        >
          <span className="text-lg">‹</span>
        </Button>

        {/* Right Scroll Button */}
        <Button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white border-none rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          variant="outline"
        >
          <span className="text-lg">›</span>
        </Button>

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-3 px-4 md:px-8 pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {content.map((item) => (
            <ContentCard
              key={item.id}
              content={item}
              onClick={onContentClick}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default ContentRow