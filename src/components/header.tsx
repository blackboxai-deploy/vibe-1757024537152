'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Movies', href: '/movies' },
    { name: 'TV Shows', href: '/tv-shows' },
    { name: 'New & Popular', href: '/new' },
    { name: 'My List', href: '/my-list' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-red-600 font-bold text-2xl">
              StreamFlix
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search movies, TV shows..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-white/40"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) {
                        setIsSearchOpen(false)
                      }
                    }}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery('')
                    }}
                    className="ml-2 text-white hover:text-gray-300"
                  >
                    ✕
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-gray-300 text-lg"
                >
                  🔍
                </Button>
              )}
            </div>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-gray-300 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-sm font-semibold">
                    U
                  </div>
                  <span className="text-sm">▼</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-black/90 backdrop-blur border-white/10">
                <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10">
                  👤 Manage Profiles
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10">
                  ⚙️ Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10">
                  ❓ Help Center
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10">
                  🚪 Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu (simplified) */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-gray-300">
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                      <div className="w-4 h-0.5 bg-white mb-1"></div>
                      <div className="w-4 h-0.5 bg-white mb-1"></div>
                      <div className="w-4 h-0.5 bg-white"></div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/90 backdrop-blur border-white/10">
                  {navigationItems.map((item) => (
                    <DropdownMenuItem key={item.name} className="text-white hover:bg-white/10 focus:bg-white/10">
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header