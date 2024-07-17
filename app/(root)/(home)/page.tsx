import { CarouselHome } from '../_components/_home/Carousel'
import ChoicesCard from '../_components/_home/Choices'
import { Loading } from '../_components/_home/Progress'

export default function HomePage() {
	return (
		<div>
			<Loading />
			<CarouselHome />
			<ChoicesCard />
		</div>
	)
}
