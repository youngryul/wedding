import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const PetalAnimation = ({ isVisible = true }) => {
  const [windowHeight, setWindowHeight] = useState(800)
  const [windowWidth, setWindowWidth] = useState(800)
  const controls = useAnimation()

  useEffect(() => {
    const updateSize = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // 🎥 카메라 시점의 약간의 흔들림 (부드럽게 왔다갔다)
  useEffect(() => {
    controls.start({
      rotateX: [0, 3, 0, -3, 0],
      rotateY: [0, -2, 0, 2, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    })
  }, [controls])

  // 🌸 꽃잎 데이터 생성
  const petals = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 6,
    x: Math.random() * 100,
    z: Math.random() * 400 - 200, // 깊이감 (Z축)
    size: 0.6 + Math.random() * 1.5,
    rotation: Math.random() * 360,
    swing: (Math.random() - 0.5) * 100,
    color: ['text-pink-200', 'text-pink-300', 'text-rose-200', 'text-rose-300'][Math.floor(Math.random() * 4)],
  }))

  if (!isVisible) return null

  return (
      <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          animate={controls}
          style={{
            perspective: 800, // 깊이감 추가
            transformStyle: 'preserve-3d',
          }}
      >
        {petals.map((petal) => (
            <motion.div
                key={petal.id}
                 className={`absolute ${petal.color} text-2xl opacity-50`}
                style={{
                  left: `${petal.x}%`,
                  top: '-10%',
                  fontSize: `${petal.size}rem`,
                  transform: `translateZ(${petal.z}px)`,
                }}
                initial={{
                  y: -50,
                  opacity: 0,
                  rotateZ: petal.rotation,
                }}
                animate={{
                  y: [-100, windowHeight + 100],
                  x: [
                    petal.x + petal.swing,
                    petal.x - petal.swing,
                    petal.x + petal.swing / 2,
                  ],
                  rotateZ: [petal.rotation, petal.rotation + 360, petal.rotation + 720],
                   opacity: [0, 0.5, 0.4, 0],
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
            >
              🌸
            </motion.div>
        ))}
      </motion.div>
  )
}

export default PetalAnimation
