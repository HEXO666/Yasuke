import Image from "next/image"

const chapters = [
  {
    number: "01",
    title: "Yasuke's Name",
    description:
      "Explores the etymology of Yasuke's name, likely a Japanese rendering of a foreign origin, and early context of African names in the Indian Ocean world.",
  },
  {
    number: "02",
    title: '"Italian"',
    description:
      "Introduces Alessandro Valignano, the Jesuit overseer who brought Yasuke to Japan, and the Jesuit mission's early challenges and successes in the country.",
  },
  {
    number: "03",
    title: "Pirate Attacks",
    description:
      "Covers the hostile maritime environment and Yasuke's experience aboard dangerous voyages to Japan amid pirate-infested seas.",
  },
  {
    number: "04",
    title: "The Height of Japanese Doors, Bowing, and Musket Tactics",
    description:
      "Details Japan's warrior culture, military innovations like massed musket fire, and social customs that Yasuke had to navigate.",
  },
  {
    number: "05",
    title: "The Emperor, Ancient Nobility, and Ashikaga Shoguns",
    description:
      "Contextualizes Japan's fractured political landscape as Yasuke arrives, with rival warlords and ancient aristocrats vying for control.",
  },
  {
    number: "06",
    title: "The Practice of Collecting Heads, The Shigeshoshi",
    description:
      "Explains gruesome samurai traditions like head-taking in battle and how Yasuke would have witnessed and perhaps participated in these rituals.",
  },
  {
    number: "07",
    title: "Tokugawa Ieyasu, the Sycophant",
    description: "Introduces Tokugawa Ieyasu's rise and his shrewd maneuvering in Japan's shifting power struggles.",
  },
  {
    number: "08",
    title: "Nobunaga's Head and Legacy",
    description:
      "Covers the aftermath of Nobunaga's assassination at Honnō-ji and the lingering legends surrounding his remains and Yasuke's fate.",
  },
  {
    number: "09",
    title: "Catholic Persecution",
    description:
      "Details the eventual backlash against the Jesuits and Christians in Japan, and the suppression of foreign influence after Nobunaga's death.",
  },

]

export default function Chapters() {
  return (
    <section id="chapters" className="py-20 bg-stone-950 text-stone-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase tracking-wider font-medium mb-4">CHAPTERS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 mb-6">What You'll Discover</h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-700 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-stone-950 border border-red-700 rotate-45"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="samuraiLand.jpg"
                alt="Feudal Japan Landscape"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-stone-200 text-lg font-serif italic">
                  "The extraordinary tale of history's most famous African samurai"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden hover:border-red-900/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-red-600 font-serif font-bold border border-stone-700 group-hover:border-red-900 transition-colors">
                    {chapter.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-red-500 mb-2 group-hover:text-red-400 transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-stone-400 group-hover:text-stone-300 transition-colors">{chapter.description}</p>
                  </div>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-red-900/0 via-red-900 to-red-900/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
