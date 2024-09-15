<script setup></script>

<template>
	<UCard>
		<template #header>
			<div class="flex flex-col gap-y-4">
				<div class="flex items-baseline justify-between">
					<span>[logo]</span>
					<h1 class="text-xl font-bold text-gray-900 dark:text-[#dedede]">
						Project Name
					</h1>
				</div>

				<p class="text-sm text-gray-600 dark:text-[#aaa]">
					A short description about the project goes here, providing a quick
					overview for the users.
				</p>
			</div>
		</template>

		<div class="flex items-center justify-between">
			<p class="text-gray-800 dark:text-[#aaa] flex items-center gap-x-1">
				<UIcon name="i-ri-twitter-x-line" class="w-3 h-3" />
				<span class="text-sm">John Doe</span>
			</p>
			<p class="text-sm text-gray-800 dark:text-[#aaa]">
				MRR:
				<span class="text-base dark:text-[#dedede] font-semibold">$5000</span>
			</p>
		</div>

		<template #footer>
			<div class="grid grid-cols-2 gap-x-12 gap-y-4">
				<div>
					<p class="text-gray-600 dark:text-[#aaa] text-xs">Front-end:</p>
					<span class="font-semibold text-gray-900 dark:text-[#dedede] text-sm"
						>Vue.js</span
					>
				</div>
				<div>
					<p class="text-gray-600 dark:text-[#aaa] text-xs">Back-end:</p>
					<span class="font-semibold text-gray-900 dark:text-[#dedede] text-sm"
						>Node.js</span
					>
				</div>
				<div>
					<p class="text-gray-600 dark:text-[#aaa] text-xs">Database:</p>
					<span class="font-semibold text-gray-900 dark:text-[#dedede] text-sm"
						>PostgreSQL</span
					>
				</div>
				<div>
					<p class="text-gray-600 dark:text-[#aaa] text-xs">ORM:</p>
					<span class="font-semibold text-gray-900 dark:text-[#dedede] text-sm"
						>Prisma</span
					>
				</div>
				<div>
					<p class="text-gray-600 dark:text-[#aaa] text-xs">Deployment:</p>
					<span class="font-semibold text-gray-900 dark:text-[#dedede] text-sm"
						>Vercel</span
					>
				</div>
				<div>
					<p class="text-gray-600 dark:text-[#aaa] text-xs">Payment:</p>
					<span class="font-semibold text-gray-900 dark:text-[#dedede] text-sm"
						>Stripe</span
					>
				</div>
			</div>
		</template>
	</UCard>
</template>
