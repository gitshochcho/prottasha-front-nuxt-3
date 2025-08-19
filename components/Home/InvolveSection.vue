<template>
	<div class="relative overflow-hidden" style="background-image: url('/images/slider/background-3.png');">
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-10">
			<!-- You can add background pattern images here if needed -->
		</div>

		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 relative z-10">
			<!-- Header Section -->
			<div class="text-center mb-12">
				<div class="mb-4">
					<span class="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">যুক্ত হোন</span>
				</div>

				<h1 class="text-4xl font-bold mb-6 text-white">
					আপনি কি সমাজে পরিবর্তন আনতে চান?<br />
					<span class="text-yellow-400">আমাদের সাথে কাজ করুন</span>
				</h1>

				<p class="text-white/90 max-w-2xl mx-auto leading-relaxed">
					আপনি যদি মানবিক সমাজ গঠনের স্বপ্ন দেখেন—তাহলে আমাদের সঙ্গে কাজ করাই হতে পারে আপনার পরবর্তী অর্থবহ পদক্ষেপ।
				</p>
			</div>

			<!-- Involvement Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Become a Volunteer -->
				<div class="bg-[#225D4E] backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="text-center mb-6">
						<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="pi pi-users text-black text-xl"></i>
						</div>

						<h3 class="text-xl font-bold text-white mb-3"> স্বেচ্ছাসেবক হোন</h3>
						<p class="text-white/80 text-sm mb-6">আপনার সময় ও যোগ্যতা দিয়ে পাশে থাকুন</p>
					</div>

					<!-- Benefits List -->
					<div class="space-y-3 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">ফ্লেক্সিবল সময়সূচী</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">দক্ষতা উন্নয়ন</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">সামাজিক অবদান</span>
						</div>
					</div>

					<button
						class="w-full bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
						যুক্ত হোন →
					</button>
				</div>

				<!-- Join Professional Positions -->
				<div class="bg-[#225D4E] backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="text-center mb-6">
						<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="pi pi-briefcase text-black text-xl"></i>
						</div>

						<h3 class="text-xl font-bold text-white mb-3">পেশাগত পদে আবেদন করুন</h3>
						<p class="text-white/80 text-sm mb-6">ক্যারিয়ার গড়ুন, পরিবর্তন আনুন</p>
					</div>

					<!-- Benefits List -->
					<div class="space-y-3 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">প্রতিযোগিতামূলক বেতন</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">পেশাগত উন্নয়ন</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">কর্মতৃপ্তি</span>
						</div>
					</div>

					<button
						class="w-full bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
						আবেদন করুন  →
					</button>
				</div>

				<!-- Donate -->
				<div class="bg-[#225D4E] backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="text-center mb-6">
						<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="pi pi-heart text-black text-xl"></i>
						</div>

						<h3 class="text-xl font-bold text-white mb-3">দান করুন</h3>
						<p class="text-white/80 text-sm mb-6"> আর্থিক সহায়তা দিন, আমাদের পাশে থাকুন</p>
					</div>

					<!-- Benefits List -->
					<div class="space-y-3 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">স্বচ্ছ ব্যয়</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">নিয়মিত প্রতিবেদন</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">সরাসরি প্রভাব</span>
						</div>
					</div>

					<button
						class="w-full bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
						দান করুন →
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// No additional script needed for this component
</script>

<style scoped>
	.font-bangla {
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}
</style>
