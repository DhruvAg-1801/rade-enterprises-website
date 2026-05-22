"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
    email: "",
    city: "",
    loanType: "",
    amount: "",
    occupation: "",
    income: "",
    notes: "",
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
          email: formData.email,
          city: formData.city,
          loanType: formData.loanType,
          amount: formData.amount,
          occupation: formData.occupation,
          income: formData.income,
          notes: formData.notes,
        },
        "y0fTAEJTXkOA1dvT6"
      )

      setIsSubmitted(true)

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        loanType: "",
        amount: "",
        occupation: "",
        income: "",
        notes: "",
      })
    } catch (error) {
      console.error(error)
      alert("Failed to send enquiry.")
    }

    setIsSubmitting(false)
  }

  return (
    <section
      className="py-24 bg-secondary/30 relative overflow-hidden"
      id="apply"
    >
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

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quick Apply
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Fill in your details and our team will contact you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-card border border-border/50"
          >

            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">
                  Application Submitted!
                </h3>
                <p className="text-muted-foreground">
                  Our team will contact you shortly.
                </p>

                <Button
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <Input
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />

                  <Input
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Loan Amount"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        amount: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Occupation / Business"
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        occupation: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Monthly Income / Turnover"
                    value={formData.income}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        income: e.target.value,
                      })
                    }
                  />

                  <Select
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        loanType: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Loan Type" />
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

                <Textarea
                  placeholder="Requirement / Notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notes: e.target.value,
                    })
                  }
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  )
}