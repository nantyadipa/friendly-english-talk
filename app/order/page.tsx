'use client'

import { Suspense, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PackageQueryComponent from '@/components/PackageQueryComponent'

export default function OrderFormComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [packageName, setPackageName] = useState<string>('')

  const router = useRouter()

  const handlePackageSelect = (pkg: string) => {
    setPackageName(pkg)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && packageName) {
      const whatsappNumber = '6281336478448';
      const message = encodeURIComponent(
        `Nama: ${name}\nEmail: ${email}\nPaket: ${packageName}\n\nSaya tertarik dengan paket ${packageName}. Bisakah Anda memberikan informasi lebih lanjut?`
      );

      // Check if user is on a mobile browser
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const whatsappUrl = isMobile
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

      window.open(whatsappUrl, '_blank');
      router.push('/order');
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Form</h2>

        {/* Display the selected package name */}
        {packageName && (
          <h3 className="text-xl font-bold text-pink-600 mb-4">Selected Package: {packageName}</h3>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="border-pink-200 focus:border-pink-400" />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-pink-200 focus:border-pink-400" />
          </div>

          {/* Suspense wrapper for handling package query */}
          <Suspense fallback={<div>Loading package...</div>}>
            <PackageQueryComponent onPackageSelect={handlePackageSelect} />
          </Suspense>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300"
            disabled={!name || !email || !packageName}
          >
            Submit and Chat on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
