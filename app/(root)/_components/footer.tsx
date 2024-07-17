/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Logo from '../_assets/images/logo/logo-whites.png'
export default function Footer() {
	return (
		<div className='bg-blue dark:bg-gray-900'>
			<footer>
				<div className='w-full  p-4 py-6 lg:py-8'>
					<h2 className='mb-6 text-white font-semibold text-center uppercase dark:text-white'>
						"Innovatsion texnopark – Yoshlar uchun imkoniyatlar maskani!"
					</h2>
					<hr className=' border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
					<div className='w-4/5 mx-auto md:flex md:justify-between'>
						<div className='mb-6 md:mb-0'>
							<a href='/'>
								<Image src={Logo} alt='Picture of the author' width={250} />
							</a>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.5619116538214!2d68.77823247655105!3d40.50706955013504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20786fad1fc55%3A0xed271e381b97e2cd!2sSirdaryo%20viloyati%20Yoshlar%20Texnoparki!5e0!3m2!1sen!2s!4v1716930750130!5m2!1sen!2s'
								width={450}
								height={300}
								style={{ border: 1 }}
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								className='pt-4'
							/>
						</div>
						<div className=' grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
							<div className=' '>
								<h2 className='mb-6 text-white font-semibold  uppercase dark:text-white'>
									Texnopark
								</h2>
								<ul className='text-white dark:text-gray-400 font-medium'>
									<li className='mb-4'>
										<a href='/' className='hover:underline mb-4'>
											Yangiliklar
										</a>
									</li>
									<li className='mb-4'>
										<a href='/' className='hover:underline mb-4'>
											Mediatika
										</a>
									</li>
									<li className='mb-4'>
										<a href='/' className='hover:underline mb-4'>
											Biz haqimizda
										</a>
									</li>
									<li className='mb-4'>
										<a href='/' className='hover:underline mb-4'>
											Aloqa
										</a>
									</li>
									<li className='mb-4'>
										<a href='/' className='hover:underline mb-4'>
											Xalqaro aloqalar
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-6 text-white font-semibold  uppercase dark:text-white'>
									Bog'lanish
								</h2>
								<ul className='text-white dark:text-gray-400 font-medium'>
									<li className='mb-4'>
										<a
											href='https://github.com/themesberg/flowbite'
											className='hover:underline '
										>
											Idora: 90 8631404
										</a>
									</li>
									<li className='mb-4'>
										<a
											href='https://discord.gg/4eeurUVvTy'
											className='hover:underline'
										>
											Murojaat uchun: 91 1782378
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-6 text-white font-semibold  uppercase dark:text-white'>
									Manzil
								</h2>
								<ul className='text-white dark:text-gray-400 font-medium'>
									<li className='mb-4'>
										<a href='#' className='hover:underline'>
											Sirdaryo viloyati Guliston shahri <br /> 4-mavze Guliston
											ko'chasi 1-uy
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
					<div className='sm:flex sm:items-center sm:justify-between'>
						<span className='text-white  sm:text-center dark:text-gray-400'>
							© 2024 Barcha huquqlar himoyalangan.
						</span>
						<div className='flex mt-4 sm:justify-center sm:mt-0'>
							<span className='text-white  sm:text-center dark:text-gray-400'>
								Sayt ishlab chiquvchisi:
								<a
									href='https://t.me/Kholboev_uz'
									className='text-info hover:underline pl-1'
								>
									Sevinchbek Xolboyev
								</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
