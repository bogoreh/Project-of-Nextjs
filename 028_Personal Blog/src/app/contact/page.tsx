'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      
      <div className="bg-white dark:bg-bg-secondary rounded-2xl p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary-color/10 flex items-center justify-center mr-3">
                ✉️
              </div>
              <span>hello@example.com</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary-color/10 flex items-center justify-center mr-3">
                🐦
              </div>
              <span>@yourusername</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}