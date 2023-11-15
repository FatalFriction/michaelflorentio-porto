import Image from 'next/image'
import React from 'react'

const MobilePanelHome = () => {
  return (
    <>
        <div className="container w-screen h-screen bg-info flex flex-col flex-wrap items-center text-white">
            <div className="flex flex-row mt-4 justify-between w-screen px-4 items-center">
                <h1 className="text-xs order-1">Visit on dekstop<br/>for a full experience.</h1>
                <a className="order-last uppercase text-xs" onClick={()=>{window.scrollTo({ top:99999, behavior: "smooth" })}}>Contact</a>
            </div>
            <div className="flex flex-col flex-wrap w-full my-auto text-center items-center space-y-1">
                <Image src={"/avalons.png"} height={100} width={100} alt='avalons'/>
                <h1 className="uppercase tracking-wider">Michael Florentio</h1>
                <h1 className="uppercase text-xs">Avalon</h1>
                <h1 className="uppercase text-xs">Freelancer</h1>
            </div>
        </div>
    </>
  )
}

export default MobilePanelHome