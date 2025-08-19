<script setup>
	// Initialize AOS when component mounts
	onMounted(() => {
		// Initialize AOS if it's available
		if (typeof AOS !== "undefined") {
			AOS.init({
				duration: 1000,
				once: true,
				offset: 100,
				easing: "ease-in-out",
			})
		}
	})
</script>

<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
		<!-- Header Section -->
		<div class="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
			<div class="flex flex-col items-start mb-6 lg:mb-0" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
				<div class="mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
					<span class="bg-orange-100 text-[#1F5747] px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-300">
						আমাদের অবকাঠামো
					</span>
				</div>

				<h1 class="text-2xl  font-bold mb-4 flex flex-col items-start gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
					<span
						class="text-gray-800 hover:text-teal-700 transition-colors duration-300"
						data-aos="slide-right"
						data-aos-duration="800"
						data-aos-delay="500">
						আমাদের অবকাঠামো
					</span>
					<span
						class="text-gray-800 hover:text-teal-700 transition-colors duration-300"
						data-aos="slide-right"
						data-aos-duration="800"
						data-aos-delay="600">
						সম্পর্কে জানুন
					</span>
				</h1>
			</div>

			<p
				class="text-gray-600 max-w-2xl text-left leading-relaxed hover:text-gray-800 transition-colors duration-300"
				data-aos="fade-left"
				data-aos-duration="1000"
				data-aos-delay="700">
				আমরা প্রতিবন্ধী ব্যক্তিদের জন্য এমন একটি সহযোগিতামূলক পরিকাঠামো গড়ে তুলেছি, যেখানে তাঁদের জীবনের প্রতিটি দিককে সমর্থন করার ব্যবস্থা আছে।
			</p>
		</div>

		<!-- Facilities Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
			<!-- Specialized School -->
			<div
				class="bg-white p-6 rounded-lg shadow-sm border relative hover:shadow-lg hover:scale-105 transition-all duration-500 group cursor-pointer"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="300">
				<div class="mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
					<div
						class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
						<img class="w-8 group-hover:scale-110 transition-transform duration-300" src="/svg/about/v1.svg" alt="Specialized School Icon" />
					</div>
				</div>

				<h3
					class="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300"
					data-aos="fade-right"
					data-aos-duration="600"
					data-aos-delay="500">
					বিশেষায়িত বিদ্যালয়
				</h3>

				<ul
					class="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="600">
					<li class="hover:text-teal-600 transition-colors duration-200">প্রতিবন্ধী শিশুদের জন্য বিশেষ শিক্ষা ব্যবস্থা</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• বিশেষ শিক্ষক</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• আধুনিক পাঠ্যক্রম</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• ব্যক্তিগত যত্ন</li>
				</ul>

				<img
					class="w-16 absolute bottom-0 right-0 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
					src="/svg/about/d1.svg"
					alt="Background decoration" />
			</div>

			<!-- Comprehensive Medical Center -->
			<div
				class="bg-white p-6 rounded-lg shadow-sm border relative hover:shadow-lg hover:scale-105 transition-all duration-500 group cursor-pointer"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="400">
				<div class="mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
					<div
						class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
						<img class="w-8 group-hover:scale-110 transition-transform duration-300" src="/svg/about/v2.svg" alt="Medical Center Icon" />
					</div>
				</div>

				<h3
					class="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300"
					data-aos="fade-right"
					data-aos-duration="600"
					data-aos-delay="600">
					চিকিৎসাকেন্দ্র
				</h3>

				<ul
					class="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="700">
					<li class="hover:text-teal-600 transition-colors duration-200">২৪/৭ চিকিৎসা সেবা ও জরুরি চিকিৎসা</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• জরুরি সেবা</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• বিশেষজ্ঞ চিকিৎসক</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• আধুনিক যন্ত্রপাতি</li>
				</ul>
				<img
					class="w-16 absolute bottom-0 right-0 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
					src="/svg/about/d2.svg"
					alt="Background decoration" />
			</div>

			<!-- Skills Development Center -->
			<div
				class="bg-white p-6 rounded-lg shadow-sm border relative hover:shadow-lg hover:scale-105 transition-all duration-500 group cursor-pointer"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="500">
				<div class="mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
					<div
						class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
						<img class="w-8 group-hover:scale-110 transition-transform duration-300" src="/svg/about/v3.svg" alt="Training Center Icon" />
					</div>
				</div>

				<h3
					class="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300"
					data-aos="fade-right"
					data-aos-duration="600"
					data-aos-delay="700">
					কারিগরি প্রশিক্ষণ কেন্দ্র
				</h3>

				<ul
					class="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="800">
					<li class="hover:text-teal-600 transition-colors duration-200">দক্ষতা উন্নয়ন ও পেশাগত প্রশিক্ষণ</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• হস্তশিল্প</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• কম্পিউটার প্রশিক্ষণ</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• উদ্যোক্তা উন্নয়ন</li>
				</ul>
				<img
					class="w-16 absolute bottom-0 right-0 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
					src="/svg/about/d3.svg"
					alt="Background decoration" />
			</div>

			<!-- Inclusive Living Facilities -->
			<div
				class="bg-white p-6 rounded-lg shadow-sm border relative hover:shadow-lg hover:scale-105 transition-all duration-500 group cursor-pointer"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="600">
				<div class="mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700">
					<div
						class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
						<img class="w-8 group-hover:scale-110 transition-transform duration-300" src="/svg/about/v4.svg" alt="Housing Icon" />
					</div>
				</div>

				<h3
					class="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300"
					data-aos="fade-right"
					data-aos-duration="600"
					data-aos-delay="800">
					নিরাপদ আবাসন
				</h3>

				<ul
					class="text-sm text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="900">
					<li class="hover:text-teal-600 transition-colors duration-200">স্বাচ্ছন্দ্যময় ও নিরাপদ থাকার ব্যবস্থা</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• পরিষ্কার পরিবেশ</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• পুষ্টিকর খাবার</li>
					<li class="hover:text-teal-600 transition-colors duration-200">• বিনোদন ব্যবস্থা</li>
				</ul>
				<img
					class="w-16 absolute bottom-0 right-0 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
					src="/svg/about/d4.svg"
					alt="Background decoration" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.font-bangla {
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}

	/* Additional animation styles */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	.group:hover .float-animation {
		animation: float 2s ease-in-out infinite;
	}

	/* Custom hover effects */
	.group:hover {
		transform: translateY(-5px);
	}

	/* Gradient background on hover */
	.group:hover::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%);
		border-radius: 0.5rem;
		z-index: -1;
	}
</style>
