<template>
	<section class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
		<div class="sponsor-section">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center px-2 py-3">
				<!-- Left Side - Background Image -->
				<div class="relative lg:col-span-1 order-2 lg:order-1">
					<div class="relative">
						<!-- Overlay gradient -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
					</div>
				</div>

				<!-- Center - Statistics -->
				<div class="flex flex-col gap-3 md:flex-row items-center text-center lg:col-span-1 order-1 lg:order-2">
					<div class="mb-4">
						<div class="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-bold text-teal-800 mb-2">১৫৪</div>
						<div class="text-sm sm:text-base lg:text-md font-semibold text-teal-800 leading-tight">স্পনসরহীন শিশুদের সংখ্যা</div>
					</div>

					<!-- Heart Hands Icon -->
					<div class="  flex justify-center mb-4">
						<div class="">
							<!-- Heart with hands icon -->
							<img class="w-20" src="/images/sponsor/backkground.png" alt="">

							
						</div>
					</div>
				</div>

				<!-- Right Side - CTA Button -->
				<div class="flex justify-center lg:justify-end lg:col-span-1 order-3">
					<button
						class="bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-2xl text-base lg:text-lg transition-all duration-300 transform shadow-xl hover:shadow-2xl">
						একটি শিশুকে স্পন্সর করুন
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	// Component logic can be added here if needed
</script>

<style scoped>
    .sponsor-section {
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        background-image: url("/images/slider/sponsor.png");
        background-size: cover;
        background-position: top center;
        background-blend-mode: overlay;
        position: relative;
    }

	.sponsor-section::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("/images/patterns/dots.png") repeat;
		opacity: 0.1;
		pointer-events: none;
	}

	/* Custom animation for decorative elements */
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.1);
		}
	}

	.animate-pulse {
		animation: pulse 2s infinite;
	}

	.delay-300 {
		animation-delay: 0.3s;
	}

	.delay-500 {
		animation-delay: 0.5s;
	}

	.delay-700 {
		animation-delay: 0.7s;
	}

	/* Responsive adjustments */
	@media (max-width: 1024px) {
		.sponsor-section {
			min-height: auto;
		}
	}

	@media (max-width: 768px) {
		.sponsor-section {
			background-position: center top;
		}
	}
</style>
