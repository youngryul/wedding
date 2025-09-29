import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import CoupleIntro from './components/CoupleIntro'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import RSVP from './components/RSVP'

function App() {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <Hero />
      <Greeting />
      <CoupleIntro />
      <Gallery />
      <Location />
      <Contact />
      <RSVP />
    </div>
  )
}

export default App
