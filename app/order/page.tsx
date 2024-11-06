'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function OrderFormComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [packageName, setPackageName] = useState('')
  const router = useRouter() // Make sure you're using it here
  const searchParams = useSearchParams()

  useEffect(() => {
    const pkg = searchParams.get('package')
    if (pkg) {
      setPackageName(decodeURIComponent(pkg))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '6281336478448'
    const message = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nPaket: ${packageName}\n\nSaya tertarik dengan paket ${packageName}. Bisakah Anda memberikan informasi lebih lanjut?`)
    window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')

    // Now, use the router to navigate to the order page (or where you need it)
    if (name && email) {  // Only redirect if the required fields are filled
      router.push('/order') // This is where you'd want to redirect the user
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200">
          <CardTitle className="text-2xl font-bold text-gray-800">Order Form</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
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
              <Input id="package" value={packageName} readOnly className="bg-purple-100 border-pink-200" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white transition-colors duration-300" disabled={!name || !email}>
            Submit and Chat on WhatsApp
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
