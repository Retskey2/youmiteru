import type { AppProps } from 'next/app';

import Layout from '@/components/layout/Layout';

import '../assets/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
);

export default App;
