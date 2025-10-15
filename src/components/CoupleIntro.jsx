import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CoupleIntro = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white/70 backdrop-blur-sm">
      <div className="container-mobile">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-wedding-deep-rose mb-12"
          >
            신랑 & 신부
          </motion.h2>

          <div className="space-y-16">
            {/* 신랑 소개 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg border-4 border-white/30">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="신랑"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-wedding-deep-rose rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">👨</span>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-2">김민수</h3>
              <p className="text-sm text-gray-600 mb-4">김○○ · 박○○의 아들</p>
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                따뜻한 마음과 진실한 사랑으로<br />
                지은이를 지켜주고 싶습니다.
              </p>
            </motion.div>

            {/* 하트 장식 */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center"
            >
              <div className="text-4xl text-wedding-deep-rose drop-shadow-lg">💕</div>
            </motion.div>

            {/* 신부 소개 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg border-4 border-white/30">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="신부"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-wedding-deep-rose rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">👩</span>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-2">이지은</h3>
              <p className="text-sm text-gray-600 mb-4">이○○ · 정○○의 딸</p>
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                민수오빠와 함께 행복한<br />
                가정을 꾸려나가고 싶습니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoupleIntro
