import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SocialBar = () => {
	const socialInfo = [
		{
			Message: 'Reach me on Linkedin',
			icon: '/images/Linkedin.png',
			link: 'https://www.linkedin.com/in/agustin-leonel-salvo-646267242/',
		},
		{
			Message: 'See this web code on my Github',
			icon: '/images/Github.png',
			link: 'https://github.com/LeonelSalvo/My-website',
		},
	]
	const elements = socialInfo.map((element) => {
		return (
			<Link
				href={element.link}
				target="_blank"
				className='m-4 o flex w-4/6 flex-row items-center rounded-lg border-4 border-[#292831] p-2 pl-6 align-middle text-[#292831] hover:bg-[#292831] hover:text-[#ee8695]'
			>
				<Image width={50} height={50} alt='' src={element.icon} />
				<span className='font-mono text-xl font-bold ml-8'>{element.Message}</span>
			</Link>
		)
	})
	return <div className='flex w-full flex-col items-center'>{elements}</div>
}

export default SocialBar
