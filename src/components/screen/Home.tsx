import { FC } from 'react';

import Carousel from '../ui/Carousel/Carousel';

const Home: FC = () => (
	<div>
		<Carousel
			label='Последние обновления'
			items={[
				{
					description: 'description',
					imageUrl: '/img/cardChainsaw.webp',
					subtitle: 'subtitle',
					title: 'Chainsaw'
				},
				{
					description: 'description',
					imageUrl: '/img/cardAimer.webp',
					subtitle: 'subtitle',
					title: 'Aimer'
				},
				{
					description: 'description',
					imageUrl: '/img/cardChainsaw.webp',
					subtitle: 'subtitle',
					title: 'Chainsaw'
				},
				{
					description: 'description',
					imageUrl: '/img/cardChainsaw.webp',
					subtitle: 'subtitle',
					title: 'Chainsaw'
				},
				{
					description: 'description',
					imageUrl: '/img/cardChainsaw.webp',
					subtitle: 'subtitle',
					title: 'Chainsaw'
				},
				{
					description: 'description',
					imageUrl: '/img/cardAimer.webp',
					subtitle: 'subtitle',
					title: 'Aimer'
				},
				{
					description: 'description',
					imageUrl: '/img/cardChainsaw.webp',
					subtitle: 'subtitle',
					title: 'Chainsaw'
				},
				{
					description: 'description',
					imageUrl: '/img/cardAimer.webp',
					subtitle: 'subtitle',
					title: 'Aimer'
				}
			]}
		/>
	</div>
);

export default Home;
