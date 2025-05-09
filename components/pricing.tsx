'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const pricingOptions = [
  {
    title: "E-Book",
    price: "$12",
    features: ["Complete Digital Book", "PDF and EPUB Formats", "Interactive Maps", "Digital Illustrations"],
    highlighted: false,
  },
  // {
  //   title: "Bundle",
  //   price: "$25",
  //   features: ["E-Book + Audiobook", "Exclusive Author Commentary", "Historical Timeline PDF", "Access to Updates"],
  //   highlighted: true,
  // },
  // {
  //   title: "Hardcover",
  //   price: "$35",
  //   features: ["Premium Hardcover Edition", "E-Book Included", "Signed Bookplate", "Exclusive Art Prints"],
  //   highlighted: false,
  // },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider font-medium mb-4">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Choose Your Edition</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-dark border border-primary rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center">          
          {pricingOptions.map((option, index) => (
              <Card
              key={index}
              className={`w-[400px] bg-secondary/50 border-0 shadow-sm relative overflow-hidden ${option.highlighted ? "shadow-md" : ""}`}
            >
              {option.highlighted && <div className="absolute top-0 right-0 bottom-0 w-1 bg-primary"></div>}
              <CardHeader className="pt-10 pb-6">
                <h3 className="text-3xl font-serif text-white">{option.title}</h3>
                <p className="text-5xl font-serif text-white font-medium mt-6">{option.price}</p>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80 text-lg">
                {option.features.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </CardContent>
              <CardFooter className="pb-10">
              <Button
  onClick={() => window.open("https://gumroad.com/checkout?_gl=1*1xe9ccn*_ga*MTEyMDk0MzA3OS4xNzQ2NzE0NjA2*_ga_6LJN6D94N6*czE3NDY3ODU3NDkkbzIkZzEkdDE3NDY3ODU4MjkkajAkbDAkaDA", "_blank")}
  className={
    option.highlighted
      ? "w-full bg-primary hover:bg-primary/90 text-white text-lg py-3"
      : "w-full bg-secondary/50 border border-white/20 text-white hover:bg-primary hover:text-white text-lg py-3"
  }
>
  BUY NOW
</Button>


              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
