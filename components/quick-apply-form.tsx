"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const loanTypes = [
  { value: "personal", label: "Personal Loan" },
  { value: "home", label: "Home Loan" },
  { value: "business", label: "Business Loan" },
  { value: "car", label: "Car Loan" },
  { value: "property", label: "Loan Against Property" },

  { value: "working_capital", label: "Working Capital (OD / CC)" },
  { value: "cgtmse", label: "CGTMSE Loan" },
  { value: "machinery", label: "Machinery Purchase Loan" },
  { value: "lrd", label: "LRD - Lease Rental Discounting" },
]

export function QuickApplyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  loanType: "",
})

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      "rade_gmail",
      "template_s1yx9dl",
      {
        name: formData.name,
        phone: formData.phone,
        loanType: formData.loanType,
      },
      "y0fTAEJTXkOA1dvT6"
    )

    setIsSubmitted(true)

    setFormData({
      name: "",
      phone: "",
      loanType: "",
    })
  } catch (error) {
    console.error(error)
    alert("Failed to send enquiry.")
  }

  setIsSubmitting(false)
}

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" id="apply">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quick Apply
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Fill in your details and our team will contact you within 24 hours 
              with the best loan options for your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-8 w-16 h-px bg-primary/50" />
            <div className="absolute top-0 left-0 w-px h-16 bg-primary/50" />
            <div className="absolute bottom-0 right-8 w-16 h-px bg-primary/50" />
            <div className="absolute bottom-0 right-0 w-px h-16 bg-primary/50" />

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Application Submitted!
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for your interest. Our team will review your application 
                  and contact you shortly with the best loan options.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Application
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">
        Full Name
      </label>

      <Input
        required
        placeholder="Enter your full name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
      />
    </div>

    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">
        Phone Number
      </label>

      <Input
        required
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        className="bg-secondary/50 border-border/50 focus:border-primary h-12"
      />
    </div>

  </div>

  <div className="space-y-2">
    <label className="text-sm font-medium text-foreground">
      Loan Type
    </label>

    <Select
      required
      onValueChange={(value) =>
        setFormData({
          ...formData,
          loanType: value,
        })
      }
    >
      <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary h-12">
        <SelectValue placeholder="Select loan type" />
      </SelectTrigger>

      <SelectContent>
        {loanTypes.map((type) => (
          <SelectItem
            key={type.value}
            value={type.value}
          >
            {type.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

  <Button
    type="submit"
    size="lg"
    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-semibold"
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      <span className="flex items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>

        Submitting...
      </span>
    ) : (
      <>
        Submit Application
        <Send className="ml-2 h-5 w-5" />
      </>
    )}
  </Button>

  <p className="text-xs text-muted-foreground text-center mt-4">
    By submitting this form, you agree to be contacted by our team
    regarding your loan inquiry.
  </p>
</form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
