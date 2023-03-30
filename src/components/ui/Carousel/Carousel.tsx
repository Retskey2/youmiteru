import cn from 'classnames';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import MediaCard from '../MediaCard/MediaCard';

import { IMediaItem } from './Carousel.interface';
import styles from './Carousel.module.scss';

interface ICarousel {
	items: IMediaItem[];
	label?: string;
}

const Carousel: React.FC<ICarousel> = ({ items, label }) => {
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		breakpoints: {
			'(max-width: 580px)': {
				slides: {
					perView: 2
				}
			},
			'(max-width: 768px)': {
				slides: {
					perView: 3
				}
			},
			'(max-width: 1024px)': {
				slides: {
					perView: 4
				}
			}
		},
		initial: 0,
		loop: true,
		mode: 'snap',
		slides: {
			origin: 'auto',
			perView: 6,
			spacing: 20
		}
	});

	return (
		<div className={styles.carousel}>
			<div className={styles['carousel-container']}>
				<div className={styles['label-container']}>
					<span>{label}</span>
					<div className={styles.handlers}>
						<span>Смотреть всё</span>
						<button onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}>
							{'<'}
						</button>
						<button onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}>
							{'>'}
						</button>
					</div>
				</div>
				<div ref={sliderRef} className={cn('keen-slider', styles['media-cards-container'])}>
					{items.map((item) => (
						<MediaCard
							key={item.title + Math.random()}
							className='keen-slider__slide'
							imageUrl={item.imageUrl}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
