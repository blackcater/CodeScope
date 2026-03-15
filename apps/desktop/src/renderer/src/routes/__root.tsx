import { Outlet } from '@tanstack/react-router'

import { Providers } from '../components/providers'

export function RootComponent(): React.JSX.Element {
	return (
		<Providers>
			<Outlet />
		</Providers>
	)
}
