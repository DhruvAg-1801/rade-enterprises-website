"use client"

import { motion } from "framer-motion"

const banks = [
  { name: "SBI", logo: "/banks/sbi.png" },
  { name: "HDFC", logo: "/banks/hdfc.png" },
  { name: "ICICI", logo: "/banks/icici.png" },
  { name: "Axis", logo: "/banks/axis.png" },
  { name: "Kotak", logo: "/banks/kotak.png" },
  { name: "PNB", logo: "/banks/pnb.png" },
  { name: "BOI", logo: "/banks/boi.png" },
]

export function BankPartners() {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">
            Banking Network
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Banking Partners
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            We assist clients with financing solutions through reputed banking institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {banks.map((bank, index) => (
            <motion.div
              key={bank}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
                <div className="flex flex-col items-center gap-3">
  <img
    src={bank.logo}
    alt={bank.name}
    className="w-12 h-12 object-contain"
  />

  <div className="text-sm font-semibold text-foreground">
    {bank.name}
  </div>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}