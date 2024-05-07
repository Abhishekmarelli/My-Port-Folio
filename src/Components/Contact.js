import React from 'react'
import message from '../Assets/message.png'


const Contact = () => {
    return (
      <section id='Contact' className="ezy__contact8 light py-4 md:py-14 bg-[#ffffff] text-zinc-900 dark:bg-[#0b1727] dark:text-white relative overflow-hidden">
			<div className="container px-4">
			<div className="grid grid-cols-12">
				<div className="col-span-12 lg:col-span-5 lg:col-start-2 lg:px-16 xl:px-20">
					<img

					src={message}
					alt='message'
					
					/>
				</div>
			<div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:px-16 xl:px-20">	
      		<div className="bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-20 rounded-xl relative p-6 md:p-12">
		
			<h2 className="text-2xl md:text-[25px] leading-none font-bold mb-4">Contact ME</h2>

      	<form className="">
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[38px] leading-[38px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[38px] leading-[38px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[38px] leading-[38px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-start">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4">
					Submit
				</button>
			</div>
		</form>
	</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Contact



	