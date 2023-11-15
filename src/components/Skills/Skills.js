import { Fifth_Skills, Fourth_Skills, Second_Skills, Sixth_Skills, Skill_data, Third_Skills } from '@/utils/indexdata'
import React from 'react'
import SkillDataProvider from './SkillDataProvider'

const Skills = () => {
  return (
    <section id='skills' className="container flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden p-10 2xl:scale-90 2xl:-translate-x-16 2xl:-translate-y-0 xl:scale-75 lg:scale-[0.59] lg:-translate-y-56 lg:-translate-x-24 xl:-translate-x-16 xl:-translate-y-36  bg-gradient-to-br from-black/20 to-white/0  backdrop-blur-sm rounded-b-full">
        <h1 className="text-white p-6 3xl:text-4xl shadow-info shadow-2xl rounded-full outline-4 outline outline-gray-300">technologies skillset</h1>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
            {Skill_data.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
            {Second_Skills.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
            {Third_Skills.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
            {Fourth_Skills.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
            {Fifth_Skills.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-6 items-center">
            {Sixth_Skills.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
    </section>
  )
}

export default Skills