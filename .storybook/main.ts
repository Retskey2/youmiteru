import { StorybookConfig } from '@storybook/core-common';
import * as path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss')
				}
			}
		}
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5'
	},
	webpackFinal: (config) => {
		if (config.resolve && config.module?.rules) {
			config.module.rules.push({
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			});

			config.resolve.alias = {
				...config.resolve.alias,
				'@/utils/helpers': path.resolve(__dirname, '../src/utils/helpers')
			};
		}

		return config;
	}
};

export default config;
