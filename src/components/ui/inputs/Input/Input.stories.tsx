import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

import Input from './Input';

export default {
	component: Input,
	title: 'ui/inputs/Input'
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = InputTemplate.bind({});
Default.args = {
	placeholder: 'Placeholder'
};
export const WithIcon = InputTemplate.bind({});
WithIcon.args = {
	icon: FaSearch,
	placeholder: 'Placeholder'
};
