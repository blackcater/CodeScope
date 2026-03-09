import { populateContractRouterPaths } from '@orpc/contract'

import { appContracts } from './app'
import { systemContracts } from './system'

/**
 * Main contract that aggregates all procedure contracts.
 * Uses flat structure for simpler client access.
 * Use this to create the router implementation and client.
 */
export const contracts = populateContractRouterPaths({
	...systemContracts,
	...appContracts,
})

// Re-export individual contracts for type inference
export { systemContracts, appContracts }
