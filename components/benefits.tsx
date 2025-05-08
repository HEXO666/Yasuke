import { Check } from "lucide-react"

const benefits = [
  {
    title: "Historical Accuracy",
    description:
      "Meticulously researched account of Yasuke's life based on primary sources and historical records from 16th century Japan.",
  },
  {
    title: "Cultural Context",
    description:
      "Deep insights into feudal Japanese society, samurai culture, and the complex racial dynamics of the era.",
  },
  {
    title: "Compelling Narrative",
    description: "Written as an engaging historical narrative that brings Yasuke's extraordinary journey to life.",
  },
  {
    title: "Exclusive Content",
    description: "Features rare illustrations, maps, and translated excerpts from Japanese records mentioning Yasuke.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider font-medium mb-4">BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why This Book Matters</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary border border-primary rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-dark/30 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
