"use client"

import Button from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const transformations = [
  {
    name: "Sarah Johnson",
    result: "Lost 35lbs in 4 months",
    image: "/fit-woman-athlete-smiling-confident-portrait.jpg",
  },
  {
    name: "Mike Chen",
    result: "Gained 20lbs muscle",
    image: "/muscular-athletic-man-workout-gym-portrait.jpg",
  },
  {
    name: "Emma Davis",
    result: "Completed first marathon",
    image: "/athletic-woman-runner-stretching-outdoors-confiden.jpg",
  },
]

export default function TransformationSection() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
              Real Results
            </span>
            <h2 className="font-['var(--font-bebas)'] text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance mb-6">
              Proven
              <span className="text-primary"> Transformations</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              See how our clients have transformed their bodies and lives with our expert training programs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={transformation.image || "/placeholder.svg"}
                alt={transformation.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-bold text-xl mb-1 text-foreground">{transformation.name}</h3>
                <p className="text-accent font-semibold">{transformation.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="font-semibold group bg-transparent">
            View All Success Stories
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
