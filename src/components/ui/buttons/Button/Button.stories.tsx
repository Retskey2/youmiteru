import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './Button';

export default {
	component: Button,
	title: 'ui/buttons/Button'
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});

Primary.args = {
	label: 'Button',
	size: 'medium',
	variant: 'contained'
};
