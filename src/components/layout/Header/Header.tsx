import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsBellFill, BsBookmarkFill, BsPersonFill, BsSearch } from 'react-icons/bs';

import Input from '@/components/ui/inputs/Input/Input';

import styles from './Header.module.scss';
import { menuData } from './menu.data';

export const Header = () => {
	const { asPath } = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles['header-container']}>
				<Link className={styles['logo-container']} href='/'>
					<Image alt='logo' height={64} src='/logo.png' width={64} />
					<span>youmiteru</span>
				</Link>
				<ul className={styles['menu-container']}>
					{menuData.map((item) => (
						<Link key={item.link} href={item.link}>
							<li
								className={cn({
									[styles.active]: asPath === item.link
								})}
							>
								{item.label}
							</li>
						</Link>
					))}
				</ul>
				<div className={styles['input-container']}>
					<Input icon={BsSearch} placeholder='Enter a request' />
				</div>
				<div className={styles['icons-container']}>
					<Link href='/favorites'>
						<BsBookmarkFill size={14} />
					</Link>
					<Link href='/notifications'>
						<BsBellFill size={14} />
					</Link>
					<Link href='/register'>
						<BsPersonFill size={18} />
					</Link>
				</div>
			</div>
		</header>
	);
};
