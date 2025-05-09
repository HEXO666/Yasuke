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
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jsh6xnbkfyjtb7m32167v9tr%2Fimg_0.webp?st=2025-05-09T09%3A17%3A41Z&se=2025-05-15T10%3A17%3A41Z&sks=b&skt=2025-05-09T09%3A17%3A41Z&ske=2025-05-15T10%3A17%3A41Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nf%2Fw0IrmjJWyqxQJzlIVjMUsJq6OdZ%2FUDPZAknXbquo%3D&az=oaivgprodscus"
                  alt="HEXO - Author"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-2">HEXO (UNKOWN)</h3>
            <p className="text-primary font-medium mb-6">Historian & Historical Fiction Author</p>
            <p className="text-dark/80 mb-6">
            HEXO is a respected historian known for their expertise in cross-cultural encounters during feudal Japan. With an academic foundation in East Asian studies and African history, HEXO offers a distinct and insightful perspective on the extraordinary life of Yasuke.


            </p>
            <p className="text-dark/80 mb-8">
            Through extensive research conducted across archives in Japan, Portugal, and several African nations, HEXO has produced what is considered the most comprehensive account of Yasuke's life to date. Their work carefully distinguishes historical fact from myth, all while weaving a compelling narrative that pays tribute to this remarkable figure from history.
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
