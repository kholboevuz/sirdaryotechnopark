'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import logo_white from '../_assets/images/logo/logo-whites.png'
import logo from '../_assets/images/logo/logo.png'

const Logo = () => {
	const { theme } = useTheme()

	return (
		<div>
			<Image
				src={theme === 'dark' ? logo_white : logo}
				alt='Picture of the author'
				width={250}
			/>
		</div>
	)
}

export default Logo
