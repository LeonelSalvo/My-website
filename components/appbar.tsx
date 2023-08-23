import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const links = [
	{ label: 'Background', href: '/background' },
	{ label: 'Frontend', href: '/frontend' },
	{ label: 'Backend', href: '/backend' },
	{ label: 'Game Development', href: '/gamedev' },
]

const Appbar = () => {
	const router = useRouter()

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
					? 'animate-duration-400 fixed left-0 top-0 z-20 w-full animate-fade pt-safe animate-delay-200'
					: closed
					? 'animate-duration-400 fixed left-0 top-0 z-20 w-full animate-jump-out pt-safe animate-delay-200'
					: ''
			}
		>
			<header className='border-b bg-[#292831] px-safe '>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					<Link href='/' legacyBehavior>
						<a>
							<h1 className='whitespace-nowrap font-mono text-xl font-bold text-[#ee8695]'>
								This is just a nav bar to showcase. SCROLL UP to vanish it!
							</h1>
						</a>
					</Link>
				</div>
			</header>
		</div>
	)

	return component
}

export default Appbar

/*
						<nav className='flex items-center space-x-6'>
							<div className='hidden sm:block'>
								<div className='flex items-center space-x-6'>
									{links.map(({ label, href }) => (
										<Link key={label} href={href} legacyBehavior>
											<a
												className={`text-sm ${
													router.pathname === href
														? 'text-indigo-500 dark:text-indigo-400'
														: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
												}`}
											>
												{label}
											</a>
										</Link>
									))}
								</div>
							</div>
						</nav>
*/
