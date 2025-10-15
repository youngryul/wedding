import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Heart } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleSMS = (phoneNumber) => {
    window.location.href = `sms:${phoneNumber}`
  }

  const handleKakao = () => {
    // 카카오톡 링크 (실제 사용시 카카오톡 채널 ID로 변경)
    window.open('https://pf.kakao.com/_your_channel_id', '_blank')
  }

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
            className="text-2xl md:text-3xl font-light text-wedding-rose mb-12"
          >
            연락하기
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 mb-12 leading-relaxed"
          >
            궁금한 점이 있으시면<br />
            언제든 연락주세요
          </motion.p>

          {/* 신랑 연락처 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/50 rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">신랑 김민수</h3>
            <p className="text-sm text-gray-600 mb-6">010-1234-5678</p>
            
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCall('010-1234-5678')}
                className="flex items-center space-x-2 bg-wedding-rose text-white px-4 py-2 rounded-full text-sm hover:bg-wedding-rose/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>전화</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSMS('010-1234-5678')}
                className="flex items-center space-x-2 bg-wedding-sage text-white px-4 py-2 rounded-full text-sm hover:bg-wedding-sage/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>문자</span>
              </motion.button>
            </div>
          </motion.div>

          {/* 신부 연락처 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/50 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">신부 이지은</h3>
            <p className="text-sm text-gray-600 mb-6">010-9876-5432</p>
            
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCall('010-9876-5432')}
                className="flex items-center space-x-2 bg-wedding-rose text-white px-4 py-2 rounded-full text-sm hover:bg-wedding-rose/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>전화</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSMS('010-9876-5432')}
                className="flex items-center space-x-2 bg-wedding-sage text-white px-4 py-2 rounded-full text-sm hover:bg-wedding-sage/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>문자</span>
              </motion.button>
            </div>
          </motion.div>

          {/* 카카오톡 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleKakao}
              className="flex items-center space-x-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors mx-auto"
            >
              <Heart className="w-4 h-4" />
              <span>카카오톡으로 문의하기</span>
            </motion.button>
          </motion.div>

          {/* 안내 문구 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 p-4 bg-wedding-rose/20 rounded-lg"
          >
            <p className="text-xs text-gray-600 text-center">
              💌 참석 여부는 아래 RSVP를 통해<br />
              알려주시면 감사하겠습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
