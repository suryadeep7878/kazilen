'use client'

import { MapPin, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'

export default function Header() {
  const router = useRouter()

  const openAddress = () => {
    // Replace this with your address selection logic
    router.push('./select-address')
  }

  const openProfile = () => {
    // Replace this with your profile logic
    router.push('./profile')
  }

  return (
    <div className="px-4 py-3 bg-white shadow-sm flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <button onClick={openAddress} className="text-left">
          <div className="flex items-center text-sm font-medium text-gray-700">
            <MapPin size={16} className="text-red-500 mr-1" />
            Hotel
            <ChevronDown size={14} className="ml-1 text-gray-600" />
          </div>
          <p className="text-xs text-gray-400 leading-tight">
            308, 3 Floor, Hotel Sunshine INN, Sadar, Nagpur
          </p>
        </button>

        <button
          onClick={openProfile}
          className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold"
        >
          B
        </button>
      </div>

      <SearchBar />
    </div>
  )
}
