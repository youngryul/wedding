import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Greeting = () => {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light text-wedding-rose mb-6">
              인사말
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <p className="text-lg">
              서로를 향한 마음이 하나가 되어<br />
              사랑의 결실을 맺게 되었습니다.
            </p>
            
            <p className="text-base">
              저희 두 사람이 사랑의 이름으로<br />
              하나가 되는 소중한 날에<br />
              귀하를 모시고자 합니다.
            </p>
            
            <p className="text-base">
              바쁘시겠지만 참석해 주시어<br />
              저희의 새로운 시작을<br />
              축복해 주시면 감사하겠습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-wedding-rose/30"
          >
            <p className="text-sm text-gray-600">
              김민수 · 이지은 드림
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Greeting
