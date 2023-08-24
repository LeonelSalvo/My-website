import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ExpProps {
	title: string
	description: string
	icon: string
	penguin: string
}

// Cards for experience showcase
const ExpCard: React.FC<ExpProps> = ({ title, description, icon, penguin }) => {
	const [clientWindowHeight, setClientWindowHeight] = useState<number>()

	const handleScroll = () => {
		setClientWindowHeight(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	})

	const [opened, setOpened] = useState(false)
	const [closed, setClosed] = useState(false)
	useEffect(() => {
		if (!clientWindowHeight) return
		if (clientWindowHeight > 100) {
			setOpened(true)
			setClosed(false)
		}
		if (opened && clientWindowHeight < 100) {
			setOpened(false)
			setClosed(true)
		}
	}, [clientWindowHeight])

	const component = (
		<div
			className={
				opened
					? 'animate-duration-400 m-2 flex w-48 animate-fade-left flex-col items-center justify-center  rounded-xl border-4 border-[#292831] bg-[#4a7a96] text-center text-[#fbbbad] animate-delay-200 hover:bg-[#292831] hover:text-[#ee8695]'
					: closed
					? 'animate-duration-800 m-2 flex w-48 animate-jump-out flex-col items-center justify-center  rounded-xl border-4 border-[#292831] bg-[#4a7a96] text-center text-[#fbbbad] animate-delay-200 hover:bg-[#292831] hover:text-[#ee8695]'
					: ''
			}
		>
			{opened ? (
				<>
					<Image
						alt=''
						className='m-4 mt-8 hover:animate-ping'
						width={50}
						height={50}
						src={icon}
					/>
					<span className={`m-2 h-4 w-11/12 text-xl font-bold `}>{title}</span>
					{penguin && (
						<Image
							alt=''
							className='hover:animate-pulse'
							width={150}
							height={150}
							src={penguin}
						/>
					)}
					<span className='m-4 h-72 w-10/12 font-semibold '>{description}</span>
				</>
			) : (
				<div className='h-72'></div>
			)}
		</div>
	)
	return component
}

export default ExpCard
