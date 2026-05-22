"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, Building, Landmark, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Landmark,
    title: "Personal Loan",
    description: "Quick personal loans for your immediate financial needs with competitive interest rates.",
    features: ["Minimal documentation", "Quick approval", "Flexible tenure"],
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with our affordable home loan solutions.",
    features: ["Low interest rates", "Long tenure options", "Tax benefits"],
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with customized financing solutions.",
    features: ["Working capital", "Equipment financing", "Business expansion"],
  },
  {
    icon: Building,
    title: "Loan Against Property",
    description: "Unlock the value of your property with our mortgage solutions.",
    features: ["High loan value", "Lower interest", "Multi-purpose use"],
  },

  {
    icon: Briefcase,
    title: "Working Capital - OD/CC",
    description: "Flexible overdraft facilities to support day-to-day business operations and cash flow.",
    features: ["Cash flow support", "Flexible withdrawal", "Business continuity"],
  },

  {
    icon: Landmark,
    title: "CGTMSE Loan",
    description: "Collateral-free business financing supported under CGTMSE schemes for MSMEs.",
    features: ["Collateral free", "MSME support", "Government backed"],
  },

  {
    icon: Building,
    title: "Machinery Purchase",
    description: "Finance machinery and equipment purchases to expand or modernize operations.",
    features: ["Equipment funding", "Business expansion", "Flexible repayment"],
  },

  {
    icon: Home,
    title: "LRD - Lease Rental Discounting",
    description: "Unlock value from leased commercial properties through rental-backed financing.",
    features: ["Rental income backed", "Commercial property", "Structured finance"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Loan Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive financial services tailored to meet your every need with 
            competitive rates and flexible terms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 group/btn"
                  onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
