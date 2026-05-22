"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "919845201301"
const WHATSAPP_MESSAGE = "Hello, I'm interested in learning more about your loan services."
const EMAIL = "rati.agarwal@radeenterprises.in"
const PHONE = "+91 9845201301"

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Personal Loan", href: "#services" },
      { label: "Home Loan", href: "#services" },
      { label: "Business Loan", href: "#services" },
      { label: "Car Loan", href: "#services" },
      { label: "Loan Against Property", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-choose" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

export function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary/50 border-t border-border/30 relative" id="contact">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary">Rade</span> Enterprises
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for all financial solutions. We provide comprehensive 
              loan assistance with personalized guidance.
            </p>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Links columns */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rade Enterprises. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
