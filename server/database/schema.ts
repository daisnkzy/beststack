import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

// `projects` 表：存储项目信息
export const projects = sqliteTable('projects', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	description: text('description').notNull(),
	developer_name: text('developer_name').notNull(),
	mrr: text('mrr').notNull(),

	frontend: text('frontend'), // 前端框架
	backend: text('backend'), // 后端框架
	deployment_provider: text('deployment_provider'), // 部署服务商
	database: text('database'), // 数据库
	orm: text('orm'), // ORM 工具（如果有的话）
	payment_provider: text('payment_provider').notNull(), // 支付服务商
})

// `tech_stack` 表：存储技术栈信息（前端、后端、数据库等）
// const techStack = sqliteTable('tech_stack', {
// 	id: integer('id').primaryKey({ autoIncrement: true }),
// 	project_id: integer('project_id').references(() => projects.id), // 关联到 `projects` 表
// 	frontend: text('frontend'), // 前端框架
// 	backend: text('backend'), // 后端框架
// 	deployment_provider: text('deployment_provider'), // 部署服务商
// 	database: text('database'), // 数据库
// 	orm: text('orm'), // ORM 工具（如果有的话）
// 	payment_provider: text('payment_provider').notNull(), // 支付服务商
// })

// export const techStackRelations = relations(techStack, ({ one }) => ({
// 	project: one(projects, {
// 		fields: [techStack.project_id],
// 		references: [projects.id],
// 	}),
// }))
