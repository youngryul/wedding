import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Share2, Copy, Heart } from 'lucide-react'

const ShareButtons = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '김민수 & 이지은 결혼식',
          description: '2024년 5월 18일 토요일 오후 2시\n서울시 강남구 웨딩홀',
          imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '청첩장 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    } else {
      // 카카오톡이 설치되지 않은 경우 URL 복사
      handleCopyUrl()
    }
  }

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('청첩장 주소가 복사되었습니다!')
    } catch (err) {
      // 폴백: 텍스트 선택 방식
      const textArea = document.createElement('textarea')
      textArea.value = window.location.href
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('청첩장 주소가 복사되었습니다!')
    }
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
            className="text-2xl md:text-3xl font-light text-wedding-deep-rose mb-8"
          >
            청첩장 공유하기
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 mb-8 leading-relaxed"
          >
            소중한 분들과 함께<br />
            우리의 특별한 순간을 나누어요
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleKakaoShare}
              className="flex items-center space-x-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5" />
              <span>카카오톡으로 청첩장 전하기</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyUrl}
              className="flex items-center space-x-2 bg-wedding-deep-rose text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-wedding-deep-rose/80 transition-colors shadow-lg"
            >
              <Copy className="w-5 h-5" />
              <span>청첩장 주소 복사하기</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShareButtons
