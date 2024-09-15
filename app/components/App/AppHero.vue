<script setup></script>

<template>
	<section class="flex flex-col items-center mb-4">
		<div class="flex flex-col items-center max-w-xl mb-4 text-center gap-y-2">
			<UBadge color="gray" variant="soft">3 new tools added</UBadge>
			<h1 class="text-3xl font-semibold tracking-tight md:text-4xl">
				Discover the Tech Stacks Behind the Most Profitable Indie Projects
			</h1>
			<h2 class="md:text-lg text-[#262626b3] dark:text-[#dededeb3]">
				Explore a handpicked selection of the technologies powering successful
				indie development projects and see what makes them thrive.
			</h2>
		</div>

		<div class="w-full max-w-sm">
			<UInput
				size="lg"
				placeholder="Your email Here"
				:ui="{ icon: { trailing: { pointer: '' } } }"
			>
				<template #trailing>
					<UButton class="-mr-2 cursor-pointer">Join our community</UButton>
				</template>
			</UInput>
		</div>
	</section>
</template>
