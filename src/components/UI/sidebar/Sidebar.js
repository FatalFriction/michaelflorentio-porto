"use client"
import React from 'react'
import Progress from '../progress/Progress'
import Image from 'next/image'
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <>
        <aside id="logo-sidebar" className="fixed top-0 right-0 z-40 w-fit h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <motion.div initial={{ paddingLeft:0 , paddingRight:0  }} whileHover={{ paddingLeft:15 , paddingRight:15 }} transition={{ duration: 2, repeat: Infinity }} className="h-full px-1 py-8 overflow-y-hidden bg-info">
            <ul className="space-y-7 font-medium">
                <li>
                    <div className="flex justify-center">
                        <div className="space-y-2">
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex justify-center"><Progress/></div>
                </li>
                <li>
                    <a href="https://github.com/FatalFriction" className="flex items-center pl-2.5">
                        <Image src="/avalons.png" className="w-auto h-auto mr-3 sm:h-7" width={10} height={10} alt="avalons Logo" />
                    </a>
                </li>
            </ul>
            
        </motion.div>
        </aside>

    </>
  )
}

export default Sidebar