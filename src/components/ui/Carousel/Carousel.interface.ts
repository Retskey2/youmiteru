export interface ICarousel {
	mediaItems: IMediaItem[];
}

export interface IMediaItem {
	imageUrl: string;
	title: string;
	subtitle?: string;
	description?: string;
}
