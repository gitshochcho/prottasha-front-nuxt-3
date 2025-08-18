<template>
	<div class="relative overflow-hidden" style="background-image: url('/images/slider/background-2.png')">
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-10">
			<!-- You can add background pattern images here if needed -->
		</div>

		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 relative z-10">
			<!-- Header Section -->
			<div class="text-center mb-12">
				<div class="mb-4">
					<span class="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium font-bangla">আমাদের প্রভাব</span>
				</div>

				<h1 class="text-4xl font-bold mb-6 text-white font-bangla">
					একসাথে বদলে দিচ্ছি<br />
					<span class="text-yellow-400">জীবন ধারা</span>
				</h1>

				<p class="text-white/90 max-w-2xl mx-auto leading-relaxed font-bangla">
					আমরা যাঁদের সেবা দিচ্ছি, তাঁদের প্রতিটি পদক্ষেপ আমাদের সমাজকে আরও অন্তর্ভুক্তিমূলক করে তোলে। আপনিও যুক্ত হন— প্রতিবন্ধী ব্যক্তিদের জীবনে স্থায়ী
					পরিবর্তন আনার এই অভিযানে।
				</p>
			</div>

			<!-- Statistics Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<!-- People Supported -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30">
					<div class="flex justify-center  mb-4">
						<div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
							<i class="pi pi-users text-black text-lg"></i>
						</div>
					</div>

					<div class="text-center">
						<div class="text-3xl font-bold text-yellow-400 mb-2">২৫০০+</div>

						<p class="text-white/80 text-sm font-bangla">মানুষ আমাদের সেবা গ্রহণ করেছেন</p>
					</div>
				</div>

				<!-- Upazila Coverage -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30">
					<div class="flex justify-center  mb-4">
						<div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
							<i class="pi pi-map text-black text-lg"></i>
						</div>
					</div>

					<div class="text-center">
						<div class="text-3xl font-bold text-yellow-400 mb-2">০৬</div>
						<p class="text-white/80 text-sm font-bangla">উপজেলা জুড়ে কার্যক্রম</p>
					</div>
				</div>

				<!-- Active Volunteers -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30">
					<div class="flex justify-center  mb-4">
						<div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
							<i class="pi pi-heart text-black text-lg"></i>
						</div>
					</div>

					<div class="text-center">
						<div class="text-3xl font-bold text-yellow-400 mb-2">৭৪+</div>

						<p class="text-white/80 text-sm font-bangla">সক্রিয় স্বেচ্ছাসেবক</p>
					</div>
				</div>

				<!-- Employment Success -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-6 rounded-lg border border-teal-600/30">
					<div class="flex justify-center mb-4">
						<div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
							<i class="pi pi-briefcase text-black text-lg"></i>
						</div>
					</div>

					<div class="text-center">
						<div class="text-3xl font-bold text-yellow-400 mb-2">৮৫০+</div>

						<p class="text-white/80 text-sm font-bangla">কর্মসংস্থান সৃষ্টির সফলতা</p>
					</div>
				</div>
			</div>

			<!-- Action Cards -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<!-- Support Our Mission -->
				<div class="bg-yellow-500 p-8 rounded-lg">
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
							<i class="pi pi-heart text-white text-lg"></i>
						</div>

						<div class="flex-1">
							<h3 class="text-2xl font-bold text-black mb-3 font-bangla">আমাদের মিশনকে সহায়তা করুন</h3>
							<p class="text-black/80 mb-6 leading-relaxed font-bangla">
								আপনার দান আমাদের সম্প্রদায়ে প্রতিবন্ধী ব্যক্তিদের জন্য অত্যন্ত প্রয়োজনীয় সেবা, সমর্থন এবং এডভোকেসি প্রদানে সাহায্য করে।
							</p>

							<button class="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-medium transition-colors font-bangla">
								এখন দান করুন
							</button>
						</div>
					</div>
				</div>

				<!-- Volunteer With Us -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
							<i class="pi pi-users text-black text-lg"></i>
						</div>

						<div class="flex-1">
							<h3 class="text-2xl font-bold text-white mb-3 font-bangla">স্বেচ্ছাসেবক হোন</h3>
							<p class="text-white/80 mb-6 leading-relaxed font-bangla">
								আমাদের ভোলান্টিয়ার সম্প্রদায়ে যোগ দিন এবং প্রতিবন্ধী ব্যক্তিদের জীবনে সরাসরি প্রভাব ফেলুন।
							</p>

							<button class="bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors font-bangla">
								অংশগ্রহণ করুন
							</button>
						</div>
					</div>
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
