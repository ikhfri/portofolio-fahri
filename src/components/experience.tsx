import React from 'react'
import Card from './ui/card'

const Experience = () => {
  return (
    <div className="bg-black w-full h-auto flex-col flex justify-center items-center py-8">
      <div className='py-5'>
        <h1 className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 bg-slate-900">
          Experience
        </h1>{" "}
      </div>
      <div className='px-6'>
        <Card />

      </div>
      
    </div>
  );
}

export default Experience