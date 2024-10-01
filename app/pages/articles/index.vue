<template>
	<main class="min-h-screen">
		<ul class="space-y-16">
			<li v-for="(article, id) in articles" :key="id">
				<AppArticleCard :article="article" />
			</li>
		</ul>
	</main>
</template>

<script setup>
	const description =
		'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.'
	useSeoMeta({
		title: 'Articles | taosir',
		description,
	})

	const { data: articles } = await useAsyncData('all-articles', () =>
		queryContent('/articles').sort({ published: -1 }).find()
	)
</script>
