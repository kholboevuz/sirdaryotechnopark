import { ThemeProvider } from '@/components/theme-provider'
import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import SideBar from './_components/sideBar'
export default function Layout({ children }: ChildProps) {
	return (
		<div>
			<ThemeProvider
				attribute='class'
				defaultTheme='light'
				enableSystem
				disableTransitionOnChange
			>
				<Navbar />
				<SideBar />

				{children}
				<Footer />
			</ThemeProvider>
		</div>
	)
}
