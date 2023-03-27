import React from 'react';

import Button from '@/components/ui/buttons/Button/Button';

import styles from './Header.module.scss';

export const Header = () => (
	<header className={styles.header}>
		<Button onClick={() => {}} children='Войти' />
	</header>
);
