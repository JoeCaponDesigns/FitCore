"use client"

import  Button  from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="athletic-person-working-out-in-modern-gym-with-dra.jpg" alt="Fitness training" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">Transform Your Life Today</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['var(--font-bebas)'] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-balance mb-6"
          >
            Unlock Your
            <br />
            <span className="text-primary">Peak Performance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            Expert personal training designed to push your limits and transform your body. Get customized workout plans,
            nutrition guidance, and the motivation you need to succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-base font-semibold group">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold group bg-transparent">
              <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              Watch Success Stories
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50"
          >
            <div>
              <div className="text-3xl font-bold text-primary font-['var(--font-bebas)'] tracking-wider">500+</div>
              <div className="text-sm text-muted-foreground">Clients Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-['var(--font-bebas)'] tracking-wider">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-['var(--font-bebas)'] tracking-wider">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  )
}
