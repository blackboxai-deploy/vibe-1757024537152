'use client'

import HeroSection from '@/components/hero-section'
import ContentRow from '@/components/content-row'
import { featuredContent, contentRows } from '@/lib/mock-data'
import { Content } from '@/types/content'

export default function Home() {
  const handleContentClick = (content: Content) => {
    // In a real app, this would open a modal or navigate to a detail page
    console.log('Content clicked:', content.title)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection featuredContent={featuredContent} />

      {/* Content Rows */}
      <div className="relative -mt-32 z-20">
        {contentRows.map((row) => (
          <ContentRow
            key={row.id}
            title={row.title}
            content={row.items}
            onContentClick={handleContentClick}
          />
        ))}
      </div>

      {/* More Content Sections */}
      <div className="py-12 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4 md:px-8">
          {/* Call to Action Section */}
          <div className="text-center py-16">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to watch? Enter your email to create or restart your membership.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:flex-1 bg-white/10 border border-white/30 rounded-l-lg sm:rounded-r-none rounded-r-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/50 mb-4 sm:mb-0"
              />
              <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-semibold transition-colors duration-200">
                Get Started →
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 py-16">
            <div className="text-center">
              <div className="text-6xl mb-4">📺</div>
              <h3 className="text-white text-xl font-bold mb-3">Enjoy on your TV</h3>
              <p className="text-white/70 text-sm">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-white text-xl font-bold mb-3">Watch everywhere</h3>
              <p className="text-white/70 text-sm">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-white text-xl font-bold mb-3">Create profiles for kids</h3>
              <p className="text-white/70 text-sm">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16">
            <h2 className="text-white text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "What is StreamFlix?",
                  answer: "StreamFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices."
                },
                {
                  question: "How much does StreamFlix cost?",
                  answer: "Watch StreamFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month."
                },
                {
                  question: "Can I cancel anytime?",
                  answer: "Yes! There are no contracts, no cancellation fees, and no commitments. You can cancel your account online at any time."
                },
                {
                  question: "What can I watch on StreamFlix?",
                  answer: "StreamFlix has an extensive library of feature films, documentaries, TV shows, anime, award-winning StreamFlix originals, and more."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg">
                  <button className="w-full text-left p-6 text-white hover:bg-white/5 transition-colors duration-200 flex justify-between items-center">
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="text-2xl">+</span>
                  </button>
                  <div className="px-6 pb-6 text-white/70">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}