<template>
	<div class="relative bg-cover bg-center bg-no-repeat " style="background-image: url('/images/profession/joinbanner.png')">
		<!-- Overlay -->
		<div class="absolute inset-0 bg-black bg-opacity-40"></div>

		<!-- Content Container -->
		<div class="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 flex items-center">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
				<!-- Left Content -->
				<div class="text-white space-y-6">
					<h1 class="text-2xl font-bold text-yellow-400 mb-8">কীভাবে যুক্ত হবেন?</h1>

					<div class="space-y-4 text-sm leading-relaxed">
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
							<p>আমাদের অফিসে সরাসরি যোগাযোগের মাধ্যমে আপনার অভিজ্ঞতার ইতিহাসের মাধ্যমে আমাদের পরিচয়।</p>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
							<p>আমাদের জীবনযাত্রা, আদর্শবোধ তিনি এবং কীভাবে আপনার জ্ঞান দিয়ে চায় তা উল্লেখ করুন।</p>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
							<p>
								আমাদের স্বেচ্ছাসেবী নও সামাজিক যোগাযোগের মাধ্যমে নিয়মিত আপডেটে প্রাপ্ত—চেষ্টা নিয়ম, যেমন সামাজিকে সাহায্য এ প্রশিক্ষণের সুযোগ পাবেন
								আপনি।
							</p>
						</div>
					</div>

					<!-- Quote Section -->
					<div class="mt-12 p-6 border-l-4 border-yellow-400 bg-black bg-opacity-30 rounded-r-lg">
						<p class="text-sm italic leading-relaxed">
							"প্রত্যাশা' হৃদয়ে নেওয়া শর্ত তৈরির দর্শন যা, এটি একটি সীমাবদ্ধতা। আমাদের সেবা পারে করে আপনার জেতার বরণে পাবেন কর্তৃত্বে অংশ, যা সমাজকে
							আরো মানবিক, সহযোগিতামূলক এবং স্বপ্নকেন্দ্রিক গড়ে তুলবে।"
						</p>
						<p class="text-yellow-400 font-semibold mt-4 text-right text-xs">- প্রত্যাশা টিম</p>
					</div>
				</div>

				<!-- Right Card -->
				<div class="flex justify-end">
					<div class="bg-yellow-400 rounded-2xl p-8 shadow-2xl max-w-md mx-auto lg:mx-0">
						<h2 class="text-lg font-bold text-gray-800 mb-8 text-center">আমরা যা যুক্তি</h2>

						<div class="space-y-6">
							<!-- Feature 1 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-heart text-red-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">মানবিক সেবাজীবী ও সমালোচনাকারী দৃষ্টিকোণ</h3>
								</div>
							</div>

							<!-- Feature 2 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-sun text-orange-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">দায়িত্বশীল ও নেতৃত্বের সততা</h3>
								</div>
							</div>

							<!-- Feature 3 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-users text-purple-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">সময়ে সময়ে কৃতজ্ঞতা দল ও উল্টোবর্ণী বিশ্বাসযোগ্যতা</h3>
								</div>
							</div>

							<!-- Feature 4 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-graduation-cap text-blue-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">চিত্র দক্ষতা অবস্থা মানবিকতার ও সেবকের দায়িত্বশীল</h3>
								</div>
							</div>
						</div>

						<!-- Join Button -->
						<div class="mt-8 text-center">
							<Button
								class="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
								@click="joinUs">
								আমাদের সাথে যুক্ত হন
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const joinUs = () => {
		// Add join functionality here
		console.log("User wants to join!")
		// Could navigate to a form page or open a modal
	}
</script>

<style lang="scss" scoped>
	

	/* Custom responsive adjustments */
	@media (max-width: 1024px) {
		.min-h-screen {
			min-height: auto;
			padding-top: 4rem;
			padding-bottom: 4rem;
		}
	}

	/* Smooth scroll behavior */
	html {
		scroll-behavior: smooth;
	}
</style>
