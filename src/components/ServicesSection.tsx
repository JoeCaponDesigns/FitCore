"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Apple, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your fitness level and goals with expert guidance every step of the way.",
  },
  {
    icon: Apple,
    title: "Nutrition Planning",
    description: "Custom meal plans designed to fuel your workouts and optimize your results for maximum performance.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "High-energy group sessions that build community while pushing you to achieve more together.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Advanced metrics and regular assessments to monitor your transformation and adjust your program.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="font-['var(--font-bebas)'] text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance mb-6">
              Everything You Need To
              <span className="text-primary"> Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Comprehensive fitness solutions designed to help you reach your goals faster and maintain lasting results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
