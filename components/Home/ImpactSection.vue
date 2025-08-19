<template>
	<div class="relative overflow-hidden" style="background-image: url('/images/slider/background-2.png')">
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-10" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
			<!-- You can add background pattern images here if needed -->
		</div>

		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 relative z-10">
			<!-- Header Section -->
			<div class="text-center mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
				<div class="mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
					<span class="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium font-bangla hover:bg-yellow-400 transition-colors duration-300">
						আমাদের প্রভাব
					</span>
				</div>

				<h1 class="text-2xl font-bold mb-6 text-white font-bangla" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
					<span data-aos="slide-right" data-aos-duration="800" data-aos-delay="500"> একসাথে বদলে দিচ্ছি </span>
					<br />
					<span
						class="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
						data-aos="slide-left"
						data-aos-duration="800"
						data-aos-delay="600">
						জীবন ধারা
					</span>
				</h1>

				<p
					class="text-white/90 max-w-2xl mx-auto leading-relaxed font-bangla hover:text-white transition-colors duration-300"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="700">
					আমরা যাঁদের সেবা দিচ্ছি, তাঁদের প্রতিটি পদক্ষেপ আমাদের সমাজকে আরও অন্তর্ভুক্তিমূলক করে তোলে। আপনিও যুক্ত হন— প্রতিবন্ধী ব্যক্তিদের জীবনে স্থায়ী
					পরিবর্তন আনার এই অভিযানে।
				</p>
			</div>

			<!-- Statistics Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
				<!-- People Supported -->
				<div
					class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30 hover:bg-teal-600/60 hover:scale-105 transition-all duration-500 group cursor-pointer"
					data-aos="flip-up"
					data-aos-duration="800"
					data-aos-delay="400">
					<div class="flex justify-center mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
						<div
							class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-users text-black text-lg group-hover:scale-110 transition-transform duration-300"></i>
						</div>
					</div>

					<div class="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
						<div
							class="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300"
							data-aos="count-up"
							data-aos-duration="2000"
							data-aos-delay="800">
							২৫০০+
						</div>

						<p class="text-white/80 text-sm font-bangla group-hover:text-white transition-colors duration-300">মানুষ আমাদের সেবা গ্রহণ করেছেন</p>
					</div>
				</div>

				<!-- Upazila Coverage -->
				<div
					class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30 hover:bg-teal-600/60 hover:scale-105 transition-all duration-500 group cursor-pointer"
					data-aos="flip-up"
					data-aos-duration="800"
					data-aos-delay="500">
					<div class="flex justify-center mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
						<div
							class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-map text-black text-lg group-hover:scale-110 transition-transform duration-300"></i>
						</div>
					</div>

					<div class="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
						<div
							class="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300"
							data-aos="count-up"
							data-aos-duration="2000"
							data-aos-delay="900">
							০৬
						</div>
						<p class="text-white/80 text-sm font-bangla group-hover:text-white transition-colors duration-300">উপজেলা জুড়ে কার্যক্রম</p>
					</div>
				</div>

				<!-- Active Volunteers -->
				<div
					class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30 hover:bg-teal-600/60 hover:scale-105 transition-all duration-500 group cursor-pointer"
					data-aos="flip-up"
					data-aos-duration="800"
					data-aos-delay="600">
					<div class="flex justify-center mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700">
						<div
							class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-heart text-black text-lg group-hover:scale-110 transition-transform duration-300"></i>
						</div>
					</div>

					<div class="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
						<div
							class="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300"
							data-aos="count-up"
							data-aos-duration="2000"
							data-aos-delay="1000">
							৭৪+
						</div>

						<p class="text-white/80 text-sm font-bangla group-hover:text-white transition-colors duration-300">সক্রিয় স্বেচ্ছাসেবক</p>
					</div>
				</div>

				<!-- Employment Success -->
				<div
					class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30 hover:bg-teal-600/60 hover:scale-105 transition-all duration-500 group cursor-pointer"
					data-aos="flip-up"
					data-aos-duration="800"
					data-aos-delay="700">
					<div class="flex justify-center mb-4" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="800">
						<div
							class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
							<i class="pi pi-briefcase text-black text-lg group-hover:scale-110 transition-transform duration-300"></i>
						</div>
					</div>

					<div class="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
						<div
							class="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300"
							data-aos="count-up"
							data-aos-duration="2000"
							data-aos-delay="1100">
							৮৫০+
						</div>

						<p class="text-white/80 text-sm font-bangla group-hover:text-white transition-colors duration-300">কর্মসংস্থান সৃষ্টির সফলতা</p>
					</div>
				</div>
			</div>

			<!-- Action Cards -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
				<!-- Support Our Mission -->
				<div
					class="bg-yellow-500 p-8 rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-500 group cursor-pointer"
					data-aos="slide-right"
					data-aos-duration="800"
					data-aos-delay="500">
					<div class="flex items-center gap-4">
						<div
							class="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-700 group-hover:scale-110 transition-all duration-300"
							data-aos="zoom-in"
							data-aos-duration="600"
							data-aos-delay="600">
							<i class="pi pi-heart text-white text-lg group-hover:scale-110 transition-transform duration-300"></i>
						</div>

						<div class="flex-1" data-aos="fade-left" data-aos-duration="800" data-aos-delay="700">
							<h3
								class="text-2xl font-bold text-black mb-3 font-bangla group-hover:text-gray-800 transition-colors duration-300"
								data-aos="fade-up"
								data-aos-duration="600"
								data-aos-delay="800">
								আমাদের মিশনকে সহায়তা করুন
							</h3>
							<p
								class="text-black/80 mb-6 leading-relaxed font-bangla group-hover:text-black transition-colors duration-300"
								data-aos="fade-up"
								data-aos-duration="800"
								data-aos-delay="900">
								আপনার দান আমাদের সম্প্রদায়ে প্রতিবন্ধী ব্যক্তিদের জন্য অত্যন্ত প্রয়োজনীয় সেবা, সমর্থন এবং এডভোকেসি প্রদানে সাহায্য করে।
							</p>

							<NuxtLink to="donation-form"
								class="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 font-bangla hover:scale-105 hover:shadow-lg"
								data-aos="zoom-in"
								data-aos-duration="600"
								data-aos-delay="1000">
								এখন দান করুন
							</NuxtLink>
						</div>
					</div>
				</div>

				<!-- Volunteer With Us -->
				<div
					class="bg-teal-700/50 backdrop-blur-sm p-8 rounded-lg border border-teal-600/30 hover:bg-teal-600/60 hover:scale-105 transition-all duration-500 group cursor-pointer"
					data-aos="slide-left"
					data-aos-duration="800"
					data-aos-delay="600">
					<div class="flex items-center gap-4">
						<div
							class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300"
							data-aos="zoom-in"
							data-aos-duration="600"
							data-aos-delay="700">
							<i class="pi pi-users text-black text-lg group-hover:scale-110 transition-transform duration-300"></i>
						</div>

						<div class="flex-1" data-aos="fade-right" data-aos-duration="800" data-aos-delay="800">
							<h3
								class="text-2xl font-bold text-white mb-3 font-bangla group-hover:text-yellow-100 transition-colors duration-300"
								data-aos="fade-up"
								data-aos-duration="600"
								data-aos-delay="900">
								স্বেচ্ছাসেবক হোন
							</h3>
							<p
								class="text-white/80 mb-6 leading-relaxed font-bangla group-hover:text-white transition-colors duration-300"
								data-aos="fade-up"
								data-aos-duration="800"
								data-aos-delay="1000">
								আমাদের ভোলান্টিয়ার সম্প্রদায়ে যোগ দিন এবং প্রতিবন্ধী ব্যক্তিদের জীবনে সরাসরি প্রভাব ফেলুন।
							</p>

							<NuxtLink to="volunteer-join-form"
								class="bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 font-bangla hover:scale-105 hover:shadow-lg"
								data-aos="zoom-in"
								data-aos-duration="600"
								data-aos-delay="1100">
								অংশগ্রহণ করুন
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

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

<style scoped>
	.font-bangla {
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}

	/* Custom animation styles */
	@keyframes pulse-glow {
		0%,
		100% {
			box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
		}
		50% {
			box-shadow: 0 0 30px rgba(234, 179, 8, 0.6);
		}
	}

	.group:hover .pulse-animation {
		animation: pulse-glow 2s ease-in-out infinite;
	}

	/* Floating animation */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.group:hover .float-animation {
		animation: float 3s ease-in-out infinite;
	}

	/* Custom gradient background on hover */
	.group:hover::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%);
		border-radius: 0.5rem;
		z-index: -1;
	}

	/* Number counting animation effect */
	@keyframes count-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Backdrop blur enhancement on hover */
	.backdrop-blur-sm:hover {
		backdrop-filter: blur(8px);
	}

	/* Button hover effects */
	button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	/* Icon animation */
	.pi:hover {
		animation: pulse 1s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}
</style>
