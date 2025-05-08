import Image from "next/image"

const chapters = [
  {
    number: "01",
    title: "Yasuke’s Name",
    description: "Explores the etymology of Yasuke's name, likely a Japanese rendering of a foreign origin, and early context of African names in the Indian Ocean world.",
  },
  {
    number: "02",
    title: "“Italian”",
    description: "Introduces Alessandro Valignano, the Jesuit overseer who brought Yasuke to Japan, and the Jesuit mission’s early challenges and successes in the country.",
  },
  {
    number: "03",
    title: "Pirate Attacks",
    description: "Covers the hostile maritime environment and Yasuke's experience aboard dangerous voyages to Japan amid pirate-infested seas.",
  },
  {
    number: "04",
    title: "The Height of Japanese Doors, Bowing, and Musket Tactics",
    description: "Details Japan’s warrior culture, military innovations like massed musket fire, and social customs that Yasuke had to navigate.",
  },
  {
    number: "05",
    title: "The Emperor, Ancient Nobility, and Ashikaga Shoguns",
    description: "Contextualizes Japan's fractured political landscape as Yasuke arrives, with rival warlords and ancient aristocrats vying for control.",
  },
  {
    number: "06",
    title: "The Practice of Collecting Heads, The Shigeshoshi",
    description: "Explains gruesome samurai traditions like head-taking in battle and how Yasuke would have witnessed and perhaps participated in these rituals.",
  },
  {
    number: "07",
    title: "Tokugawa Ieyasu, the Sycophant",
    description: "Introduces Tokugawa Ieyasu’s rise and his shrewd maneuvering in Japan’s shifting power struggles.",
  },
  {
    number: "08",
    title: "Nobunaga’s Head and Legacy",
    description: "Covers the aftermath of Nobunaga’s assassination at Honnō-ji and the lingering legends surrounding his remains and Yasuke’s fate.",
  },
  {
    number: "09",
    title: "Catholic Persecution",
    description: "Details the eventual backlash against the Jesuits and Christians in Japan, and the suppression of foreign influence after Nobunaga’s death.",
  },
  {
    number: "10",
    title: "Manga and Anime",
    description: "Examines Yasuke’s surprising rebirth in Japanese pop culture, video games, and modern media.",
  },
];


export default function Chapters() {
  return (
    <section id="chapters" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider font-medium mb-4">CHAPTERS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">What You'll Discover</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cream border border-primary rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-primary/20 rounded-lg"></div>
              <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src="samuraiLand.jpg"
                  alt="Feudal Japan Landscape"
                  width={500}
                  height={700}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {chapters.map((chapter, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold">
                  {chapter.number}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-dark mb-2">{chapter.title}</h3>
                  <p className="text-dark/70">{chapter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
