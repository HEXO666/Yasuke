import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Author() {
  return (
    <section id="author" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider font-medium mb-4">AUTHOR</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">About the Author</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cream border border-primary rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 rounded-full"></div>
              <div className="relative z-10 bg-white p-2 rounded-full shadow-lg">
                <Image
                  src="/author-hexo.png"
                  alt="HEXO - Author"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-2">HEXO</h3>
            <p className="text-primary font-medium mb-6">Historian & Historical Fiction Author</p>
            <p className="text-dark/80 mb-6">
              HEXO is a renowned historian specializing in cross-cultural encounters in feudal Japan. With a background
              in East Asian studies and African history, HEXO brings a unique perspective to the extraordinary story of
              Yasuke.
            </p>
            <p className="text-dark/80 mb-8">
              After years of research in archives across Japan, Portugal, and various African countries, HEXO has
              compiled the most comprehensive account of Yasuke's life to date, separating historical fact from legend
              while crafting an engaging narrative that honors this remarkable historical figure.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
