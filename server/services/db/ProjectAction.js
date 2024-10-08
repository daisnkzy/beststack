class ProjectActions {
	// 如果get()返回的是对象，不是数组。不要使用解构赋值 []
	async getAllProjects() {
		try {
			const projects = await useDrizzle().select().from(tables.projects).all()

			return projects || null
		} catch (error) {
			console.log(error)
			return null
		}
	}

	async addProject(body) {
		try {
			const newProject = await useDrizzle()
				.insert(tables.projects)
				.values({
					name: body.name,
					description: body.description,
					developer_name: body.developer_name,
					mrr: body.mrr,

					frontend: body.frontend,
					backend: body.backend,
					deployment_provider: body.deployment_provider,
					database: body.database,
					orm: body.orm,
					payment_provider: body.payment_provider,
				})
				.returning()
				.get()
			return newProject || null
		} catch (error) {
			console.log(error)
			return null
		}
	}

	async deleteProject(id) {
		try {
			const deletedProject = await useDrizzle()
				.delete(tables.projects)
				.where(eq(tables.projects.id, id))
				.returning()
				.get()

			return deletedProject || null
		} catch (error) {
			console.log('Error deleting todo with ID:', error)
			return null
		}
	}

	async updateProject(id, body) {
		try {
			const updatedProject = await useDrizzle()
				.update(tables.projects)
				.set({
					name: body.name,
					description: body.description,
					developer_name: body.developer_name,
					mrr: body.mrr,

					frontend: body.frontend,
					backend: body.backend,
					deployment_provider: body.deployment_provider,
					database: body.database,
					orm: body.orm,
					payment_provider: body.payment_provider,
				})
				.where(eq(tables.projects.id, id))
				.returning()
				.get()
			return updatedProject || null
		} catch (error) {
			console.log(error)
			return null
		}
	}
}

export const projectActions = new ProjectActions()
