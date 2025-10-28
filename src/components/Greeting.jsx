import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Greeting = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showLoveStoryModal, setShowLoveStoryModal] = useState(false)
  const [currentStoryPage, setCurrentStoryPage] = useState(0)

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
                    <span className="text-lg font-light text-gray-800">이인수·류미희의 장녀</span>
                    <span className="text-lg font-medium text-gray-800">이영률</span>
                  </div>
                </div>

                {/* 연애스토리 구경가기 버튼 */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLoveStoryModal(true)}
                  className="mt-6 px-10 py-4 bg-gradient-to-r from-wedding-rose to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  ❤️ 연애스토리 구경가기
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

          {/* 연애스토리 팝업 모달 */}
          {showLoveStoryModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => {
                setShowLoveStoryModal(false)
                setCurrentStoryPage(0)
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-3xl max-w-md w-full mx-4 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 헤더 */}
                <div className="relative bg-gradient-to-r from-pink-100 to-rose-100 p-6 shrink-0">
                  <button
                    onClick={() => {
                      setShowLoveStoryModal(false)
                      setCurrentStoryPage(0)
                    }}
                    className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all shadow-md"
                  >
                    ✕
                  </button>
                  <h3 className="text-2xl font-bold text-wedding-rose text-center">💕 우리의 이야기 💕</h3>
                </div>

                {/* 타임라인 컨텐츠 - 스크롤 가능 */}
                <div className="overflow-y-auto flex-1 bg-gradient-to-b from-white to-pink-50/30">
                  <div className="px-6 py-8">
                    {/* 타임라인 */}
                    <div className="relative flex flex-col gap-8">
                      {/* 중앙 연결선 */}
                      <div className="absolute left-[60px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-pink-300 via-rose-300 to-pink-300" />

                      {/* 첫 만남 */}
                      <div className="relative flex items-start gap-4">
                        <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all ${currentStoryPage >= 0 ? 'bg-pink-200 scale-110' : 'bg-gray-200'}`}>
                          💑
                          {currentStoryPage === 0 && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm border-2 border-white">
                              😊
                            </div>
                          )}
                        </div>
                        <div className={`flex-1 pt-2 transition-all ${currentStoryPage === 0 ? 'scale-105' : ''}`}>
                          <div className={`font-bold text-lg mb-1 ${currentStoryPage === 0 ? 'text-pink-600' : 'text-gray-700'}`}>
                            첫 만남
                          </div>
                          <div className="text-sm text-gray-600 bg-white/80 rounded-xl p-3 shadow-sm">
                            2019년 봄, 우연한 만남으로 시작된 우리의 이야기. 처음 본 순간부터 특별하다는 걸 알았어요 🌸
                          </div>
                        </div>
                      </div>

                      {/* 데이트 */}
                      <div className="relative flex items-start gap-4">
                        <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all ${currentStoryPage >= 1 ? 'bg-rose-200 scale-110' : 'bg-gray-200'}`}>
                          🌹
                          {currentStoryPage === 1 && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm border-2 border-white">
                              😊
                            </div>
                          )}
                        </div>
                        <div className={`flex-1 pt-2 transition-all ${currentStoryPage === 1 ? 'scale-105' : ''}`}>
                          <div className={`font-bold text-lg mb-1 ${currentStoryPage === 1 ? 'text-rose-600' : 'text-gray-700'}`}>
                            데이트
                          </div>
                          <div className="text-sm text-gray-600 bg-white/80 rounded-xl p-3 shadow-sm">
                            카페에서의 대화, 영화관에서의 웃음, 산책로에서의 손잡은 손. 함께한 모든 순간이 추억이 되어갔어요 ✨
                          </div>
                        </div>
                      </div>

                      {/* 프로포즈 */}
                      <div className="relative flex items-start gap-4">
                        <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all ${currentStoryPage >= 2 ? 'bg-blue-200 scale-110' : 'bg-gray-200'}`}>
                          💍
                          {currentStoryPage === 2 && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm border-2 border-white">
                              😊
                            </div>
                          )}
                        </div>
                        <div className={`flex-1 pt-2 transition-all ${currentStoryPage === 2 ? 'scale-105' : ''}`}>
                          <div className={`font-bold text-lg mb-1 ${currentStoryPage === 2 ? 'text-blue-600' : 'text-gray-700'}`}>
                            프로포즈
                          </div>
                          <div className="text-sm text-gray-600 bg-white/80 rounded-xl p-3 shadow-sm">
                            2023년 여름, 바다를 바라보며 "평생 함께하자"고 약속했어요. 그날의 설렘과 행복은 지금도 생생해요 💕
                          </div>
                        </div>
                      </div>

                      {/* 결혼 */}
                      <div className="relative flex items-start gap-4">
                        <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all ${currentStoryPage >= 3 ? 'bg-purple-200 scale-110' : 'bg-gray-200'}`}>
                          👰‍♀️🤵
                          {currentStoryPage === 3 && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center text-sm border-2 border-white">
                              😊
                            </div>
                          )}
                        </div>
                        <div className={`flex-1 pt-2 transition-all ${currentStoryPage === 3 ? 'scale-105' : ''}`}>
                          <div className={`font-bold text-lg mb-1 ${currentStoryPage === 3 ? 'text-purple-600' : 'text-gray-700'}`}>
                            결혼
                          </div>
                          <div className="text-sm text-gray-600 bg-white/80 rounded-xl p-3 shadow-sm">
                            그리고 오늘, 사랑하는 여러분 앞에서 하나가 되었어요. 평생 함께 걸어갈 새로운 여정을 시작합니다 🎉
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 네비게이션 - 고정 */}
                <div className="bg-white border-t border-gray-200 px-6 py-4 flex gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setCurrentStoryPage(Math.max(0, currentStoryPage - 1))
                    }}
                    disabled={currentStoryPage === 0}
                    className={`flex-1 py-3 rounded-full font-medium transition-all ${
                      currentStoryPage === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm'
                    }`}
                  >
                    ◀ 이전
                  </button>
                  <button
                    onClick={() => {
                      if (currentStoryPage === 3) {
                        setShowLoveStoryModal(false)
                        setCurrentStoryPage(0)
                      } else {
                        setCurrentStoryPage(Math.min(3, currentStoryPage + 1))
                      }
                    }}
                    className={`flex-1 py-3 rounded-full font-medium transition-all ${
                      currentStoryPage === 3 
                        ? 'bg-gradient-to-r from-wedding-rose to-pink-400 text-white hover:shadow-lg'
                        : 'bg-gradient-to-r from-pink-300 to-rose-300 text-white hover:shadow-md'
                    }`}
                  >
                    {currentStoryPage === 3 ? '닫기 ✕' : '다음 ▶'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </section>
  )
}

export default Greeting
