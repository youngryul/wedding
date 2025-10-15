import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, XCircle, Users } from 'lucide-react'

const RSVP = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guestCount: 1,
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 실제 구현시 Google Form이나 서버로 데이터 전송
    console.log('RSVP 데이터:', formData)
    setIsSubmitted(true)
    
    // 3초 후 폼 초기화
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        attendance: '',
        guestCount: 1,
        message: ''
      })
    }, 3000)
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
            className="text-2xl md:text-3xl font-light text-wedding-rose mb-4"
          >
            참석 여부
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 mb-12 leading-relaxed"
          >
            소중한 분들을 모시고 싶어<br />
            참석 여부를 알려주세요
          </motion.p>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-white/50 rounded-2xl p-6 space-y-6"
            >
              {/* 이름 입력 */}
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-wedding-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-rose/50 focus:border-transparent"
                  placeholder="이름을 입력해주세요"
                />
              </div>

              {/* 참석 여부 */}
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  참석 여부 *
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-wedding-rose focus:ring-wedding-rose"
                    />
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">참석합니다</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-wedding-rose focus:ring-wedding-rose"
                    />
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-gray-700">참석하지 않습니다</span>
                  </label>
                </div>
              </div>

              {/* 동반 인원 (참석하는 경우에만) */}
              {formData.attendance === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-left"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    동반 인원
                  </label>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-wedding-rose" />
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-wedding-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-rose/50"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>
                          {num}명
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              {/* 축하 메시지 */}
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  축하 메시지
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-wedding-rose/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-rose/50 focus:border-transparent resize-none"
                  placeholder="축하 메시지를 남겨주세요 (선택사항)"
                />
              </div>

              {/* 제출 버튼 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-wedding-rose text-white py-4 rounded-lg font-medium hover:bg-wedding-rose/80 transition-colors"
              >
                참석 여부 전송하기
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/50 rounded-2xl p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                참석 여부가 전송되었습니다!
              </h3>
              
              <p className="text-sm text-gray-600">
                소중한 마음 감사합니다 💕
              </p>
            </motion.div>
          )}

          {/* Google Form 링크 (대안) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 p-4 bg-wedding-rose/20 rounded-lg"
          >
            <p className="text-xs text-gray-600 mb-3">
              또는 Google Form을 통해 참석 여부를 알려주세요
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://forms.gle/your-google-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-wedding-rose px-4 py-2 rounded-full text-sm font-medium hover:bg-wedding-rose/10 transition-colors"
            >
              Google Form으로 참석 여부 알리기
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RSVP
