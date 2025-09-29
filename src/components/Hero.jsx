import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* 메인 콘텐츠 */}
      <motion.div 
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-shadow">
            김민수
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-4 text-shadow">
            &
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-shadow">
            이지은
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="space-y-2 text-lg md:text-xl font-light"
        >
          <p className="text-shadow">2024년 5월 18일 토요일</p>
          <p className="text-shadow">오후 2시</p>
          <p className="text-shadow">서울시 강남구 웨딩홀</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12"
        >
          <p className="text-sm md:text-base font-light text-shadow">
            두 사람이 하나가 되어<br />
            새로운 시작을 합니다
          </p>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
