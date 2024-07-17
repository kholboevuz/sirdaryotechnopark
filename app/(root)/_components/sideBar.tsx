/* eslint-disable react/no-unescaped-entities */
import { LangueDown } from './LangueDropDown'
import Logo from './Logo'
import { MenuBar } from './menuBar'
import { ModeToggle } from './ModeToggle'
export default function SideBar() {
	return (
		<div>
			<nav className='bg-sidebar border-gray-200 dark:bg-black dark:border-gray-700'>
				<div className='w-4/5 flex items-center justify-between  mx-auto p-3'>
					<Logo />
					<span>
						<p className='text-1xl font-bold italic'>
							"Innovatsion texnopark – Yoshlar uchun imkoniyatlar maskani!"
						</p>
					</span>
					<div className='text-textcolor self-center text-1xl items-center font-semibold whitespace-nowrap flex dark:text-white'>
						<LangueDown />
						<span className='pl-4'>
							<ModeToggle />
						</span>
						<span className='pl-4'>
							<MenuBar />
						</span>
					</div>
				</div>
			</nav>
		</div>
	)
}
