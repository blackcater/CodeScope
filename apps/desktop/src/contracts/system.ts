import { oc } from '@orpc/contract'
import { z } from 'zod'

/**
 * Ping contract - Simple health check endpoint.
 * Returns "pong" to verify the server is responsive.
 */
export const pingContract = oc.output(z.string())

/**
 * GetAppInfo contract - Retrieves application information.
 * Returns metadata about the desktop application including name, version, and platform.
 */
export const getAppInfoContract = oc.output(
	z.object({
		name: z.string(),
		version: z.string(),
		platform: z.string(),
	})
)

/**
 * System contract - Aggregates all system-related procedures.
 */
export const systemContracts = {
	ping: pingContract,
	getAppInfo: getAppInfoContract,
}
