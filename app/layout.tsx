import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sirdaryo yoshlar texnoparki',
	description: 'Sirdaryo yoshlar texnoparki yoshlar uchun imkoniyatlar maskani',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
