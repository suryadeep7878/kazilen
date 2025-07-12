'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = [
  { name: 'All', image: '/categories/all.png' },
  { name: 'Biryani', image: '/categories/biryani.png' },
  { name: 'Pizza', image: '/categories/pizza.png' },
  { name: 'Thali', image: '/categories/thali.png' },
  { name: 'Panner', image: '/categories/thali2.png' },
]

export default function CategoryTabs() {
  const [active, setActive] = useState('All')

  return (
    <div className="overflow-x-auto px-3 mt-3">
      <div className="flex gap-5">
        {categories.map((category, index) => {
          const isActive = active === category.name

          return (
            <div
              key={index}
              onClick={() => setActive(category.name)}
              className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'border-b-4 border-pink-500 shadow-md rounded-md bg-pink-50 pb-1'
                  : 'pb-1'
              }`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={55}
                height={55}
                className="rounded-full"
              />
              <span
                className={`text-xs mt-1 ${
                  isActive ? 'text-pink-600 font-semibold' : 'text-gray-500'
                }`}
              >
                {category.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
