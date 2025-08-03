'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  const handleContinue = () => {
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit mobile number')
      return
    }

    alert(`Continue with mobile: ${phone}`)
    router.push('/verify')
  }

  const handlePhoneInput = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '')
    if (digitsOnly.length <= 10) {
      setPhone(digitsOnly)
    }
  }

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showModal])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-white relative">
      <h1 className="text-3xl font-bold mb-2">Kazilen</h1>

      <div className="mt-4 w-full max-w-sm">
        <p className="text-sm font-semibold text-black mb-4">
          Login <span className="text-gray-600">or Create Account</span>
        </p>

        <label className="block text-sm text-black mb-1">Enter mobile number</label>
        <input
          type="tel"
          placeholder="9876543210"
          value={phone}
          onChange={handlePhoneInput}
          className="w-full px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm mb-4"
        />

        <button
          onClick={handleContinue}
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
        >
          Continue
        </button>
      </div>

      <p className="text-[11px] text-center text-gray-600 mt-4">
        By continuing, I agree to{' '}
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-600 underline"
        >
          Terms of Service
        </button>
      </p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center">
          <div
            ref={modalRef}
            className="bg-white rounded-xl max-w-md w-[90%] p-6 shadow-xl relative"
          >
            <h2 className="text-lg font-bold mb-3">Terms of Service</h2>
            <div className="text-sm text-gray-700 max-h-[300px] overflow-y-auto">
              <p>
                This is a placeholder for the Terms of Service. Replace this text with your actual terms and conditions...
              </p>
            </div>
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-sm"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
