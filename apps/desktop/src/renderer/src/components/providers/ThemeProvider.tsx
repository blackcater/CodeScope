'use client'

import {
	ThemeProvider as NextThemesProvider,
	type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({
	children,
	...props
}: Readonly<ThemeProviderProps>) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			storageKey="acme-theme"
			enableSystem
			{...props}
		>
			{children}
		</NextThemesProvider>
	)
}
