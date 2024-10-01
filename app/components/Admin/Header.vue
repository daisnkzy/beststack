<script setup>
	const { clear, fetch: refreshSession } = useUserSession()

	const logout = async () => {
		await clear()
		await refreshSession()
		return navigateTo('/')
	}
</script>

<template>
	<header class="flex items-center justify-between px-4">
		<h1 class="mb-4 text-3xl">Admin Pannel</h1>
		<div class="mb-2">
			<UButton
				label="Logout"
				variant="solid"
				color="gray"
				size="lg"
				@click="logout"
			/>
		</div>
	</header>
	<UDivider />
</template>
