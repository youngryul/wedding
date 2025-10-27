import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Share2, Copy, Heart } from 'lucide-react'
import PetalAnimation from './PetalAnimation'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "We are getting married"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 100) // 100ms마다 한 글자씩

    return () => clearInterval(typingInterval)
  }, [])



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wedding-soft-pink to-wedding-lavender">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/img/sample/main.jpg')`,
          backgroundPosition: 'center center'
        }}
      >
      </div>

      {/* 상단 이름 표시 - 검은색 배경일 때는 숨김 */}
      <motion.div
        className="absolute top-16 left-0 right-0 z-30 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isTypingComplete ? 1 : 0, 
          y: 0 
        }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-3xl font-light text-gray-800 tracking-wider">
          YOUNGRYUL & KYUMIN
        </h1>
      </motion.div>

      {/* 꽃잎 애니메이션 - 타이핑 완료 후에만 표시 */}
      <PetalAnimation isVisible={isTypingComplete} />

      {/* 검은색 블러 오버레이 - 타이핑 애니메이션과 함께 나타나고 사라짐 */}
      <motion.div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* We are getting married 타이핑 애니메이션 - 화면 중앙 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wider">
            {displayText}
            {!isTypingComplete && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-wedding-deep-rose"
              >
                |
              </motion.span>
            )}
          </div>
        </div>
      </motion.div>


      {/* 하단 결혼식 정보 */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-30 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isTypingComplete ? 1 : 0, 
          y: 0 
        }}
        transition={{ duration: 1, delay: isTypingComplete ? 1.0 : 3.0 }}
      >
        <div className="text-center">
          {/* 상단 선 */}
          <div className="w-full h-px bg-gray-300 mb-6"></div>
          
          {/* 결혼식 정보 */}
          <div className="space-y-2 text-gray-700">
            <p className="text-lg font-light">2026년 02월 01일 일요일 오후 3시 20분</p>
            <p className="text-lg font-light">루이비스컨벤션 문정점</p>
            <p className="text-lg font-light">그레이스홀</p>
          </div>
          
          {/* 하단 선 */}
          <div className="w-full h-px bg-gray-300 mt-6"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
