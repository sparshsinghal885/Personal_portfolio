import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa"
import { SiAppwrite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion"

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-700 ' />
        </motion.div>

        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl ' />
        </motion.div>

        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>

        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiAppwrite className='text-7xl text-red-600' />
        </motion.div>

        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className='text-7xl text-cyan-600' />
        </motion.div>

        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <IoLogoFirebase className='text-7xl text-yellow-600' />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
