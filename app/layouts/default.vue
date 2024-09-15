<script setup></script>

<template>
	<UContainer :ui="{ constrained: 'max-w-5xl' }">
		<AppHeader />
		<main class="flex flex-col py-8 gap-y-12">
			<slot />
		</main>
		<AppFooter />
	</UContainer>
</template>

<style></style>
