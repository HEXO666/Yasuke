import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              <span className="text-primary">YASUKE:</span> The Legendary Black Samurai
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Discover the extraordinary true story of history's first foreign-born samurai and his rise from slave to
              warrior in feudal Japan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md">Buy Now</Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-md"
              >
                Read Sample
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-dark flex items-center justify-center text-white">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-dark flex items-center justify-center text-white">
                  KL
                </div>
                <div className="w-10 h-10 rounded-full bg-primary border-2 border-dark flex items-center justify-center text-white">
                  MN
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#f2613f"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-semibold">4.9/5</span> from 1,800+ reviews
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 rounded-lg"></div>
              <div className="relative z-10 bg-dark/50 p-4 rounded-lg shadow-lg">
                <Image
                  src="/yasuke-cover.png"
                  alt="Yasuke: The Black Samurai Book Cover"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
