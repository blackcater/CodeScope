import { Provider as JotaiProvider } from 'jotai/react'

import { ThemeProvider } from './ThemeProvider'

export interface ProvidersProps {
	children: React.ReactNode
}

export function Providers({ children }: Readonly<ProvidersProps>) {
	return (
		<ThemeProvider>
			<JotaiProvider>{children}</JotaiProvider>
		</ThemeProvider>
	)
}
