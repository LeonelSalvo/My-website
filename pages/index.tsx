import Banner from '@/components/banner'
import ExpCard from '@/components/expCard'
import HackerText from '@/components/hackerText'

import Page from '@/components/page'

const Index = () => {
	const gameDescription =
		'Game developer hobbist since I have studied Videogame programming and design at Da Vinci First Multimedial School'

	const frontDescription =
		'Frontend developer since 2020 with React + TS + web3 from the very beginning. Some dApps were: AMM | Swaps | NFT marketplaces | Lending | Liquid Staking | Unity WebGL Games '

	const backDescription =
		'Since 2020 backend programmer in parallel working with middleware | Nest.JS bots | solidity smart contracts'

	const artDescription =
		'I know they are too cute to not notice but have you look these penguins!? Well, they are my creation using pyxel edit'

	return (
		<Page>
			<Banner />
			<br />

			<div className='mt-2 font-mono'>
				<div className='grid grid-cols-3 grid-rows-2'>
					<ExpCard
						icon='/images/gamedev.png'
						penguin='/images/AnimationImplementation.gif'
						title='GAMEDEV'
						description={gameDescription}
					/>
					<ExpCard
						icon='/images/frontend.png'
						penguin='/images/AnimationInspect.gif'
						title='FRONTEND'
						description={frontDescription}
					/>
					<ExpCard
						icon='/images/backend.png'
						penguin='/images/AnimationBuild.gif'
						title='BACKEND'
						description={backDescription}
					/>
					<div></div>
					<ExpCard
						icon='/images/art.png'
						penguin='/images/AnimationThinking.gif'
						title='ART'
						description={artDescription}
					/>
				</div>
				<br />
			</div>
		</Page>
	)
}

export default Index
