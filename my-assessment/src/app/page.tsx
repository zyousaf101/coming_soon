"use client"

import { useEffect, useState } from "react"

export default function ComingSoonPage() {
  const [text, setText] = useState("")
  const fullText = "Coming Soon"

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
        timeout = setTimeout(typeText, 150)
      } else {
        setTimeout(() => {
          currentIndex = 0
          typeText()
        }, 3000)
      }
    }

    typeText()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-white bg-[url('/new.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 relative">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="text-center space-y-10 z-10">
        {/* Brand Name */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-[0.2em] uppercase">
          Nordisk Soft
        </h1>

        {/* Typing Heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight min-h-[1.2em] relative">
          <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            {text}
          </span>
          <span className="animate-blink ml-1 inline-block w-1 h-[0.8em] bg-white/80 align-middle"></span>

          {/* Gradient Flare Line */}
          <div className="absolute left-1/2 bottom-[-1rem] transform -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent blur-sm opacity-70"></div>
        </h2>

        {/* Accent dot & line */}
       {/* Accent dot & solid black lines */}
<div className="flex justify-center items-center space-x-4">
  <div className="w-12 h-px bg-black"></div>
  <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
  <div className="w-12 h-px bg-black"></div>
</div>

      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  )
}
