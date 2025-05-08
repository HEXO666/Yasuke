import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider font-medium mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">Get in Touch</h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cream border border-primary rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-dark mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/80 border-0 text-dark placeholder:text-dark/60 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/80 border-0 text-dark placeholder:text-dark/60 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-white/80 border-0 text-dark placeholder:text-dark/60 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/80 border-0 text-dark placeholder:text-dark/60 focus-visible:ring-primary min-h-[150px]"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">Send Message</Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark mb-1">Email</h4>
                  <p className="text-dark/80">contact@yasukebook.com</p>
                  <p className="text-dark/80">hexo@publisher.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark mb-1">Phone</h4>
                  <p className="text-dark/80">+1 (555) 123-4567</p>
                  <p className="text-dark/80">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark mb-1">Address</h4>
                  <p className="text-dark/80">123 History Lane</p>
                  <p className="text-dark/80">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
