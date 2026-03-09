import { useState } from 'react'

import { Button } from '@acme/ui/foundation'
import { ClaudeCode } from '@acme/ui/icons/agent'
import { Warp } from '@acme/ui/icons/app'

import { orpc } from './utils'

function App(): React.JSX.Element {
	const [result, setResult] = useState<string>('')

	const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

	const orpcPing = async (): Promise<void> => {
		const res = await orpc.ping()
		setResult(res)
	}

	const orpcGreet = async (): Promise<void> => {
		const res = await orpc.greet({ name: 'Acme' })
		setResult(res)
	}

	return (
		<>
			<h1>Acme UI</h1>
			<Button onClick={ipcHandle}>Send IPC</Button>
			<Button onClick={orpcPing}>orpc ping</Button>
			<Button onClick={orpcGreet}>orpc greet</Button>
			<p>Result: {result}</p>
			<ClaudeCode.Color size={32} />
			<Warp width={32} height={32} />
		</>
	)
}

export default App
