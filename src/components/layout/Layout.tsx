import React, { FC, PropsWithChildren } from 'react';

import { Header } from './Header/Header';

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);

export default Layout;
