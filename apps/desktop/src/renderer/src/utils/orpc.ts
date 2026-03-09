import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/message-port'

import { type ORPCClient } from '@/orpc/router'
import { contracts } from '~/contracts'

/**
 * Creates an oRPC client connected via MessageChannel.
 * The client communicates with the main process through IPC.
 */
function createClient(): ORPCClient {
	const { port1: clientPort, port2: serverPort } = new MessageChannel()

	// Send serverPort to preload, which will forward to main process
	window.postMessage('start-orpc-client', '*', [serverPort])

	const link = new RPCLink({ port: clientPort })

	clientPort.start()

	// Create client with contract
	// @ts-expect-error - The orpc type system has some quirks with MessageChannel
	return createORPCClient(contracts, link)
}

/**
 * Type-safe oRPC client for renderer process.
 * All procedure calls are fully typed based on the contract.
 */
export const orpc = createClient()
