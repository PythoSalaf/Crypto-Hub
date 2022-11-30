import React from 'react'

const Setting = () => {
  return (
    <div className='bg-heroText py-6 px-6 rounded-xl'>
      <h1 className="text-center py-7 text-heroColor text-xl md:text-2xl font-semibold">Setting</h1>
      <div className="bg-heroColor rounded-tr-xl rounded-bl-xl">
      <div className="py-4">
        <h3 className="text-heroText py-2 px-4 text-xl md:text-2xl ">Slippage Tolerant</h3>
        <div className="flex items-center justify-around py-8">
          <h4 className="bg-secondaryColor px-5 py-3 rounded-tr-xl rounded-bl-xl text-lg md:text-xl font-semibold">0.5%</h4>
          <h4 className="bg-secondaryColor px-5 py-3 rounded-tr-xl rounded-bl-xl text-lg md:text-xl font-semibold">1.0%</h4>
          <h4 className="bg-secondaryColor px-5 py-3 rounded-tr-xl rounded-bl-xl text-lg md:text-xl font-semibold">0.0%</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Setting