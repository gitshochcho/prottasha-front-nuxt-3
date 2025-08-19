<template>
	<!-- Success Story Content Section -->
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 font-bangla" style="background: linear-gradient(180deg, #d8fff8 0%, #fff 100%)">
		<div class="">
			<div class="grid pt-4 md:pt-0 grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Left Content -->
				<div class="space-y-6">
					<h2 class="text-3xl md:text-4xl font-bold text-teal-600 mb-6">তানিয়ার গল্প</h2>

					<p class="text-gray-700 leading-relaxed text-lg">
						তানিয়ার উন্নতি এবং সফলতা দিয়ে পরিচিত হিসেবে আমরা গর্বিত সম্পৃক্ত থাকতে পারি। তার বিশেষ দক্ষতা এবং প্রতিভা দেখে আমরা তার ভবিষ্যতের আরও
						উজ্জ্বল হওয়ার বিষয়।
					</p>
				</div>

				<!-- Right Video/Image Section -->
				<div class="relative">
					<div class="relative rounded-2xl overflow-hidden shadow-2xl">
						<SuccessStoryVideoPlayer :videoSliderList="yourVideoData" :maxWidth="'100%'" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const yourVideoData = ref([
		{
			id: 1,
			hl: "Prottaysha | Donation Management System",
			img: "/images/stories/videostory.png",
			url: "https://www.youtube.com/embed/9pqdJ5Qmfn4?si=YoeaubtKd3OcDwET",
		},
	])
</script>

<style lang="scss" scoped>
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.animate-pulse {
		animation: pulse 2s infinite;
	}
</style>
