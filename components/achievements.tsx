import { Award, Users, BookOpen, Star } from "lucide-react"

const achievements = [
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    number: "1",
    label: "International Bestseller",
    plus: false,
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    number: "75K",
    label: "Copies Sold",
    plus: true,
  },
  {
    icon: <Star className="w-10 h-10 text-primary" />,
    number: "4.9",
    label: "Average Rating",
    plus: false,
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    number: "3",
    label: "Literary Awards",
    plus: false,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider font-medium mb-4">ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Recognition & Impact</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary border border-primary rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                {achievement.number}
                {achievement.plus && "+"}
              </h3>
              <p className="text-white/70">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
