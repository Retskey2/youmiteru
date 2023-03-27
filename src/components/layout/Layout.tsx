import React, { FC, PropsWithChildren } from 'react';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
