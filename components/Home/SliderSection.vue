<script setup>
	const isLoading = ref(false)
	const data = ref([])

	const loadData = async () => {
		isLoading.value = true
		try {
			const getData = await $fetchAdmin(`frontend-contents/slug`, {
				method: "GET",
				params: {
					slug: "homepage-nav",
				},
			})

			data.value = getData.data
			console.log(data.value)
		} catch (e) {
			console.log(`get message error ${e}`)
		} finally {
			isLoading.value = false
		}
	}

	const titleLines = computed(() => {
		if (!data.value?.title) return ["", ""]

		const words = data.value.title.split(" ")
		const firstLine = words.slice(0, 2).join(" ")
		const secondLine = words.slice(2).join(" ")
		return [firstLine, secondLine]
	})

	const firstLine = computed(() => titleLines.value[0])
	const secondLine = computed(() => titleLines.value[1])

	// Bengali number converter function
	const toBengaliNumber = (num) => {
		const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]
		return num
			.toString()
			.split("")
			.map((digit) => bengaliDigits[parseInt(digit)])
			.join("")
	}

	// Counter animation function
	const animateCounter = (element, target) => {
		const increment = target / 100
		let current = 0

		const timer = setInterval(() => {
			current += increment
			if (current >= target) {
				element.textContent = toBengaliNumber(target)
				clearInterval(timer)
			} else {
				element.textContent = toBengaliNumber(Math.floor(current))
			}
		}, 20)
	}

	// Initialize counter animations
	const initCounters = () => {
		const counters = document.querySelectorAll(".counter")
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = parseInt(entry.target.getAttribute("data-target"))
						animateCounter(entry.target, target)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.5 }
		)

		counters.forEach((counter) => observer.observe(counter))
	}

	onMounted(async () => {
		await nextTick()
		initCounters()
		loadData()
	})
</script>

<template>
	<div class="hero-bg flex items-center w-full relative overflow-hidden">
		<!-- Dark Overlay -->
		<div class="absolute inset-0 bg-black/70"></div>
		<img class="absolute bottom-0 left-0" src="/svg/about/leaf.svg" alt="" />
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="floating-shape absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full"></div>
			<div class="floating-shape absolute top-40 right-20 w-16 h-16 bg-teal-600/10 rounded-full" style="animation-delay: 2s"></div>
			<div class="floating-shape absolute bottom-32 left-20 w-12 h-12 bg-yellow-400/10 rounded-full" style="animation-delay: 4s"></div>
		</div>

		<!-- Content Container -->
		<div class="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10">
			<div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
				<!-- Left Content Section -->
				<div
					class="text-white space-y-6 md:space-y-8 flex-1 flex flex-col justify-center h-full text-center lg:text-left order-1 lg:order-1"
					data-aos="fade-right"
					data-aos-duration="800"
					data-aos-once="false">
					<!-- Trust Badge -->
					<span
						class="inline-flex w-auto max-w-52 mx-auto lg:mx-0 items-center bg-[#215D4E] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
						data-aos="bounce-in"
						data-aos-delay="200"
						data-aos-once="false">
						<svg class="w-5 h-5 mr-2 flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd" />
						</svg>
						১০০০+ পরিবারের আস্থা
					</span>

					<!-- Main Heading -->
					<h1 class="text-4xl sm:text-5xl lg:text-3xl xl:text-4xl font-bold leading-tight" data-aos="fade-down" data-aos-delay="400" data-aos-once="false">
						<span class="inline-block typing-animation">{{ firstLine ? firstLine : "সবার জন্য" }}</span
						><br />
						<span class="text-yellow-400 inline-block glow-text">{{ secondLine ? secondLine : "সমান সুযোগ" }}</span
						><br />
					</h1>

					<!-- Description -->

					<p v-html="data?.description ? data?.description : '<p>প্রতিবন্ধী ব্যক্তিদের অধিকার ও সেবা নিশ্চিতে আমরা কাজ করছি নিরলসভাবে। আসুন, একসাথে গড়ে তুলি এমন এক সমাজ, যেখানে কেউ পিছিয়ে থাকবে না।</p>'"
                        class="text-base sm:text-lg lg:text-base xl:text-lg text-gray-200 max-w-2xl lg:max-w-xl leading-relaxed mx-auto lg:mx-0"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-once="false">
                    </p>

					<!-- CTA Buttons -->
					<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800" data-aos-once="false">
						<NuxtLink
							to="/volunteer-join-form"
							class="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 group">
							<span class="group-hover:translate-x-1 transition-transform duration-300 inline-block"> আমাদের সাথে যুক্ত হোন </span>
						</NuxtLink>
						<NuxtLink
							to="/about"
							class="border-2 border-white text-white hover:bg-white text-sm hover:text-black px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 group">
							<span class="group-hover:translate-x-1 transition-transform duration-300 inline-block"> আরো জানতে → </span>
						</NuxtLink>
					</div>

					<!-- Statistics -->
					<div class="flex flex-wrap gap-6 pt-2 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1000" data-aos-once="false">
						<div class="text-center lg:text-left flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer group">
							<div class="text-2xl sm:text-3xl lg:text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
								<span class="counter" data-target="500">০</span>+
							</div>
							<div class="text-sm text-gray-300 font-medium">সেবা গ্রহীতা</div>
						</div>
						<div class="text-center lg:text-left flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer group">
							<div class="text-2xl sm:text-3xl lg:text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
								<span class="counter" data-target="50">০</span>+
							</div>
							<div class="text-sm text-gray-300 font-medium">প্রশিক্ষণ কর্মসূচী</div>
						</div>
						<div class="text-center lg:text-left flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer group">
							<div class="text-2xl sm:text-3xl lg:text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
								<span class="counter" data-target="25">০</span>+
							</div>
							<div class="text-sm text-gray-300 font-medium">অংশীদার সংস্থা</div>
						</div>
						<div class="text-center lg:text-left flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer group">
							<div class="text-2xl sm:text-3xl lg:text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
								<span class="counter" data-target="850">০</span>+
							</div>
							<div class="text-sm text-gray-300 font-medium">স্বেচ্ছাসেবক</div>
						</div>
					</div>
				</div>

				<!-- Right Content Section - Images -->
				<div
					class="relative flex justify-center lg:justify-end flex-1 h-full items-start order-2 lg:order-2 w-full"
					data-aos="fade-left"
					data-aos-delay="300"
					data-aos-once="false">
					<!-- Main Images Container -->
					<div class="relative scale-90 sm:scale-100">
						<!-- Background Child Image (larger) -->
						<div class="relative">
							<img
								:src="data && data.media && data.media.length > 0 ? data.media[0].original_url : '/images/slider/1.png'"
								alt="Child with disability at school"
								class="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[400px] object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105" />
							<!-- Image overlay effect -->
							<div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
						</div>

						<!-- Floating Statistics Card -->
						<div
							class="absolute -top-1 -right-2 sm:-top-5 sm:-right-8 lg:-top-3 lg:-right-1"
							data-aos="bounce-in"
							data-aos-delay="1200"
							data-aos-once="false">
							<div
								class="floating-card bg-yellow-400 text-black p-2 sm:p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer hover:shadow-2xl w-32 sm:w-40 md:w-auto">
								<div class="flex flex-wrap gap-x-2 justify-center items-center text-center">
									<span class="flex-shrink-0">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16" fill="none" class="w-5 h-4 sm:w-6 sm:h-5">
											<path
												d="M23.1003 8.41401L22.7504 1.67309L16.0095 2.02299"
												stroke="#094C3B"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round" />
											<path
												d="M22.7539 1.67303L15.2372 10.0129C15.1053 10.1593 14.9458 10.2783 14.7679 10.3631C14.59 10.4479 14.3972 10.4968 14.2004 10.507C14.0036 10.5172 13.8067 10.4885 13.621 10.4226C13.4353 10.3567 13.2644 10.2549 13.118 10.1229L9.83207 7.16125C9.68573 7.02926 9.51482 6.92741 9.3291 6.86151C9.14339 6.79561 8.9465 6.76694 8.7497 6.77716C8.55291 6.78737 8.36005 6.83627 8.18215 6.92104C8.00426 7.00582 7.84481 7.12482 7.71292 7.27125L0.90625 14.8232"
												stroke="#094C3B"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</span>
									<div class="flex flex-col">
										<span class="block text-2xs sm:text-xs md:text-sm text-[#094C3B] font-medium">সফলতার সাথে</span>
										<span class="block text-base sm:text-lg md:text-xl font-bold text-[#094C3B] my-0.5 sm:my-1">৫০+</span>
										<span class="block text-2xs sm:text-xs md:text-sm font-medium">শিশুর জীবন পরিবর্তন</span>
									</div>
								</div>
							</div>
						</div>

						<!-- Testimonial Card -->
						<div
							class="testimonial-card absolute -bottom-4 -left-4 sm:-bottom-8 sm:left-8 lg:-bottom-10 lg:-right-6 p-3 sm:p-4 lg:p-4 rounded-xl max-w-xs sm:max-w-sm lg:max-w-md hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
							data-aos="fade-up"
							data-aos-delay="1400"
							data-aos-once="false">
							<div class="flex items-start space-x-3">
								<div class="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
									<svg class="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<div class="flex-1 min-w-0">
									<p class="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
										"এই সংগঠনের সহায়তায় আমার জীবন বদলে গেছে। তাঁদের সহানুভূতি ও সাহচর্যে আমি আজ নতুন করে স্বপ্ন দেখতে শিখেছি।"
									</p>
									<div class="text-xs text-gray-600">
										<div class="font-semibold text-black text-xs sm:text-sm">মেহরাব চৌধুরী</div>
										<div class="text-xs">শ্রেণি ৫, যশোর স্কুল</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.hero-bg {
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 80%), url("/public/images/slider/background.png");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
	}

	.testimonial-card {
		backdrop-filter: blur(20px);
		background: rgba(255, 255, 255, 0.98);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	/* PrimeVue Animation Classes */
	@keyframes fadeInLeft {
		from {
			opacity: 0;
			transform: translate3d(-100px, 0, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes fadeOutLeft {
		from {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
		to {
			opacity: 0;
			transform: translate3d(-100px, 0, 0);
		}
	}

	@keyframes fadeInRight {
		from {
			opacity: 0;
			transform: translate3d(100px, 0, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes fadeOutRight {
		from {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
		to {
			opacity: 0;
			transform: translate3d(100px, 0, 0);
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 40px, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes fadeOutDown {
		from {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
		to {
			opacity: 0;
			transform: translate3d(0, 40px, 0);
		}
	}

	@keyframes fadeInTop {
		from {
			opacity: 0;
			transform: translate3d(0, -40px, 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes fadeOutTop {
		from {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
		to {
			opacity: 0;
			transform: translate3d(0, -40px, 0);
		}
	}

	@keyframes bounceIn {
		0%,
		20%,
		40%,
		60%,
		80%,
		100% {
			transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		0% {
			opacity: 0;
			transform: scale3d(0.3, 0.3, 0.3);
		}
		20% {
			transform: scale3d(1.1, 1.1, 1.1);
		}
		40% {
			transform: scale3d(0.9, 0.9, 0.9);
		}
		60% {
			opacity: 1;
			transform: scale3d(1.03, 1.03, 1.03);
		}
		80% {
			transform: scale3d(0.97, 0.97, 0.97);
		}
		100% {
			opacity: 1;
			transform: scale3d(1, 1, 1);
		}
	}

	@keyframes bounceOut {
		20% {
			transform: scale3d(0.9, 0.9, 0.9);
		}
		50%,
		55% {
			opacity: 1;
			transform: scale3d(1.1, 1.1, 1.1);
		}
		100% {
			opacity: 0;
			transform: scale3d(0.3, 0.3, 0.3);
		}
	}

	.animate-fadeinleft {
		animation: fadeInLeft 0.8s ease-out forwards;
	}

	.animate-fadeoutleft {
		animation: fadeOutLeft 0.8s ease-out forwards;
	}

	.animate-fadeinright {
		animation: fadeInRight 0.8s ease-out forwards;
	}

	.animate-fadeoutright {
		animation: fadeOutRight 0.8s ease-out forwards;
	}

	.animate-fadeinup {
		animation: fadeInUp 0.6s ease-out forwards;
	}

	.animate-fadeoutdown {
		animation: fadeOutDown 0.6s ease-out forwards;
	}

	.animate-fadeintop {
		animation: fadeInTop 0.8s ease-out forwards;
	}

	.animate-fadeouttop {
		animation: fadeOutTop 0.8s ease-out forwards;
	}

	.animate-bounceIn {
		animation: bounceIn 0.8s ease-out forwards;
	}

	.animate-bounceOut {
		animation: bounceOut 0.8s ease-out forwards;
	}

	/* Custom Effects */
	.glow-text {
		text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
	}

	.floating-shape {
		animation: floating 6s ease-in-out infinite;
	}

	@keyframes floating {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.floating-card {
		animation: float-rotate 4s ease-in-out infinite;
	}

	@keyframes float-rotate {
		0%,
		100% {
			transform: rotate(-6deg) translateY(0px);
		}
		50% {
			transform: rotate(-6deg) translateY(-10px);
		}
	}

	/* Staggered animation delays */
	[style*="animation-delay: 0.2s"] {
		animation-delay: 0.2s !important;
	}
	[style*="animation-delay: 0.3s"] {
		animation-delay: 0.3s !important;
	}
	[style*="animation-delay: 0.4s"] {
		animation-delay: 0.4s !important;
	}
	[style*="animation-delay: 0.6s"] {
		animation-delay: 0.6s !important;
	}
	[style*="animation-delay: 0.8s"] {
		animation-delay: 0.8s !important;
	}
	[style*="animation-delay: 1s"] {
		animation-delay: 1s !important;
	}
	[style*="animation-delay: 1.2s"] {
		animation-delay: 1.2s !important;
	}
	[style*="animation-delay: 1.4s"] {
		animation-delay: 1.4s !important;
	}

	/* Mobile Responsive Adjustments */
	@media (max-width: 640px) {
		.hero-bg {
			min-height: 100vh;
			padding: 1rem 0;
		}

		.testimonial-card {
			max-width: calc(100vw - 2rem);
			left: 1rem !important;
			right: 1rem !important;
			bottom: -2rem !important;
		}

		.floating-card {
			max-width: 120px;
			right: -1rem !important;
			top: -1rem !important;
		}
	}

	@media (max-width: 768px) {
		.container {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	@media (max-width: 1024px) {
		.hero-bg {
			min-height: auto;
			padding: 2rem 0;
		}
	}

	/* Enhanced hover effects */
	.group:hover span {
		transform: translateX(4px);
	}

	/* Counter animation styling */
	.counter {
		display: inline-block;
		font-variant-numeric: tabular-nums;
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}

	/* Enhanced hover effects */
	.group:hover .counter {
		transform: scale(1.1);
	}
</style>
