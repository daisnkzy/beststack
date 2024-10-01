import { projectActions } from '~~/server/services/db/ProjectAction'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const newProject = await projectActions.addProject(body)
	return newProject
})
