'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from 'next/navigation' // Import the hook from next/navigation

// Handle SearchParams dynamically
const SearchParamsComponent = () => {
  const searchParams = useSearchParams()
  const [packageName, setPackageName] = useState('')

  useEffect(() => {
    const pkg = searchParams.get('package')
    if (pkg) {
      setPackageName(decodeURIComponent(pkg))
    }
  }, [searchParams])

  return (
    <Input
      id="package"
      value={packageName}
      readOnly
      className="bg-purple-100 border-pink-200"
    />
  )
}

export default function OrderFormComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      const whatsappNumber = '6281336478448'
      const message = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nPaket: ${packageName}\n\nSaya tertarik dengan paket ${packageName}. Bisakah Anda memberikan informasi lebih lanjut?`)
      window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')

      // Redirect if form is valid
      router.push('/order')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="border-pink-200 focus:border-pink-400" />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-pink-200 focus:border-pink-400" />
          </div>
          <div>
            <Label htmlFor="package" className="text-gray-700">Selected Package</Label>
            <SearchParamsComponent />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300" disabled={!name || !email}>
            Submit and Chat on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
