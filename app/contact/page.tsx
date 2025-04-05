"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-darkGreen text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions, suggestions, or feedback.
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-dmsa-darkGreen mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-dmsa-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-700">
                      Student Union Building, Room 315
                      <br />
                      Dalhousie University
                      <br />
                      6136 University Avenue
                      <br />
                      Halifax, NS B3H 4R2
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-dmsa-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-700">
                      <a href="mailto:dmsa@dal.ca" className="hover:text-dmsa-green">
                        dmsa@dal.ca
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-dmsa-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-700">
                      <a href="tel:+19024941234" className="hover:text-dmsa-green">
                        (902) 494-1234
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dmsa-lightGreen p-3 rounded-full hover:bg-dmsa-green hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dmsa-lightGreen p-3 rounded-full hover:bg-dmsa-green hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dmsa-lightGreen p-3 rounded-full hover:bg-dmsa-green hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 10:00 AM - 4:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                      <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                      <p>Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-dmsa-green hover:bg-dmsa-darkGreen"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-dmsa-lightGreen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-dmsa-darkGreen mb-8">Find Us on Campus</h2>
          <div className="h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

