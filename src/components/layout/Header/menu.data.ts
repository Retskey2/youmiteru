interface IMenuItem {
	label: string;
	link: string;
}

export const menuData: IMenuItem[] = [
	{ label: 'Главная', link: '/' },
	{ label: 'Сериалы', link: '/series ' },
	{ label: 'Фильмы', link: '/films ' },
	{ label: 'Радио', link: '/radio' },
	{ label: 'Новости', link: '/news ' }
];
