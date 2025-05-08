import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/#home" className="text-2xl font-serif text-primary font-medium mb-4 inline-block">
              Yasuke
            </Link>
            <p className="text-white/70 mb-6">
              Discover the extraordinary true story of history's first foreign-born samurai and his rise from slave to
              warrior in feudal Japan.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Benefits", "Chapters", "Pricing", "Author", "Achievements", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Historical Notes", "Bibliography", "Timeline", "Maps", "Glossary", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to get updates on new releases and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-secondary/50 border border-white/20 text-white placeholder:text-white/60 px-4 py-2 rounded-l-md focus:outline-none focus:border-primary flex-1"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} HEXO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
