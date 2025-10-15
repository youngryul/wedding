import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import CoupleIntro from './components/CoupleIntro'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import RSVP from './components/RSVP'
import ShareButtons from './components/ShareButtons'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-soft-pink via-wedding-lavender to-wedding-warm-pink py-4">
      <div className="max-w-md mx-auto min-h-screen bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <Hero />
        <Greeting />
        <CoupleIntro />
        <Gallery />
        <Location />
        <Contact />
        <RSVP />
        <ShareButtons />
      </div>
    </div>
  )
}

export default App
