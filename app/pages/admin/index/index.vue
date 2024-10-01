<script setup>
	import { useFetch } from '#app'
	import { ref } from 'vue'

	const { data: projects, refresh } = await useFetch('/api/projects')

	const newProject = ref({
		name: '',
		description: '',
		developer_name: '',
		mrr: '',

		frontend: '',
		backend: '',
		deployment_provider: '',
		database: '',
		orm: '',
		payment_provider: '',
	})

	const handleAddProject = async () => {
		await $fetch('/api/projects', {
			method: 'POST',
			body: newProject.value,
		})
		refresh() // 刷新项目列表
		// newProject.value = {
		// 	name: '',
		// 	description: '',
		// 	developer_name: '',
		// 	mrr: '',
		// } // 重置表单
	}
</script>

<template>
	<template>
		<div>
			<h1>项目列表</h1>
			<ul>
				<li v-for="project in projects" :key="project.id">
					{{ project.name }}
				</li>
			</ul>

			<form @submit.prevent="handleAddProject" class="space-y-4">
				<UInput v-model="newProject.name" placeholder="项目名称" />
				<UInput v-model="newProject.description" placeholder="项目描述" />
				<UInput v-model="newProject.developer_name" placeholder="开发者" />
				<UInput v-model="newProject.mrr" placeholder="MRR" />
				<UInput v-model="newProject.frontend" placeholder="前端框架" />
				<UInput v-model="newProject.backend" placeholder="后端框架" />
				<UInput
					v-model="newProject.deployment_provider"
					placeholder="部署提供商"
				/>
				<UInput v-model="newProject.database" placeholder="数据库" />
				<UInput v-model="newProject.orm" placeholder="ORM" />
				<UInput
					v-model="newProject.payment_provider"
					placeholder="支付提供商"
				/>
				<UButton type="submit">添加项目</UButton>
			</form>
		</div>
	</template>
</template>
