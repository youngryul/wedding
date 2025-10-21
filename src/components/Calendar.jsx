import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const Calendar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // 2026년 2월 달력 데이터 생성
  const year = 2026
  const month = 2 // 2월
  const firstDay = new Date(year, month - 1, 1).getDay() // 2월 1일의 요일 (0=일요일)
  const daysInMonth = new Date(year, month, 0).getDate() // 2월의 총 일수
  const weddingDate = 1 // 결혼식 날짜

  // 달력 날짜 배열 생성
  const calendarDays = []
  
  // 빈 날짜들 (이전 달)
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null)
  }
  
  // 실제 날짜들
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const weekDays = ['일', '월', '화', '수', '목', '금', '토']

  // 카운트다운 타이머 계산
  useEffect(() => {
    const weddingDateTime = new Date('2026-02-01T15:20:00').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = weddingDateTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="section-padding backdrop-blur-sm">
      <div className="container-mobile">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* WEDDING DAY 타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-serif text-gray-800 mb-6 tracking-wider"
          >
            WEDDING DAY
          </motion.h2>

          {/* 날짜와 시간 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-lg text-gray-700 mb-1">2026년 2월 1일 일요일 | 오후 3시 20분</p>
          </motion.div>

          {/* 구분선 */}
          <div className="w-full h-px bg-gray-300 mb-6"></div>
          
          <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mx-4">
            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day, index) => (
                <div 
                  key={index}
                  className={`text-sm font-medium py-2 ${
                    index === 0 ? 'text-red-500' : 'text-gray-600'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            
            {/* 달력 날짜들 */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                const isWeekend = index % 7 === 0 || index % 7 === 6 // 일요일 또는 토요일
                const isWeddingDay = day === weddingDate
                
                return (
                  <div key={index} className="aspect-square flex items-center justify-center">
                    {day ? (
                      isWeddingDay ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                          className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-gray-800 font-medium text-sm"
                        >
                          {day}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.02 }}
                          className={`text-sm font-medium ${
                            isWeekend ? 'text-red-500' : 'text-gray-700'
                          }`}
                        >
                          {day}
                        </motion.div>
                      )
                    ) : (
                      <div></div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* 구분선 */}
            <div className="w-full h-px bg-gray-300 my-6"></div>
            
            {/* 카운트다운 타이머 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-4 gap-3"
            >
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-2xl font-bold text-gray-800">{timeLeft.days}</div>
                <div className="text-xs text-gray-600 mt-1 text-center">일</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-2xl font-bold text-gray-800">{timeLeft.hours}</div>
                <div className="text-xs text-gray-600 mt-1 text-center">시</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-2xl font-bold text-gray-800">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-600 mt-1 text-center">분</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-2xl font-bold text-gray-800">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-600 mt-1 text-center">초</div>
              </div>
            </motion.div>

            {/* 하단 메시지 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 pt-4 border-t border-gray-200"
            >
              <p className="text-sm text-gray-600">
                규민 ♥ 영률 결혼식까지 {timeLeft.days}일 남았습니다
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Calendar
