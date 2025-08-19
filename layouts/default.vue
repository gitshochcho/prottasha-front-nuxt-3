<template>
	<div>
		<!-- This is Homepage Layout  -->
		<AppHeaderGuest />
		<div :class="['pt-20 pb-8  transition-all duration-100 bg-white dark:bg-gray-900']">
			<slot />
		</div>
		<AppFooterGuest />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
