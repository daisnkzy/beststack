import { projectActions } from '~~/server/services/db/ProjectAction'

export default defineEventHandler(async () => {
	const todos = await projectActions.getAllProjects()
	return todos
})
