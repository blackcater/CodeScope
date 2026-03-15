import { Provider as JotaiProvider } from 'jotai/react'

export interface ProvidersProps {
	children: React.ReactNode
}

export function Providers({ children }: Readonly<ProvidersProps>) {
	return <JotaiProvider>{children}</JotaiProvider>
}
