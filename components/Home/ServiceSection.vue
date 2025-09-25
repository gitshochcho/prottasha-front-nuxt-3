<script setup>
	
    const data = ref([])
	const isLoading = ref(false)

	const loadData = async () => {
		isLoading.value = true

		try {
			const apiData = await $fetchAdmin(`frontend-contents/slug`, {
				method: "GET",
				params: {
					slug: "homepage-service",
				},
			})
			data.value = apiData
            console.log('asdasd' ,data.value)
		} catch (e) {
			console.log(`the error message is ${e}`)
		} finally {
			isLoading.value = false
		}
	}
	
	onMounted(() => {
		// Initialize AOS if it's available
		if (typeof AOS !== "undefined") {
			AOS.init({
				duration: 1000,
				once: true,
				offset: 100,
				easing: "ease-in-out",
			})
		};
        loadData();
	})
</script>


<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
		<!-- Header Section -->
		<div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
			<div
				class="inline-block bg-yellow-100 text-[#1F5747] px-4 py-2 rounded-full text-sm font-medium mb-6  hover:bg-yellow-200 transition-colors duration-300"
				data-aos="zoom-in"
				data-aos-duration="600"
				data-aos-delay="200">
				আমাদের সেবা
			</div>
			<h1
				class="text-3xl md:text-2xl font-bold text-[#114F3F] mb-4  hover:text-teal-600 transition-colors duration-300"
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="300">
				{{data.title ? data.title : 'আমরা যা করি'}}
			</h1>
			<p
                v-html="data.description ? data.description : '<p>প্রত্যাশা একটি মানবিক সেবামূলক প্রতিষ্ঠান হিসেবে সমাজের অবহেলিত প্রতিবন্ধীদের জন্য বহুমাত্রিক সহায়তামূলক কার্যক্রম পরিচালনা করে।</p>'"
				class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed  hover:text-gray-800 transition-colors duration-300"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="400">
				
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
			<!-- চিকিৎসা সহায়তা ও পুনর্বাসন -->
			<div
				class="group cursor-pointer rounded-xl border hover:shadow-2xl hover:scale-105 transition-all duration-500"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="300">
				<div class="relative overflow-hidden rounded-xl h-64 mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
					<img
						src="/images/services/1.png"
						alt="চিকিৎসা সহায়তা ও পুনর্বাসন"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
					<div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
					<div class="absolute top-4 left-4" data-aos="slide-right" data-aos-duration="600" data-aos-delay="500">
						<div
							class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-heart-fill text-white text-lg group-hover:text-red-300 transition-colors duration-300"></i>
						</div>
					</div>
					<div class="absolute bottom-4 left-4 right-4" data-aos="slide-up" data-aos-duration="600" data-aos-delay="600">
						<h3 class="text-xl font-bold text-white  group-hover:text-yellow-200 transition-colors duration-300">
							চিকিৎসা সহায়তা ও পুনর্বাসন
						</h3>
					</div>
				</div>
				<div
					class="p-2 text-gray-600 text-sm leading-relaxed  group-hover:text-gray-800 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="700">
					<p class="mb-2 font-medium">প্রতিবন্ধী শিশু ও প্রাপ্তবয়স্কদের চিকিৎসা ও প্রতিরোধ কার্যক্রমের অংশগুলি:</p>
					<ul class="list-disc list-inside space-y-1 text-xs">
						<li class="hover:text-teal-600 transition-colors duration-200">ফিজিওথেরাপি চিকিৎসা</li>
						<li class="hover:text-teal-600 transition-colors duration-200">অকুপেশনাল থেরাপি</li>
						<li class="hover:text-teal-600 transition-colors duration-200">পুনর্বাসন কর্মসূচি</li>
					</ul>
				</div>
			</div>

			<!-- দুর্বলদের যত্ন -->
			<div
				class="group cursor-pointer rounded-xl border hover:shadow-2xl hover:scale-105 transition-all duration-500"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="400">
				<div class="relative overflow-hidden rounded-xl h-64 mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
					<img
						src="/images/services/2.png"
						alt="দুর্বলদের যত্ন"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
					<div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
					<div class="absolute top-4 left-4" data-aos="slide-right" data-aos-duration="600" data-aos-delay="600">
						<div
							class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-shield text-white text-lg group-hover:text-blue-300 transition-colors duration-300"></i>
						</div>
					</div>
					<div class="absolute bottom-4 left-4 right-4" data-aos="slide-up" data-aos-duration="600" data-aos-delay="700">
						<h3 class="text-xl font-bold text-white  group-hover:text-yellow-200 transition-colors duration-300">দুর্বলদের যত্ন</h3>
					</div>
				</div>
				<p
					class="p-2 text-gray-600 text-sm leading-relaxed  group-hover:text-gray-800 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="800">
					সবচেয়ে ঝুঁকিপূর্ণ অবস্থায় থাকা ব্যক্তিদের জন্য নিবেদিত সহায়তা ও সুরক্ষা সেবা, তাদের নিরাপত্তা, মর্যাদা এবং কল্যাণ নিশ্চিত করা।
				</p>
			</div>

			<!-- শিক্ষা ও প্রশিক্ষণ -->
			<div
				class="group cursor-pointer rounded-xl border hover:shadow-2xl hover:scale-105 transition-all duration-500"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="500">
				<div class="relative overflow-hidden rounded-xl h-64 mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
					<img
						src="/images/services/3.png"
						alt="শিক্ষা ও প্রশিক্ষণ"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
					<div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
					<div class="absolute top-4 left-4" data-aos="slide-right" data-aos-duration="600" data-aos-delay="700">
						<div
							class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-briefcase text-white text-lg group-hover:text-green-300 transition-colors duration-300"></i>
						</div>
					</div>
					<div class="absolute bottom-4 left-4 right-4" data-aos="slide-up" data-aos-duration="600" data-aos-delay="800">
						<h3 class="text-xl font-bold text-white  group-hover:text-yellow-200 transition-colors duration-300">শিক্ষা ও প্রশিক্ষণ</h3>
					</div>
				</div>
				<p
					class="p-2 text-gray-600 text-sm leading-relaxed  group-hover:text-gray-800 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="900">
					আইনী সহায়তা, অধিকার সুরক্ষা এবং কর্মসংস্থানের সুযোগ প্রদান যাতে ন্যায়বিচার ও অর্থবহ কাজের সমান প্রবেশাধিকার নিশ্চিত করা যায়।
				</p>
			</div>

			<!-- স্বাস্থ্য ও পুষ্টি সেবা -->
			<div
				class="group cursor-pointer rounded-xl border hover:shadow-2xl hover:scale-105 transition-all duration-500"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="600">
				<div class="relative overflow-hidden rounded-xl h-64 mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700">
					<img
						src="/images/services/4.png"
						alt="স্বাস্থ্য ও পুষ্টি সেবা"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
					<div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
					<div class="absolute top-4 left-4" data-aos="slide-right" data-aos-duration="600" data-aos-delay="800">
						<div
							class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-apple text-white text-lg group-hover:text-green-300 transition-colors duration-300"></i>
						</div>
					</div>
					<div class="absolute bottom-4 left-4 right-4" data-aos="slide-up" data-aos-duration="600" data-aos-delay="900">
						<h3 class="text-xl font-bold text-white  group-hover:text-yellow-200 transition-colors duration-300">স্বাস্থ্য ও পুষ্টি সেবা</h3>
					</div>
				</div>
				<div
					class="p-2 text-gray-600 text-sm leading-relaxed  group-hover:text-gray-800 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="1000">
					<p class="mb-2 font-medium">নিয়মিত স্বাস্থ্য পরীক্ষা, পরামর্শ প্রদান ও চিকিৎসার ব্যবস্থা:</p>
					<ul class="list-disc list-inside space-y-1 text-xs">
						<li class="hover:text-teal-600 transition-colors duration-200">স্বাস্থ্য পরীক্ষা</li>
						<li class="hover:text-teal-600 transition-colors duration-200">পুষ্টি পরামর্শ</li>
						<li class="hover:text-teal-600 transition-colors duration-200">পুষ্টি প্রদান</li>
					</ul>
				</div>
			</div>

			<!-- মানসিক স্বাস্থ্য সহায়তা -->
			<div
				class="group cursor-pointer border rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="700">
				<div class="relative overflow-hidden rounded-xl h-64 mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="800">
					<img
						src="/images/services/5.png"
						alt="মানসিক স্বাস্থ্য সহায়তা"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
					<div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
					<div class="absolute top-4 left-4" data-aos="slide-right" data-aos-duration="600" data-aos-delay="900">
						<div
							class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-user text-white text-lg group-hover:text-purple-300 transition-colors duration-300"></i>
						</div>
					</div>
					<div class="absolute bottom-4 left-4 right-4" data-aos="slide-up" data-aos-duration="600" data-aos-delay="1000">
						<h3 class="text-xl font-bold text-white  group-hover:text-yellow-200 transition-colors duration-300">মানসিক স্বাস্থ্য সহায়তা</h3>
					</div>
				</div>
				<div
					class="p-2 text-gray-600 text-sm leading-relaxed  group-hover:text-gray-800 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="1100">
					<p class="mb-2 font-medium">নিয়মিত কাউন্সেলিং, মেন্টাল ও ব্রেন সাপোর্ট সেবা:</p>
					<ul class="list-disc list-inside space-y-1 text-xs">
						<li class="hover:text-teal-600 transition-colors duration-200">কাউন্সেলিং</li>
						<li class="hover:text-teal-600 transition-colors duration-200">মেন্টাল সেবা</li>
						<li class="hover:text-teal-600 transition-colors duration-200">ব্রেন সাপোর্ট</li>
					</ul>
				</div>
			</div>

			<!-- সামাজিক সচেতনতা সৃষ্টি ও নীতি উন্নয়ন -->
			<div
				class="group cursor-pointer rounded-xl border hover:shadow-2xl hover:scale-105 transition-all duration-500"
				data-aos="flip-left"
				data-aos-duration="800"
				data-aos-delay="800">
				<div class="relative overflow-hidden rounded-xl h-64 mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="900">
					<img
						src="/images/services/6.png"
						alt="সামাজিক সচেতনতা সৃষ্টি ও নীতি উন্নয়ন"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
					<div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
					<div class="absolute top-4 left-4" data-aos="slide-right" data-aos-duration="600" data-aos-delay="1000">
						<div
							class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-users text-white text-lg group-hover:text-orange-300 transition-colors duration-300"></i>
						</div>
					</div>
					<div class="absolute bottom-4 left-4 right-4" data-aos="slide-up" data-aos-duration="600" data-aos-delay="1100">
						<h3 class="text-xl font-bold text-white  group-hover:text-yellow-200 transition-colors duration-300">
							সামাজিক সচেতনতা সৃষ্টি ও নীতি উন্নয়ন
						</h3>
					</div>
				</div>
				<p
					class="text-gray-600 p-2 text-sm leading-relaxed  group-hover:text-gray-800 transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="1200">
					সম্প্রদায়িক শিক্ষা, প্রচারণা ও অধিকার সচেতনতা কর্মসূচি যা একটি অন্তর্ভুক্তিমূলক ও বোধগম্য সমাজ গড়তে সাহায্য করে।
				</p>
			</div>
		</div>
	</div>
</template>



<style scoped>
	

	/* Custom animation styles */
	@keyframes shimmer {
		0% {
			background-position: -200px 0;
		}
		100% {
			background-position: calc(200px + 100%) 0;
		}
	}

	.group:hover .shimmer-effect {
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		background-size: 200px 100%;
		animation: shimmer 2s infinite;
	}

	/* Enhanced hover effects */
	.group:hover {
		transform: translateY(-10px) scale(1.02);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	/* Image zoom effect */
	.group:hover img {
		transform: scale(1.15) rotate(2deg);
	}

	/* Icon bounce effect */
	.group:hover .pi {
		animation: bounce 1s infinite;
	}

	@keyframes bounce {
		0%,
		20%,
		60%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		80% {
			transform: translateY(-5px);
		}
	}

	/* Staggered list item animations */
	.group:hover li {
		animation: slideInRight 0.3s ease-out forwards;
	}

	.group:hover li:nth-child(1) {
		animation-delay: 0.1s;
	}
	.group:hover li:nth-child(2) {
		animation-delay: 0.2s;
	}
	.group:hover li:nth-child(3) {
		animation-delay: 0.3s;
	}

	@keyframes slideInRight {
		from {
			opacity: 0;
			transform: translateX(-6px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	/* Gradient border animation */
	.group::before {
		content: "";
		position: absolute;
		inset: 0;
		padding: 2px;
		background: linear-gradient(45deg, #1f5747, #fbbf24, #06d6a0, #f59e0b);
		border-radius: 12px;
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask-composite: xor;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.group:hover::before {
		opacity: 1;
	}

	/* Text glow effect on hover */
	.group:hover h3 {
		text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
	}

	/* Backdrop blur enhancement */
	.group:hover .backdrop-blur-sm {
		backdrop-filter: blur(12px);
	}
</style>
