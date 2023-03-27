import React, { FC } from 'react';

import styles from './Button.module.scss';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps {
	/**
	 * label
	 */
	label: string;
	/**
	 * start icon
	 */
	startIcon: React.ReactNode;
	/**
	 * end Icon
	 */
	endIcon: React.ReactNode;
	/**
	 * loading
	 */
	loading?: boolean;
	/**
	 * variants
	 */
	variant?: ButtonVariant;
	/**
	 * size
	 */
	size?: ButtonSize;
	/**
	 * background color
	 */
	backgroundColor?: string;
	/**
	 * click event
	 */
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	label,
	loading,
	size = 'medium',
	backgroundColor,
	variant = 'contained',
	onClick,
	...props
}) => (
	<button
		type='button'
		className={styles.button}
		onClick={onClick}
		style={{ backgroundColor }}
		{...props}
	>
		{label}
	</button>
);

export default Button;
