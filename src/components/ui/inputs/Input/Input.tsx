import React, { useState } from 'react';
import { IconType } from 'react-icons';

import styles from './Input.module.scss';

interface Props {
	placeholder: string;
	icon?: IconType;
}

const Input: React.FC<Props> = ({ placeholder, icon: Icon }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	return (
		<div className={styles['input-container']}>
			<input
				placeholder={placeholder}
				type='text'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<div className={styles['icon-container']}>{Icon && <Icon />}</div>
		</div>
	);
};

export default Input;
