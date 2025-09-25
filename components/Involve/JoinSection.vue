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
							<p>আমাদের অফিসে সরাসরি যোগাযোগ করুন অথবা অফিসিয়াল ইমেইলের মাধ্যমে আবেদন পাঠান।</p>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
							<p>আপনার জীবনবৃত্তান্ত, আগ্রহের ক্ষেত্র এবং কীভাবে অবদান রাখতে চান তা উল্লেখ করুন।</p>
						</div>

						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
							<p>
								* আমাদের ওয়েবসাইট বা সামাজিক যোগাযোগ মাধ্যমে নিয়মিত আপডেট থাকুন-নতুন নিয়োগ, স্বেচ্ছাসেবক আইন ও প্রশিক্ষণের সুযোগ সম্পর্কে জানতে।
							</p>
						</div>
					</div>

					<!-- Quote Section -->
					<div class="mt-12 p-6 border-l-4 border-yellow-400 bg-black bg-opacity-30 rounded-r-lg">
						<p class="text-sm italic leading-relaxed">
							‘প্রত্যাশা’ শুধুই সেবা প্রদানে মোহিত নয়, এটি একটি জীবনদর্শন। আমাদের সঙ্গে কাজ করে আপনি হবেন সেই পরিবর্তনের অংশ, যা সমাজকে আরো মানবিক, অন্তর্ভুক্তিমূলক এবং সুন্দর করে গড়ে তুলবে।**
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
									<h3 class="font-semibold text-gray-800 text-xs">মানবিক মনোভাব ও সহানুভূতিশীল দৃষ্টিভঙ্গি</h3>
								</div>
							</div>

							<!-- Feature 2 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-sun text-orange-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">দায়িত্বশীলতা ও পেশাগত সততা</h3>
								</div>
							</div>

							<!-- Feature 3 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-users text-purple-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">সমস্যা সমাধানের দক্ষতা এবং উদ্ভাবনী চিন্তাধারা</h3>
								</div>
							</div>

							<!-- Feature 4 -->
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
									<i class="pi pi-graduation-cap text-blue-500 text-xl"></i>
								</div>
								<div>
									<h3 class="font-semibold text-gray-800 text-xs">টিমে কাজ করার মানসিকতা ও নেতৃত্বের গুণাবলি</h3>
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
