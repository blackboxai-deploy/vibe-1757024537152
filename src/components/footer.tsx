import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Account', href: '/account' },
      { name: 'Media Center', href: '/media' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Preferences', href: '/cookies' },
      { name: 'Corporate Information', href: '/corporate' },
    ],
    social: [
      { name: 'Facebook', href: 'https://facebook.com', icon: 'f' },
      { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
      { name: 'Instagram', href: 'https://instagram.com', icon: '📷' },
      { name: 'YouTube', href: 'https://youtube.com', icon: '📺' },
    ]
  }

  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {footerLinks.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-white/70 text-sm mb-3">
                Stay updated with new releases
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-l px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r text-sm font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="text-red-600 font-bold text-xl">StreamFlix</div>
              <div className="text-white/60 text-sm">
                © 2024 StreamFlix, Inc. All rights reserved.
              </div>
            </div>

            {/* Service Code */}
            <div className="text-white/60 text-sm">
              Service Code: SF-001
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-white/50 text-xs leading-relaxed max-w-4xl">
            <p>
              StreamFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, 
              anime, documentaries and more on thousands of internet-connected devices. You can watch as much 
              as you want, whenever you want – all for one low monthly price. There&apos;s always something new 
              to discover and new TV shows and movies are added every week!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer