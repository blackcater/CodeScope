import { oc } from '@orpc/contract'
import { z } from 'zod'

/**
 * Greet contract - Returns a personalized greeting.
 * @input - name: The name to greet
 * @output - A greeting message string
 */
export const greetContract = oc
	.input(z.object({ name: z.string() }))
	.output(z.string())

/**
 * Divide contract - Performs division of two numbers.
 * @input - a: Dividend, b: Divisor (must not be zero)
 * @output - Result of a divided by b
 * @errors - Throws error when divisor is zero
 */
export const divideContract = oc
	.input(z.object({ a: z.number(), b: z.number() }))
	.output(z.number())

/**
 * App contract - Aggregates all application-related procedures.
 */
export const appContracts = {
	greet: greetContract,
	divide: divideContract,
}
