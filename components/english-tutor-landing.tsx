'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EnglishTutorLanding() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const router = useRouter()

  const packages = [
    {
      title: "PRIMARY ENGLISH",
      features: [
        "Grammar",
        "Conversation",
        "Handout and Practice"
      ],
      price: "Rp 800.000/8 Meetings"
    },
    {
      title: "TOEFL/IELTS",
      features: [
        "TOEFL and IELTS Preparation",
        "Listening, structure, Reading and Writing",
        "Speaking for IELTS"
      ],
      price: "Rp 1.000.000/8 Meetings"
    },
    {
      title: "Kelas SMP Online",
      features: [
        "Dasar bahasa inggris",
        "Latihan soal",
        "Bimbingan PR dan tugas sekolah",
        "Persiapan ASPD",
        "8 Pertemuan dalam 1 bulan",
        "60 menit tiap pertemuan"
      ],
      price: "Rp 560.000/bulan"
    },
    {
      title: "Kelas SMA Online",
      features: [
        "Dasar bahasa inggris",
        "Latihan soal",
        "Bimbingan PR dan tugas sekolah",
        "Persiapan ASPD",
        "8 Pertemuan dalam 1 bulan",
        "60 menit tiap pertemuan"
      ],
      price: "Rp 640.000/bulan"
    },
    {
      title: "Kelas speaking bersama teman - teman",
      features: [
        "Kelas latihan speaking bersama teman - teman sebaya",
        "Minimal 4 siswa per-pertemuan",
        "60 menit tiap pertemuan"
      ],
      price: "Rp 20.000/pertemuan"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '6281336478448'
    const message = encodeURIComponent(`Nama: ${name}\nNomor Telepon: ${phone}\nSaya tertarik dengan kursus Bahasa Inggris Anda.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">English Tutoring with Elisa</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Unlock your English potential with personalized tutoring tailored to your needs and goals.
        </p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">ENGLISH PRICE LIST</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className="bg-white border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200">
                <CardTitle className="text-2xl font-bold text-gray-800">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-pink-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-pink-600 mb-4">{pkg.price}</p>
                <Button 
                  onClick={() => router.push(`/order?package=${encodeURIComponent(pkg.title)}`)}
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300"
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="border-pink-200 focus:border-pink-400" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border-pink-200 focus:border-pink-400" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300">
              Chat on WhatsApp
            </Button>
          </form>
        </div>
      </main>
      <footer className="text-center py-8 text-gray-700">
        <p>Contact Us</p>
        <p>081-33-647-8448</p>
        <p>elisa.hidayatul02@gmail.com</p>
        <p>&copy; 2023 English Tutoring with Elisa. All rights reserved.</p>
      </footer>
    </div>
  )
}