'use client'
import Head from 'next/head';
import { useState } from 'react'
import { Modal } from './OrderModalContent';
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';


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
        <link rel="icon" type="image/png" sizes="64x64" href="/Users/ruangguru/Documents/python-automation-test/pageElisa/friendly-english-talk-git/app/favicon.ico"></link>
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
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://wa.me/6281336478448"
          target="_blank"
          rel="noopener noreferrer"
          className="text-grey-500 hover:text-green-600 text-2xl"
          aria-label="WhatsApp"
        >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683925316" viewBox="0 0 1024 1024" version="1.1" pId="14972" height="38px" width="38px" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" pId="14973"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" pId="14974"></path></svg>
        </a>
        <a
          href="mailto:elisa.hidayatul02@gmail.com"
          className="text-grey-500 hover:text-red-600 text-2xl"
          aria-label="Email"
        >
          
          <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          
        </a>
        
      </div>
      <p className="mt-4">&copy; 2023 English Friendly Talk. All rights reserved.</p>
    </footer>
      </div>
    </>
  );

}