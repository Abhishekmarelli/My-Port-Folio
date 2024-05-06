import React from 'react'

const About = () => {
  const Actively_using =['Html','Css','Tailwindcss','SQL',
    'Styled-components',
    'BootStrap',
    'Javascript',
    'React',
    'Git',
    'Github']
   const Familiar_with=['Node.js','Express.js']
  return (
    <div className="ezy__header8 dark py-4 md:py-10 bg-white dark:bg-[#0b1727] text-[#0d0c36] dark:text-white">
        <h1 className="text-center underline text-3xl">About Me</h1>
      <p className='text-center py-2'>
          You will find a little intro about me and the skills and technologies
          I use daily.
        </p>
        <div className='grid grid-cols-2 py-4'>
          <div className='pl-20'>
          <h1>Want to know me?</h1>
            <p className='py-5'>I'm a <span className='font-bold'>Frontend Developer </span> passionate about crafting interactive, accessible, and responsive websites. Check out <span className='text-red-500 hover:underline'> My Projects Section </span> for some of the beautiful websites I've built.</p>
            <p>I'm currently open to Job opportunities where I can contribute to your business and create delightful user experiences. Feel free to contact me if you find my skills useful.</p>

            <button class="relative my-2 px-8 py-2 rounded-md isolation-auto z-10 border-2 border-cyan-800
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-cyan-200 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Contact Me</button>
          </div>
          
          <div className='pl-20'>
          <h1>Skills and Technologies</h1>
          <p>I'm actively using and familiar with the following:</p>
          <div className='py-2'>
          <span className='font-bold'>Actively using :</span>
          <div className='flex flex-wrap gap-2 py-2'>
          {Actively_using.map((i)=> (<span className='text-center border-2 border-cyan-400 rounded-xl p-1 '>{i}</span>))}
          </div>
          <span className='font-bold'>Familiar_with:</span>
          <div className='flex flex-wrap gap-2 py-2'>
          {Familiar_with.map((i)=> (<span className='text-center border-2 border-cyan-400 rounded-xl p-1 '>{i}</span>))}
          </div>
          </div>
          </div>

        </div>
    </div>
  )
}

export default About