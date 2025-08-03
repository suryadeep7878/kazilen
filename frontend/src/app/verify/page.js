'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function VerifyOtpPage() {
  const router = useRouter()
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
  const [seconds, setSeconds] = useState(30)
  const [resendEnabled, setResendEnabled] = useState(false)
  const inputRefs = useRef([])

  const handleBack = () => router.back()

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return
    const updated = [...otpDigits]
    updated[index] = value
    setOtpDigits(updated)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    const fullOtp = otpDigits.join('')
    if (fullOtp.length !== 6) {
      alert('Enter a valid 6-digit OTP')
      return
    }

    // ✅ Mock OTP verification
    if (fullOtp === '123456') {
      router.push('/') // Go to home page
    } else {
      alert('Incorrect OTP. Please try again.')
    }
  }

  const handleResend = () => {
    if (resendEnabled) {
      alert('Resending OTP...')
      setSeconds(30)
      setResendEnabled(false)
      setOtpDigits(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    }
  }

  useEffect(() => {
    if (seconds <= 0) {
      setResendEnabled(true)
      return
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds])

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60)
    const rem = sec % 60
    return `${min.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-white px-6 py-4">
      {/* Back Button */}
      <button onClick={handleBack} className="mb-4">
        <ArrowLeft size={28} />
      </button>

      <h1 className="text-2xl font-bold mb-1">Verify OTP</h1>
      <p className="text-sm text-gray-700 mb-6">
        An OTP has already been sent to your mobile number, please use the same.
        To resend OTP, please wait for 30 seconds.
      </p>

      {/* OTP Boxes */}
      <div className="flex justify-between gap-2 mb-6">
        {otpDigits.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => (inputRefs.current[idx] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="w-12 h-12 border border-black rounded-md text-center text-lg font-semibold tracking-wider"
          />
        ))}
      </div>

      {/* Resend + Timer */}
      <div className="flex justify-between items-center text-sm mt-2">
        <span>
          Did not get OTP?{' '}
          <button
            disabled={!resendEnabled}
            onClick={handleResend}
            className={`font-medium ${
              resendEnabled ? 'text-blue-600 underline' : 'text-gray-400'
            }`}
          >
            Resend
          </button>
        </span>
        <span className="font-mono">{formatTime(seconds)}</span>
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        className="w-full mt-6 bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
      >
        Verify
      </button>
    </div>
  )
}
