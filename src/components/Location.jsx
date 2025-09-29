import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Calendar } from 'lucide-react'

const Location = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-wedding-pink">
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
            className="text-2xl md:text-3xl font-light text-wedding-rose mb-12"
          >
            오시는 길
          </motion.h2>

          {/* 결혼식 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/50 rounded-2xl p-6 mb-8 space-y-4"
          >
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-5 h-5 text-wedding-rose" />
              <span className="text-gray-700">2024년 5월 18일 토요일</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5 text-wedding-rose" />
              <span className="text-gray-700">오후 2시</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-wedding-rose" />
              <span className="text-gray-700">서울시 강남구 웨딩홀</span>
            </div>
          </motion.div>

          {/* 지도 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.123456789!2d127.027619!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15c4b8b8b8b%3A0x1234567890abcdef!2sGangnam%20Wedding%20Hall!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="웨딩홀 위치"
            />
          </motion.div>

          {/* 교통 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/30 rounded-xl p-6 text-left"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">교통 안내</h3>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-medium text-wedding-rose">🚇 지하철:</span>
                <p className="mt-1">강남역 2번 출구 도보 5분</p>
              </div>
              
              <div>
                <span className="font-medium text-wedding-rose">🚌 버스:</span>
                <p className="mt-1">146, 240, 341번 강남역 하차</p>
              </div>
              
              <div>
                <span className="font-medium text-wedding-rose">🚗 자가용:</span>
                <p className="mt-1">웨딩홀 지하 주차장 이용 가능</p>
              </div>
            </div>
          </motion.div>

          {/* 주차 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-6 p-4 bg-wedding-rose/20 rounded-lg"
          >
            <p className="text-sm text-gray-700 text-center">
              💡 주차 공간이 제한되어 있으니<br />
              대중교통 이용을 권장드립니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
