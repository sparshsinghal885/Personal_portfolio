import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 '>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>Get in Touch
      </motion.h2>


      <div className='text-center tracking-tighter'>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='my-4 '>{CONTACT.address}</motion.p>

        <motion.a initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} href="mailto:sparshsinghal885@gmail.com" className='border-b my-4'>
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  )
}

export default Contact
