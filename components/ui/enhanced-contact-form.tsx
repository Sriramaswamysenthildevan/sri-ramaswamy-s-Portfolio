"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:sriramaswamyworks@gmail.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      // Simulate processing time for better UX
      setTimeout(() => {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setErrors({})
      }, 1500)
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("error")
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center"
            >
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Email Client Opened!</h3>
            <p className="text-muted-foreground mb-4">
              Your email client should now be open with the message pre-filled. Please send the email to complete your
              message.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-4">
              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={cn(
                    "bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300",
                    errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  disabled={status === "loading"}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={cn(
                    "bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300",
                    errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  disabled={status === "loading"}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className={cn(
                    "bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300",
                    errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  disabled={status === "loading"}
                />
                <AnimatePresence>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={cn(
                    "bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none",
                    errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  disabled={status === "loading"}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {status === "loading" ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Opening Email Client...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
