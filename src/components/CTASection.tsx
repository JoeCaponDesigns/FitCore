"use client"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-secondary/10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Ready to Transform?
          </span>
          <h2 className="font-['var(--font-bebas)'] text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance mb-6">
            Start Your Fitness
            <br />
            <span className="text-primary">Journey Today</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Join hundreds of satisfied clients who have transformed their lives. Get your free consultation and custom
            training plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <Input type="email" placeholder="Enter your email" className="h-14 text-base" />
            <Button size="lg" className="h-14 font-semibold whitespace-nowrap group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">No credit card required • Free 7-day trial • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}
