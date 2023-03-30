import { cva } from 'class-variance-authority';
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
	startIcon?: React.ReactNode;
	/**
	 * end Icon
	 */
	endIcon?: React.ReactNode;
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
	 * click event
	 */
	onClick?: () => void;
}

const classNames = cva(styles.button, {
	variants: {
		size: {
			medium: 'min-h-[60px] py-[18px] px-[24px]',
			small: 'py-[6px] px-[20px]'
		},
		variant: {
			contained: 'border-primary bg-primary text-white hover:border-grey hover:bg-grey',
			outlined: 'border-secondary hover:border-primary'
		}
	}
});

const Button: FC<ButtonProps> = ({
	label,
	loading = false,
	size = 'medium',
	variant = 'contained',
	onClick,
	...props
}) => (
	<button className={classNames({ size, variant })} type='button' onClick={onClick} {...props}>
		{loading && <div />}
		{label}
	</button>
);

export default Button;
