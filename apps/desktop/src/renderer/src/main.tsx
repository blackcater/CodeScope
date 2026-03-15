import { StrictMode } from 'react'

import { RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'

import { createRouter } from './router'
import '@acme/ui/styles.css'

const router = createRouter()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
