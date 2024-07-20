import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"


function NavBar() {
    return (
        <nav className='mb-20  flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center '>
                <p className='text-5xl'>Ss</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-5 text-2xl'>
                <a href="https://www.linkedin.com/in/sparsh-singhal-b7460b294/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/sparshsinghal885" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://instagram.com/sparsh.singhal11/" target="_blank">
                    <FaInstagram />
                </a>
                <a href="https://x.com/Sparsh_Singhal1" target="_blank">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    )
}

export default NavBar
