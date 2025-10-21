import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Greeting = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showContactModal, setShowContactModal] = useState(false)

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

              {/* 신랑 신부 정보 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-6 border-t border-gray-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-light text-gray-800">최영훈·신지인의 장남</span>
                    <span className="text-lg font-medium text-gray-800">최규민</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-light text-gray-800">이인수·유미희의 장녀</span>
                    <span className="text-lg font-medium text-gray-800">이영률</span>
                  </div>
                </div>

                {/* 연락하기 버튼 */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContactModal(true)}
                  className="mt-6 px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  연락하기
                </motion.button>
              </motion.div>

              {/* 하단 이미지 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-8"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/img/sample/second.jpg" 
                    alt="Wedding Photo" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 연락하기 팝업 모달 */}
          {showContactModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowContactModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">연락처 정보</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="text-lg font-medium text-gray-700 mb-2">신랑 측</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>아버지 이열계: 010-1234-5678</p>
                      <p>어머니 현점순: 010-2345-6789</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">신부 측</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>아버지 유재규: 010-3456-7890</p>
                      <p>어머니 김옥희: 010-4567-8901</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    닫기
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </section>
  )
}

export default Greeting
