<template>
	<section class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12 ">
		<div class="">
			<!-- Header -->
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-teal-600 mb-4">আমাদের সেবাসমূহ</h2>
				<p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">
					বিশেষ চাহিদাসম্পন্ন ব্যক্তি ও শিশুদের জন্য আমাদের বিশেষায়িত সেবাসমূহ যা তাদের জীবনযাত্রার মান উন্নয়নে সহায়তা করে
				</p>
			</div>

			<!-- Services Grid Layout -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
				<!-- Left Column Services -->
				<div class="space-y-6">
					<!-- আমার নিরাপত্তা -->
					<div class="text-center bg-white p-6 rounded-xl shadow-sm">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
								<i class="pi pi-shield text-white text-lg"></i>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-800 mb-2">আমার নিরাপত্তা</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								আমাদের নিরাপত্তা বিভাগ বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সুরক্ষা নিশ্চিত করে। আমরা তাদের শারীরিক ও মানসিক নিরাপত্তার জন্য সার্বক্ষণিক
								তদারকি করি।
							</p>
						</div>
					</div>

					<!-- আমার সুখ -->
					<div class="text-center bg-white p-6 rounded-xl shadow-sm">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
								<i class="pi pi-heart text-white text-lg"></i>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-800 mb-2">আমার সুখ</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								প্রতিটি মানুষের সুখী জীবনযাপনের অধিকার রয়েছে। আমরা বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের জন্য বিনোদন ও আনন্দের ব্যবস্থা করি যাতে তারা খুশি
								থাকতে পারে।
							</p>
						</div>
					</div>
				</div>

				<!-- Center Image -->
				<div class="flex justify-center">
					<div class="relative">
						<img src="/images/services/ser1.png" alt="বিশেষ চাহিদাসম্পন্ন ব্যক্তি" class="rounded-2xl shadow-lg w-80 h-96 object-cover" />
					</div>
				</div>

				<!-- Right Column Services -->
				<div class="space-y-6">
					<!-- আমার শেখা -->
					<div class="text-center bg-white p-6 rounded-xl shadow-sm">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
								<i class="pi pi-book text-white text-lg"></i>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-800 mb-2">আমার শেখা</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								আমরা বিশেষ শিক্ষা পদ্ধতির মাধ্যমে প্রতিটি শিশুর শেখার ক্ষমতা বৃদ্ধি করি। আমাদের বিশেষজ্ঞ শিক্ষকগণ তাদের প্রয়োজন অনুযায়ী শিক্ষা
								প্রদান করেন।
							</p>
						</div>
					</div>

					<!-- বিশেষ শিক্ষা -->
					<div class="text-center bg-white p-6 rounded-xl shadow-sm">
						<div class="flex-shrink-0">
							<div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
								<i class="pi pi-users text-white text-lg"></i>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-800 mb-2">বিশেষ শিক্ষা</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								বিশেষ চাহিদাসম্পন্ন শিশুদের জন্য আমাদের রয়েছে বিশেষায়িত শিক্ষা কার্যক্রম যা তাদের ব্যক্তিত্ব ও দক্ষতা বিকাশে সহায়তা করে।
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom Row Services -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
				<!-- কার্যকারী শিক্ষা -->
				<div class="text-center bg-white p-6 rounded-xl shadow-sm">
					<div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="pi pi-cog text-white text-xl"></i>
					</div>
					<h3 class="text-lg font-semibold text-gray-800 mb-3">কার্যকারী শিক্ষা</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						আমাদের কার্যকারী শিক্ষা কর্মসূচি বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের দৈনন্দিন জীবনযাত্রার দক্ষতা বৃদ্ধি করে। এর মাধ্যমে তারা স্বাবলম্বী হয়ে উঠতে
						পারে।
					</p>
				</div>

				<!-- আর্থিক ও অন্যান্য সহযোগিতা -->
				<div class="text-center bg-white p-6 rounded-xl shadow-sm">
					<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="pi pi-dollar text-white text-xl"></i>
					</div>
					<h3 class="text-lg font-semibold text-gray-800 mb-3">আর্থিক ও অন্যান্য সহযোগিতা</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						আমরা পরিবারগুলোকে আর্থিক সহায়তা প্রদান করি যাতে তারা তাদের বিশেষ চাহিদাসম্পন্ন সন্তানের যত্ন নিতে পারে। এছাড়াও আমরা প্রয়োজনীয় সামগ্রী
						সরবরাহ করি।
					</p>
				</div>

				<!-- পুনর্বাসন, স্বাস্থ্যসেবা ও সাংস্কৃতিক বিকাশ -->
				<div class="text-center bg-white p-6 rounded-xl shadow-sm">
					<div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="pi pi-heart-fill text-white text-xl"></i>
					</div>
					<h3 class="text-lg font-semibold text-gray-800 mb-3">পুনর্বাসন, স্বাস্থ্যসেবা ও সাংস্কৃতিক বিকাশ</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						আমাদের পুনর্বাসন কেন্দ্রে ফিজিওথেরাপি, অকুপেশনাল থেরাপি এবং সাংস্কৃতিক কার্যক্রমের মাধ্যমে বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সামগ্রিক উন্নয়ন
						নিশ্চিত করি।
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	// Add any necessary composables or reactive data here
</script>

<style scoped>
	. {
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}

	/* Mobile responsive adjustments */
	@media (max-width: 1024px) {
		.flex-row-reverse {
			flex-direction: row !important;
		}

		.text-right {
			text-align: left !important;
		}
	}
</style>
