import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    company: "TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "DevAI Suite has transformed how our team writes code. The AI assistant catches bugs before they even happen, and the code review feature has improved our code quality dramatically.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Manager",
    company: "StartupXYZ",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The rapid prototyping feature is incredible. What used to take days now takes hours. Our development velocity has increased by 300% since adopting DevAI Suite.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Full Stack Developer",
    company: "InnovateLab",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The automation framework has eliminated so much manual work. Testing, deployment, and documentation happen automatically. I can focus on what I love - building great products.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "ScaleUp Inc",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "DevAI Suite is not just a tool, it's a game-changer. Our team productivity has skyrocketed, and the quality of our code has never been better. Highly recommended!",
    rating: 5,
  },
]

const companies = [
  { name: "TechCorp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=40&width=120" },
  { name: "ScaleUp Inc", logo: "/placeholder.svg?height=40&width=120" },
  { name: "DevStudio", logo: "/placeholder.svg?height=40&width=120" },
  { name: "CodeCraft", logo: "/placeholder.svg?height=40&width=120" },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Trusted by developers at leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="h-10 w-30 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">50,000+ Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what developers around the world are saying about DevAI Suite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
