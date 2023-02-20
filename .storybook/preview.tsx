import React from 'react';
import 'tailwindcss/tailwind.css';

import '@styles/global.css';
import localFont from '@next/font/local';
import { Roboto } from '@next/font/google';
const fontRoboto = Roboto({
	weight: ['400', '500'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-roboto',
});
const fontIcon = localFont({
	src: [
		{
			path: '../fonts/fontello.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-demo',
});
export const parameters = {
	backgrounds: {
		default: 'light',
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<main className={`${fontRoboto.variable} ${fontIcon.variable} font-sans`}>
			<Story />
		</main>
	),
];
