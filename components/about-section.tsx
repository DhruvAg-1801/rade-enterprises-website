"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Users, ShieldCheck } from "lucide-react"

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5000+", label: "Happy Clients" },
  { value: "₹500Cr+", label: "Loans Disbursed" },
  { value: "20+", label: "Bank Partners" },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    description: "We maintain the highest standards of transparency in all our dealings.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "Committed to delivering the best financial solutions for our clients.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your financial success is our primary focus and motivation.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Deep knowledge of financial products and market dynamics.",
  },
]

export function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              About{" "}
              <span className="text-primary">Rade Enterprises</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Rade Enterprises is a leading financial consultancy firm dedicated to 
              providing comprehensive loan assistance and financial advisory services. 
              With years of experience in the industry, we have helped thousands of 
              individuals and businesses achieve their financial goals.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team of experienced financial consultants works closely with multiple 
              banks and financial institutions to ensure you get the best rates and 
              terms for your loan requirements. We believe in building long-term 
              relationships based on trust, transparency, and exceptional service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border/30"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
