'use client'
import Head from 'next/head';
import { useState } from 'react'
import { Modal } from './OrderModalContent';
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EnglishTutorLanding() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const packages = [
    {
      title: "PRIMARY ENGLISH",
      features: ["Grammar", "Conversation", "Handout and Practice"],
      price: "Rp 800.000/8 Meetings"
    },
    {
      title: "TOEFL/IELTS",
      features: ["TOEFL and IELTS Preparation", "Listening, structure, Reading and Writing", "Speaking for IELTS"],
      price: "Rp 1.000.000/8 Meetings"
    },
    {
      title: "Kelas SMP Online",
      features: ["Dasar bahasa inggris", "Latihan soal", "Bimbingan PR dan tugas sekolah", "Persiapan ASPD", "8 Pertemuan dalam 1 bulan", "60 menit tiap pertemuan"],
      price: "Rp 560.000/bulan"
    },
    {
      title: "Kelas SMA Online",
      features: ["Dasar bahasa inggris", "Latihan soal", "Bimbingan PR dan tugas sekolah", "Persiapan ASPD", "8 Pertemuan dalam 1 bulan", "60 menit tiap pertemuan"],
      price: "Rp 640.000/bulan"
    },
    {
      title: "Speaking class with friends",
      features: ["Kelas latihan speaking bersama teman - teman sebaya", "Minimal 4 siswa per-pertemuan", "60 menit tiap pertemuan"],
      price: "Rp 20.000/pertemuan"
    }
  ];

  const handleOrderClick = (pkgTitle: string) => {
    setSelectedPackage(pkgTitle);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '6281336478448';
    const message = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nSaya tertarik dengan kursus Bahasa Inggris Anda.`
    );

    const whatsappUrl = navigator.userAgent.includes('Mobi')
      ? `https://wa.me/${whatsappNumber}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  
    return (
      <>
        {/* Set page title */}
        <Head>
          <title>Friendly English Talk</title>
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
          <header className="py-12 text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">ENGLISH FRIENDLY TALK</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Unlock your English potential with personalized tutoring tailored to your needs and goals.
            </p>
          </header>
          <main className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">ENGLISH PRICE LIST</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-white border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200">
                    <CardTitle className="text-2xl font-bold text-gray-800">{pkg.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
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
                  </CardContent>
                  <div className="p-4 mt-auto text-center">
                    <p className="text-2xl font-bold text-pink-600 mb-4">{pkg.price}</p>
                    <Button
                      onClick={() => handleOrderClick(pkg.title)}
                      className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300"
                    >
                      Pesan Sekarang
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="p-6">
                <h2 className="text-2L font-bold text-pink-600 mb-4">
                  Package: {selectedPackage}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-pink-200 focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-pink-200 focus:border-pink-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={!name || !email}
                    className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300"
                  >
                    Chat on WhatsApp
                  </Button>
                </form>
              </div>
            </Modal>
          </main>
          <footer className="text-center py-8 text-gray-700">
            <p>Contact Us</p>
            <p>081-33-647-8448</p>
            <p>elisa.hidayatul02@gmail.com</p>
            <p>&copy; 2023 English Friendly Talk. All rights reserved.</p>
          </footer>
        </div>
      </>
    );
  
}