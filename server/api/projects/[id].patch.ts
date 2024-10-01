import { useValidatedParams, zh } from 'h3-zod'
import { projectActions } from '~~/server/services/db/ProjectAction'

export default defineEventHandler(async (event) => {
	const { id } = await useValidatedParams(event, {
		id: zh.intAsString,
	})

	// const {  } = await useValidatedBody(event, {
	// 	completed: z.number().int().min(0).max(1),
	// })

	const body = await readBody(event)

	const updatedProject = await projectActions.updateProject(id, body)
	return updatedProject
})
