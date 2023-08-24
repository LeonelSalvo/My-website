import React, { useEffect } from 'react'
import { getRandomLetter, getRandomWord } from '@/utils/math'

interface HackerTextProps {
	text: string
	keyId: string
}

const HackerText: React.FC<HackerTextProps> = ({ text, keyId }) => {
	useEffect(() => {
		const word = document.querySelector('#Hacker' + keyId)
		const INITIAL_WORD = word?.innerHTML || ''
		let canChange = false
		let globalCount = 0
		let count = 0
		let isGoing = false

		function init() {
			if (isGoing || !word) return

			isGoing = true
			var randomWord = getRandomWord(word)
			word.innerHTML = randomWord

			const interv = setInterval(function () {
				var finalWord = ''
				for (var x = 0; x < INITIAL_WORD.length; x++) {
					if (x <= count && canChange) {
						finalWord += INITIAL_WORD[x]
					} else {
						finalWord += getRandomLetter()
					}
				}
				word.innerHTML = finalWord
				if (canChange) {
					count++
				}
				if (globalCount >= 20) {
					canChange = true
				}
				if (count >= INITIAL_WORD.length) {
					clearInterval(interv)
					count = 0
					canChange = false
					globalCount = 0
					isGoing = false
				}
				globalCount++
			}, 20)
		}

		init()
	}, [])

	return (
		<div className='m-5 overflow-hidden'>
			<p id={'Hacker' + keyId}>{text}</p>
		</div>
	)
}

export default HackerText
