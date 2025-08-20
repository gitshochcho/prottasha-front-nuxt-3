<template>
	<footer class="bg-[#094C3B] text-white overflow-hidden">
		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
			<!-- Main Footer Content -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
				<!-- Logo and Description -->
				<div
					v-animateonscroll="{
						enterClass: 'animate-fadeinup',
						leaveClass: 'animate-fadeoutdown',
					}"
					class="lg:col-span-1 order-1 sm:order-1 lg:order-1">
					<!-- logo portion -->
					<NuxtLink to="/" :class="['transition-transform duration-300 inline-block mb-4', isScrolled ? 'scale-90' : 'scale-100']">
						<FooterLogo :width="'70%'" :height="'40px'" />
					</NuxtLink>
					<p class="text-sm text-gray-300 mb-6 leading-relaxed">
						একটি মানবসেবা প্রতিষ্ঠান যা প্রতিবন্ধী মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে কাজ করে।
					</p>

					<!-- Contact Info -->
					<div class="space-y-3 text-sm">
						<div class="flex items-start hover:text-yellow-400 transition-colors duration-300 cursor-pointer group">
							<svg
								class="w-4 h-4 text-yellow-400 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd" />
							</svg>
							<span class="text-gray-300 group-hover:text-white transition-colors duration-300"
								>ঠিকানা: ১৫৪/৬/৪, ঝিলকানন আর/এ, পশ্চিম রামপুরা, ঢাকা-১২১৯, বাংলাদেশ</span
							>
						</div>
						<div class="flex items-center hover:text-yellow-400 transition-colors duration-300 cursor-pointer group">
							<svg
								class="w-4 h-4 text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-300"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
							</svg>
							<span class="text-gray-300 group-hover:text-white transition-colors duration-300">+৮৮ ১০৭১ ৬৬ ১৫ ৮৩১</span>
						</div>
						<div class="flex items-center hover:text-yellow-400 transition-colors duration-300 cursor-pointer group">
							<svg
								class="w-4 h-4 text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-300"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							<span class="text-gray-300 group-hover:text-white transition-colors duration-300">info@prottasha.net</span>
						</div>
					</div>
				</div>

				<!-- Quick Links -->
				<div
					v-animateonscroll="{
						enterClass: 'animate-fadeinup',
						leaveClass: 'animate-fadeoutdown',
					}"
					class="order-2 sm:order-2 lg:order-2"
					:style="{ animationDelay: '0.1s' }">
					<h3 class="text-lg font-semibold text-yellow-400 mb-4 relative">
						দ্রুত লিংক
						<span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400 rounded"></span>
					</h3>
					<nav class="flex flex-col space-y-3">
						<NuxtLink to="/about" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							আমরা কে
						</NuxtLink>
						<NuxtLink to="/services" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							অবকাঠামো
						</NuxtLink>
						<NuxtLink to="/impact" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							আমাদের প্রভাব
						</NuxtLink>
						<NuxtLink to="/volunteer-join-form" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							যুক্ত হোন
						</NuxtLink>
						<NuxtLink to="/services" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							আমাদের সেবা
						</NuxtLink>
					</nav>
				</div>

				<!-- Get Involved -->
				<div
					v-animateonscroll="{
						enterClass: 'animate-fadeinup',
						leaveClass: 'animate-fadeoutdown',
					}"
					class="order-3 sm:order-3 lg:order-3"
					:style="{ animationDelay: '0.2s' }">
					<h3 class="text-lg font-semibold text-yellow-400 mb-4 relative">
						যুক্ত হোন
						<span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400 rounded"></span>
					</h3>
					<nav class="flex flex-col space-y-3">
						<NuxtLink to="/sponsor" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							একটি শিশুকে স্পন্সর করুন
						</NuxtLink>
						<NuxtLink to="/donate" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							দান করুন
						</NuxtLink>
						<NuxtLink to="/volunteer-join-form" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							স্বেচ্ছাসেবক হন
						</NuxtLink>
					</nav>
				</div>

				<!-- Our Services -->
				<div
					v-animateonscroll="{
						enterClass: 'animate-fadeinup',
						leaveClass: 'animate-fadeoutdown',
					}"
					class="order-4 sm:order-4 lg:order-4"
					:style="{ animationDelay: '0.3s' }">
					<h3 class="text-lg font-semibold text-yellow-400 mb-4 relative">
						আমাদের সেবা সমূহ
						<span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400 rounded"></span>
					</h3>
					<nav class="flex flex-col space-y-3">
						<NuxtLink
							to="/medical-support"
							class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2 leading-relaxed">
							মেডিকেল সাপোর্ট ও পুনর্বাসন
						</NuxtLink>
						<NuxtLink to="/legal-aid" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							আইনি সহায়তা ও কর্মসংস্থান
						</NuxtLink>
						<NuxtLink to="/mental-health" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							মানসিক স্বাস্থ্য ও পরামর্শ
						</NuxtLink>
						<NuxtLink
							to="/social-awareness"
							class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							সামাজিক সচেতনতা ও অধিকার
						</NuxtLink>
						<NuxtLink to="/new-life" class="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm hover:translate-x-1 hover:pl-2">
							নতুন জীবনের প্রস্তুতি
						</NuxtLink>
					</nav>
				</div>

				<!-- Follow Us & Subscribe -->
				<div
					v-animateonscroll="{
						enterClass: 'animate-fadeinup',
						leaveClass: 'animate-fadeoutdown',
					}"
					class="order-5 sm:order-5 lg:order-5 sm:col-span-2 lg:col-span-1"
					:style="{ animationDelay: '0.4s' }">
					<h3 class="text-lg font-semibold text-yellow-400 mb-4 relative">
						সোস্যাল মিডিয়া
						<span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400 rounded"></span>
					</h3>
					<div class="flex space-x-3 mb-6">
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
							</svg>
						</a>
					</div>

					<h4 class="text-lg font-semibold text-yellow-400 mb-3 relative">
						ইমেইল সাবস্ক্রিবশন
						<span class="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400 rounded"></span>
					</h4>
					<div class="flex rounded-lg overflow-hidden shadow-lg">
						<input
							type="email"
							placeholder="Enter your email"
							class="flex-1 px-4 py-3 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-gray-50 transition-all duration-300"
							v-model="email" />
						<button
							@click="subscribe"
							class="px-5 py-3 bg-yellow-400 text-teal-800 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
							<svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!-- Bottom Section -->
			<div
				v-animateonscroll="{
					enterClass: 'animate-fadeinup',
					leaveClass: 'animate-fadeoutdown',
				}"
				class="border-t border-teal-700 pt-6 md:pt-8"
				:style="{ animationDelay: '0.5s' }">
				<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p class="text-sm text-gray-300 text-center md:text-left"> স্বত্ব © প্রত্যাশা ২০২৫</p>
					<div class="flex flex-wrap justify-center space-x-4 md:space-x-6">
						<NuxtLink to="/terms" class="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105"> শর্তাবলী </NuxtLink>
						<NuxtLink to="/privacy" class="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105"> গোপনীয়তা </NuxtLink>
						<NuxtLink to="/cookies" class="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105"> কুকিজ </NuxtLink>
					</div>
					<p class="text-sm text-gray-300 text-center md:text-right">
						Developed By -
						<span class="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"> Orangebd </span>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import { ref } from "vue"

	// Reactive data
	const email = ref("")
	const isScrolled = ref(false)

	// Methods
	const subscribe = () => {
		if (email.value) {
			// Handle subscription logic here
			console.log("Subscribing email:", email.value)
			email.value = ""
			// You can add a toast notification here using PrimeVue Toast
		}
	}

	// Handle scroll effect for logo (if needed)
	const handleScroll = () => {
		isScrolled.value = window.scrollY > 50
	}

	// Lifecycle
	onMounted(() => {
		window.addEventListener("scroll", handleScroll)
	})

	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll)
	})
</script>

<style scoped>
	/* Custom animations using PrimeVue animate classes */
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

	.animate-fadeinup {
		animation: fadeInUp 0.6s ease-out forwards;
	}

	.animate-fadeoutdown {
		animation: fadeOutDown 0.6s ease-out forwards;
	}

	/* Responsive text sizing */
	@media (max-width: 640px) {
		.container {
			padding-left: 1rem;
			padding-right: 1rem;
		}

		h3 {
			font-size: 1rem;
		}

		.text-lg {
			font-size: 1rem;
		}
	}

	/* Staggered animation delays */
	[style*="animation-delay: 0.1s"] {
		animation-delay: 0.1s !important;
	}
	[style*="animation-delay: 0.2s"] {
		animation-delay: 0.2s !important;
	}
	[style*="animation-delay: 0.3s"] {
		animation-delay: 0.3s !important;
	}
	[style*="animation-delay: 0.4s"] {
		animation-delay: 0.4s !important;
	}
	[style*="animation-delay: 0.5s"] {
		animation-delay: 0.5s !important;
	}

	/* Enhanced hover effects */
	.group:hover svg {
		transform: translateX(2px);
	}

	/* Mobile menu improvements */
	@media (max-width: 768px) {
		.grid {
			gap: 2rem;
		}

		.space-y-3 > * + * {
			margin-top: 0.75rem;
		}
	}
</style>
