// components/PackageQueryComponent.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface PackageQueryComponentProps {
  onPackageSelect: (pkg: string) => void
}

export default function PackageQueryComponent({ onPackageSelect }: PackageQueryComponentProps) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const packageQuery = searchParams.get('package')
    if (packageQuery) {
      onPackageSelect(packageQuery)
    }
  }, [searchParams, onPackageSelect])

  return null
}
