"use client"

import { useEffect, useState } from "react"

export default function ComingSoonPage() {
  const [text, setText] = useState("")
  const fullText = "Coming Soon !"

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
        timeout = setTimeout(typeText, 150) // Speed of typing
      } else {
        // Reset after a pause when complete
        setTimeout(() => {
          currentIndex = 0
          typeText()
        }, 3000) // Wait 3 seconds before restarting
      }
    }

    typeText()

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
<div className="min-h-screen bg-neutral-100 bg-[url('/new.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      {/* Dark overlay for better contrast */}
<div className="absolute inset-0 bg-white/60 backdrop-brightness-105"></div>

      <div className="text-center space-y-10">
        {/* Brand name - smaller with gradient */}
      <h1
  className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase"
  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
>
  Nordisk Soft
</h1>


        {/* Accent line */}
        <div className="flex justify-center items-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="w-2 h-2 mx-2 bg-black rounded-full animate-pulse"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Subheading - Coming Soon with typing animation and vibrant gradient */}
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight relative min-h-[1.2em]"
          style={{ fontFamily: "'Montserrat', 'Arial Black', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-gray-700 via-black to-gray-700 bg-clip-text text-transparent relative z-10">
            {text}
          </span>
          <span className="animate-blink ml-1 inline-block w-1 h-[0.8em] bg-black align-middle"></span>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 via-black/20 to-gray-500/20 blur-2xl"></div>
        </h2>
      </div>

      {/* Enhanced floating particles with accent colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-700/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gray-600/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-black/70 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-gray-700/60 rounded-full animate-pulse delay-1500"></div>
        {/* Additional accent particles */}
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-gray-800/40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/2 right-1/5 w-2 h-2 bg-black/50 rounded-full animate-pulse delay-1200"></div>
      </div>
    </div>
  )
}
