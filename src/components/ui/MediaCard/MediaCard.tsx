import cn from 'classnames';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import React from 'react';

import styles from './MediaCard.module.scss';

interface Props {
	imageUrl: string;
	title: string;
	className?: string;
	subtitle?: string;
}

const MediaCard: React.FC<Props> = ({ imageUrl, title, subtitle, className }) => {
	const [hovered, setHovered] = React.useState(false);

	return (
		<div
			className={cn(styles['image-card-container'], className)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<Image alt={title} height={200} src={imageUrl} width={200} />
			{hovered && (
				<div className={styles.glass}>
					<h2>{title}</h2>
					{subtitle && <p>{subtitle}</p>}
				</div>
			)}
		</div>
	);
};

export default MediaCard;
