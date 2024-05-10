import React from 'react'
import {faGithub,faLinkedinIn,faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import profile from "../Assets/img.JPG"
import resume from '../Assets/Abhishek_resume.pdf'
import { easeInOut, motion } from 'framer-motion';

const socialLinks = [
	{ icon: faGithub, href: "https://github.com/Abhishekmarelli" },
	{ icon: faLinkedinIn, href: "https://www.linkedin.com/in/abhishek-reddy-6b2715147/" },
	{ icon: faInstagram, href: "#" },
];

const infoList = [
	{ label: "Born in", value: "India" },
	{ label: "Experience", value: "3 Years" },
	{ label: "Date of Birth", value: "27 June 1999" },
];

const ProfileKeyInfo = () => (
	<div>
		{infoList.map((info, i) => (
			<p className="text-2xl mb-0" key={i}>
				<span className="opacity-75 mr-2 font-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

const SocialLinks = ({ links }) => (
	<ul className="inline-flex mt-6">
		{links.map((link, i) => (
			<li className="mr-5" key={i}>
				<a
					href={link.href}
					className="text-2xl opacity-70 hover:opacity-100 transition duration-300">
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>
);

SocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

const Home = () => {
  return (
		<header id='Home' className="dark py-4 md:py-10 bg-white dark:bg-[#0b1727] text-[#000000] dark:text-white">
			<div className="container px-4 relative">
				<div className="grid grid-cols-12">
					<motion.div
					initial={{marginLeft:400}}
					whileInView={{marginLeft:0}}
					transition={{
						duration:0.5,
						ease:easeInOut
					}} className="col-span-12 lg:col-span-5  xl:col-span-5 lg:order-2 lg:mb-0 text-center lg:text-center">
						<img
							src={profile}
							alt="profile-img"
							className="max-w-full max-h-96 border-[10px] border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto max-md:max-h-96"/>
					</motion.div>
					<motion.div
					initial={{opacity:0.25}}
					whileInView={{opacity:1}}
					transition={{
						duration:1,
						ease:easeInOut}}
					 className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
						<p className="text-2xl leading-normal mb-2 opacity-75">
							Hello I'm 
						</p>
						<h2 className="text-3xl leading-none dark:text-cyan-400 md:text-5xl font-bold mb-6">
							Abhishek Reddy Marelli
						</h2>
						<p className="text-xl leading-normal opacity-75 mb-2">
							a passionate frontend developer focused on creating interactive, accessible, and responsive websites.
						</p>
						<div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l">
							<ProfileKeyInfo />
							<SocialLinks links={socialLinks} />
							<a href={resume} className='text-2xl opacity-70 text-center border-2 border-cyan-400 rounded-xl py-1 px-3  hover:opacity-100 transition duration-300 '>Resume</a>
 						</div>
					</motion.div>
				</div>
			</div>
		</header>
	);
};


export default Home