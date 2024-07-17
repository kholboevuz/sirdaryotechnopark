/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import logo_white from '../_assets/images/logo/logo-whites.png'

export function MenuBar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline'>
					<FaBars />
				</Button>
			</SheetTrigger>
			<SheetContent className='bg-blue text-white dark:bg-gray-900 flex flex-col'>
				<SheetHeader>
					<SheetDescription>
						<Image
							className='w-100 mx-auto mt-3'
							src={logo_white}
							alt={'Logo white'}
							width={300}
						/>
						<h1 className='text-2xl text-center font-bold pb-4 pt-4'>
							RASMIY VEB-SAYTI
						</h1>
						<hr />
					</SheetDescription>
				</SheetHeader>
				<div className='flex-grow grid gap-4 py-4'>
					<div className='grid grid-cols-1 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						<Link href='/about'>Biz haqimizda</Link>
					</div>

					<div className='grid grid-cols-1 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						Yangiliklar
					</div>
					<div className='grid grid-cols-1 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						Xalqaro aloqalar
					</div>
					<div className='grid grid-cols-1 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						Tanlovlar
					</div>
					<div className='grid grid-cols-1 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						Nashrlar
					</div>
					<div className='grid grid-cols-1 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						Tadbirlar
					</div>
					<div className='grid grid-cols-2 text-2xl items-center hover:text-info cursor-pointer gap-4'>
						Aloqa
					</div>
				</div>
				<SheetFooter className='mt-auto'>
					<SheetClose asChild>
						<p className='text-center'>
							<hr className='pb-3' />
							"Innovatsion texnopark – Yoshlar uchun imkoniyatlar maskani!"
						</p>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
