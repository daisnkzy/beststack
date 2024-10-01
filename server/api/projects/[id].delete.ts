import { useValidatedParams, zh } from 'h3-zod'
import { projectActions } from '~~/server/services/db/ProjectAction'

export default defineEventHandler(async (event) => {
	const { id } = await useValidatedParams(event, {
		id: zh.intAsString,
	})

	const deletedProject = await projectActions.deleteProject(id)
	if (!deletedProject) {
		throw createError({ statusCode: 404, statusMessage: 'Todo not found' })
	}
	return deletedProject
})
