import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Greeting = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
        <section ref={ref} className="section-padding bg-white/70 backdrop-blur-sm mx-4 rounded-2xl shadow-lg mb-8">
          <div className="container-mobile">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 장식적인 그래픽 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center">
              <div className="w-16 h-px bg-wedding-gold"></div>
              <div className="mx-4 text-wedding-gold text-2xl">🌿</div>
              <div className="w-16 h-px bg-wedding-gold"></div>
            </div>
          </motion.div>

          {/* 인사말 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 text-gray-800 leading-relaxed mb-8"
          >
            <p className="text-lg font-light">
              저희의 가장 아름다운 이 날
            </p>
            
            <p className="text-lg font-light">
              언젠가 들여다보았을 때
            </p>
            
            <p className="text-lg font-light">
              여러분의 미소가 함께 있기를 바랍니다.
            </p>
          </motion.div>

          {/* 신랑 신부 이름 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6 border-t border-gray-200"
          >
            <p className="text-lg font-medium text-gray-800">
              신랑 규민 · 신부 영률
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Greeting
