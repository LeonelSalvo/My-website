import React from 'react'
import Image from 'next/image'
import HackerText from './hackerText'

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
	return (
		<div className=' flex h-96 animate-fade-left  flex-row items-center overflow-hidden rounded-2xl border-4 border-[#fbbbad] animate-delay-300 animate-duration-1000 '>
			<Image
				className='m-4 animate-flip-up rounded-2xl animate-delay-300 animate-duration-1000'
				width={250}
				height={250}
				src='/images/me.png'
			/>
			<div className='w-120 m-5 block justify-center overflow-hidden rounded-xl border-4 border-[#4a7a96] bg-[#333f58] p-2 font-mono font-bold text-[#fbbbad]'>
				<span className='m-5 text-xl'>Hi! I´m Agustin Leonel Salvo</span>
				<HackerText
					text='An Argentinian frontend developer
                    with experience in web3 marketplaces, swaps
                    automated market makers, gaming unity-webgl platforms.
                    Also worked as Fullstack developer Next.js | Nest.js
                    and Tech Lead for 5-11 member development teams. SCROLL DOWN to see more!'
					keyId={'Description'}
				/>
				<span className='m-5 text-xl text-[#fbbbad]'>
					Feel free to contact me on{' '}
					<a
						href='https://www.linkedin.com/in/agustin-leonel-salvo-646267242/'
						className='m-5 underline hover:text-[#548baa]'
					>
						Linkedin
					</a>
				</span>
			</div>
		</div>
	)
}

export default Banner
