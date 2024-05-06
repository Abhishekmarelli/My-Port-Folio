import React from 'react'

const About = () => {
  const Actively_using =['Html','Css','Tailwindcss',
    'Styled-components',
    'BootStrap',
    'Javascript',
    'React',
    'Git',
    'Github']
   const Familiar_with=['Node.js','Express.js']
  return (
    <div className="ezy__header8 dark py-4 md:py-10 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
        <h1 className="text-center underline text-3xl">About Me</h1>
      <p className='text-center'>
          You will find a little intro about me and the skills and technologies
          I use daily.
        </p>
        <div className='grid grid-cols-2 py-4'>
          <div className='pl-20'>
          <h1>Want to know me?</h1>
            <p className='py-5'>I'm a Frontend Developer passionate about crafting interactive, accessible, and responsive websites. Check out my projects section for some of the beautiful websites I've built.</p>
            <p>I'm currently open to Job opportunities where I can contribute to your business and create delightful user experiences. Feel free to contact me if you find my skills useful.</p>
          </div>
          
          <div className='pl-20'>
          <h1>Skills and Technologies</h1>
          <p>I'm actively using and familiar with the following:</p>
          </div>

        </div>
    </div>
  )
}

export default About