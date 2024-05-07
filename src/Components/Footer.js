import React from 'react'
import {
	faGithub,
	faLinkedinIn,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Assets/Logo.png'

const Footer = () => {

  const socialLinks = [
    { icon: faGithub, href: "https://github.com/Abhishekmarelli" },
	  { icon: faLinkedinIn, href: "https://www.linkedin.com/in/abhishek-reddy-6b2715147/" },
    { icon: faInstagram, href: "#" },
  ];
  return (
    <div className='bg-white dark:bg-slate-900 flex justify-around py-10'>
      <div className='flex'>
		<img src={logo} alt='logo' className="mr-2 h-8 sm:h-9 mix-blend-overley" />
      <p className='text-slate-800 dark:text-white'>Thanks for checking my portfolio. I'm currently open to work.</p>
      </div>
     
    <ul className="inline-flex">
		{socialLinks.map((link, i) => (
			<li className="mr-5" key={i}>
				<a  href={link.href}
					className="text-2xl dark:text-white opacity-70 hover:opacity-100 transition duration-300">
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>

    </div>
  )
}

export default Footer