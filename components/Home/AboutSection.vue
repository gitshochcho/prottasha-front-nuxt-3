<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
		<div class="flex flex-col lg:flex-row gap-8">
			<!-- About Us Section -->
			<div class="flex-1">
				<!-- About Content -->
				<div class="flex flex-col lg:flex-row gap-6">
					<!-- Text Content -->
					<div class="lg:w-1/2">
						<div class="mb-4">
							<span class="bg-[#F8EFD3] text-[#1F5747] px-3 py-1 rounded-full text-sm font-medium">আমাদের সম্পর্কে</span>
						</div>

						<h1 class="text-2xl font-bold mb-4">
							<span class="text-[#020039]">আমরা কে</span>
						</h1>

						<p class="text-gray-600 mb-4 leading-relaxed">
							‘প্রত্যাশা’ একটি মানবসেবা প্রতিষ্ঠান, যা সমাজের প্রতিবন্ধীদের জন্য একটি আর্দশ সবোমূলক র্কাযক্রম পরচিালতি করে। এই প্রতিষ্ঠানে একত্রিত
							হয়েছেন সমাজসেবক, চিকিৎসক, শিক্ষাবিদ, স্বেচ্ছাসেবক ও বিভিন্ন পেশার ব্যক্তি যারা একসঙ্গে কাজ করছেন সমাজের অবহেলিত ও অসহায় মানুষদের জীবনমান
							উন্নয়নের লক্ষ্যে।.
						</p>

						<p class="text-gray-600 mb-6 leading-relaxed">
							প্রতিষ্ঠানটির মূল লক্ষ্য হলো - প্রতিবন্ধী শিশু, কিশোর-কিশোরী, যুবক-যুবতী এবং বৃদ্ধদের জন্য একটি সম্মানজনক ও স্বনির্ভর অবস্থান নিশ্চিত কর
						</p>

                        <div class="mt-2">
                            <NuxtLink to="/about" class="bg-[#094C3B] hover:bg-teal-700 mt-4 text-white px-6 py-2 rounded-md transition-colors inline-block">
                                আরও জানুন...
                            </NuxtLink>
                        </div>
					</div>

					<!-- Video/Image Section with External Badge -->
					<div class="lg:w-1/2 relative">
						<!-- Years of Experience Badge (Outside, center-left) -->
						<div class="hidden md:block absolute top-12 -left-28 transform -translate-y-1/2 bg-[#F5C304] text-[#020039] p-4 rounded-lg shadow-lg z-20">
							<div class="text-center">
								<div class="text-2xl font-bold">১০+</div>
								<div class="text-sm font-medium">বছর অভিজ্ঞতা</div>
							</div>
						</div>

						<div class="relative rounded-lg overflow-hidden shadow-lg " >
							<SuccessStoryVideoPlayer :videoSliderList="yourVideoData" :maxWidth="'100%'" :maxHeight="'350px'"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="h-[1px] w-full bg-[#E0E0E0]"></div>
</template>

<script setup>
	const selected = ref(null)
    const yourVideoData = ref([
		{
			id: 1,
			hl: "Prottaysha | Donation Management System",
			img: "/images/banner/banner-about.png",
			url: "https://www.youtube.com/embed/9pqdJ5Qmfn4?si=YoeaubtKd3OcDwET",
		},
	])
</script>

<style scoped>
	
</style>
