"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

export default function MembershipsPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    program: "",
    year: "",
    membershipType: "student",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
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
    }, 1500)
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dmsa-darkGreen text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Memberships</h1>
          <p className="max-w-2xl mx-auto">
            Join the Dalhousie Muslim Student Association and become part of our community.
          </p>
        </div>
      </div>

      {/* Membership Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dmsa-darkGreen mb-12">Membership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Connect with fellow Muslim students</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Build lasting friendships</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Support network away from home</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Access</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Priority access to all DMSA events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Discounted tickets for paid events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Exclusive member-only events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Access to Islamic resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Academic and spiritual support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Mentorship opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 px-4 bg-dmsa-lightGreen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dmsa-darkGreen mb-12">Membership Types</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Student Membership</CardTitle>
                <CardDescription>For current Dalhousie students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-dmsa-darkGreen mb-4">
                  $10<span className="text-sm font-normal text-gray-500">/year</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>All membership benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Voting rights at general meetings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Eligibility for executive positions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-dmsa-green hover:bg-dmsa-darkGreen">Join as Student</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Associate Membership</CardTitle>
                <CardDescription>For faculty, staff, and community members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-dmsa-darkGreen mb-4">
                  $20<span className="text-sm font-normal text-gray-500">/year</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>All membership benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Support student activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dmsa-green mr-2 mt-0.5" />
                    <span>Community involvement</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-dmsa-green hover:bg-dmsa-darkGreen">Join as Associate</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dmsa-darkGreen mb-12">Become a Member</h2>

          <Card>
            <CardHeader>
              <CardTitle>Membership Application</CardTitle>
              <CardDescription>Fill out the form below to apply for DMSA membership.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md text-center">
                  <h3 className="font-semibold text-lg mb-2">Thank You for Joining!</h3>
                  <p className="mb-4">Your membership application has been submitted successfully.</p>
                  <p>Please check your email for payment instructions and next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
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
                    <Label htmlFor="studentId">Student ID (if applicable)</Label>
                    <Input id="studentId" name="studentId" value={formState.studentId} onChange={handleChange} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="program">Program/Faculty</Label>
                      <Select value={formState.program} onValueChange={(value) => handleSelectChange("program", value)}>
                        <SelectTrigger id="program">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="arts">Arts & Social Sciences</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="management">Management</SelectItem>
                          <SelectItem value="health">Health Professions</SelectItem>
                          <SelectItem value="medicine">Medicine</SelectItem>
                          <SelectItem value="dentistry">Dentistry</SelectItem>
                          <SelectItem value="law">Law</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="year">Year of Study</Label>
                      <Select value={formState.year} onValueChange={(value) => handleSelectChange("year", value)}>
                        <SelectTrigger id="year">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                          <SelectItem value="5+">5+ Year</SelectItem>
                          <SelectItem value="graduate">Graduate Student</SelectItem>
                          <SelectItem value="faculty">Faculty/Staff</SelectItem>
                          <SelectItem value="community">Community Member</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Membership Type</Label>
                    <RadioGroup
                      value={formState.membershipType}
                      onValueChange={(value) => handleSelectChange("membershipType", value)}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student" className="font-normal">
                          Student Membership ($10/year)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="associate" id="associate" />
                        <Label htmlFor="associate" className="font-normal">
                          Associate Membership ($20/year)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-dmsa-green hover:bg-dmsa-darkGreen"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

