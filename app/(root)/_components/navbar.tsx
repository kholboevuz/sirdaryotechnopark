import {
	FaFacebook,
	FaInstagram,
	FaLink,
	FaTelegram,
	FaYoutube,
} from 'react-icons/fa'
import { GoAlertFill } from 'react-icons/go'
export default function Navbar() {
	return (
		<div>
			<nav className='bg-blue border-gray-200 dark:bg-blue dark:border-gray-700'>
				<div className='w-4/5 flex items-center justify-between  mx-auto p-3'>
					<span className='text-white self-center text-1xl font-semibold whitespace-nowrap dark:text-white'>
						0:24:51 2024 M05 29, Wed
					</span>
					<span className='text-danger self-center text-1xl flex items-center font-semibold whitespace-nowrap dark:text-white'>
						<GoAlertFill className='pr-1' /> Sayt test rejimida ishlamoqda
					</span>
					<span className='text-info self-center text-1xl flex items-center font-semibold whitespace-nowrap dark:text-white'>
						<FaLink className='pr-1' /> Saytning eski talqini
					</span>
					<span className='text-white self-center text-1xl items-center font-semibold whitespace-nowrap flex dark:text-white'>
						<span>Biz ijtimoiy tarmoqlarda:</span>
						<div className='flex pl-3'>
							<span>
								<FaTelegram />
							</span>
							<span className='pl-3'>
								<FaInstagram />
							</span>
							<span className='pl-3'>
								<FaFacebook />
							</span>
							<span className='pl-3'>
								<FaYoutube />
							</span>
						</div>
					</span>
				</div>
			</nav>
		</div>
	)
}
