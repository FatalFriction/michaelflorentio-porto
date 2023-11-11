import Image from 'next/image'
import React from 'react'

const PanelDataProvider = ({ src, width, height,url }) => {
  return (
    <a href={url} ><Image className="w-full h-auto" src={src} width={width} height={height} alt='socials' /></a>
  )
}

export default PanelDataProvider