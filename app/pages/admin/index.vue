<template>
	<div class="relative flex flex-col w-full isolate min-h-svh">
		<AdminHeader />
		<main class="flex flex-col flex-1 pb-2 lg:px-2">
			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: 'admin',
		layout: 'admin',
	})

	// const { data: store } = await useFetch("/api/admin/store");
</script>
