"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, User, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { subscribeUser } from "@/actions/subscribe"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      console.log("Submitting form data:", formData)
      const result = await subscribeUser(formData)
      console.log("Subscription result:", result)

      if (result.success) {
        setMessage({ type: "success", text: "Thank you for subscribing! You'll receive our latest bulletins." })
        setFormData({ name: "", email: "", institution: "" })
        setTimeout(() => {
          onClose()
          setMessage(null)
        }, 2000)
      } else {
        setMessage({ type: "error", text: result.error || "Something went wrong. Please try again." })
      }
    } catch (error) {
      console.error("Subscription error:", error)
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? `Error: ${error.message}`
            : "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Subscribe to IBC Navigator</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Get exclusive access to our premium bulletins, strategic insights, and policy analysis delivered directly to
            your inbox.
          </p>

          {message && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                Institution/Organization
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your institution or organization"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 rounded-lg"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" variant="destructive" className="flex-1 rounded-lg" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By subscribing, you agree to receive our newsletter and can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}
