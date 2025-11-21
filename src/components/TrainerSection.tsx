"use client"

import Button from "@/components/ui/button"
import { Award, Clock, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function TrainerSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
              <img src="/professional-fitness-trainer-coaching-smiling-conf.jpg" alt="Professional trainer" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 bg-card border-2 border-border rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <div className="text-4xl font-bold text-primary font-['var(--font-bebas)'] tracking-wider mb-1">
                15+ Years
              </div>
              <p className="text-sm text-muted-foreground">Of transforming lives through fitness</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Meet Your Coach
            </span>
            <h2 className="font-['var(--font-bebas)'] text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance mb-6">
              Elite Training For
              <span className="text-primary"> Elite Results</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              With over 15 years of experience in personal training and athletic performance, I've helped hundreds of
              clients achieve transformations they never thought possible. My approach combines science-backed training
              methods with personalized attention to create sustainable, life-changing results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Certified Expert</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    NASM-CPT, CSCS certified with specializations in strength training and nutrition
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Proven Methods</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Evidence-based training protocols that deliver consistent, measurable results
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Personal Commitment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your success is my success—I'm with you every step of your journey
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="font-semibold">
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
