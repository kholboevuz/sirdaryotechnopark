/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselHome() {
	const items = [
		{
			src: '../images/slider_1.jpg',
			title: 'Title 1',
			description: 'Description 1',
		},
		{
			src: '../images/slider_1.jpg',
			title: 'Title 2',
			description: 'Description 2',
		},
		{
			src: '../images/slider_1.jpg',
			title: 'Title 3',
			description: 'Description 3',
		},
		{
			src: '../images/slider_1.jpg',
			title: 'Title 4',
			description: 'Description 4',
		},
		{
			src: '../images/slider_1.jpg',
			title: 'Title 5',
			description: 'Description 5',
		},
	]

	return (
		<Carousel className='w-4/5 mx-auto'>
			<CarouselContent>
				{items.map((item, index) => (
					<CarouselItem key={index}>
						<div className='p-1 h-full'>
							<Card className='h-full'>
								<CardContent className='flex flex-col h-full items-center justify-center p-4'>
									<img
										src={item.src}
										alt={`Carousel item ${index + 1}`}
										className='w-[100] h-[50] object-contain mb-4 '
									/>
									<h3 className='text-lg font-bold mb-2'>{item.title}</h3>
									<p className='text-sm text-gray-600'>{item.description}</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
