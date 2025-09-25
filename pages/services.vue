<template>
	<section class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12 ">
		<div class="">
			<!-- Header -->
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-teal-600 mb-4">আমাদের সেবাসমূহ</h2>
				<p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">
					বিশেষ চাহিদাসম্পন্ন ব্যক্তি ও শিশুদেরকে সামাজিকভাবে প্রতিষ্ঠিত করার লক্ষ্যে আমরা নিম্নের সেবাসমূহ প্রদান করে থাকি
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
							<h3 class="text-lg font-semibold text-gray-800 mb-2">খাদ্য নিরাপত্তা</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								আমরা নিশ্চিত করি যেন প্রতিটি বিশেষ চাহিদাসম্পন্ন ব্যক্তি ও শিশুর জন্য প্রতিদিনের আহার নিশ্চিত হয়—ক্ষুধা নয়, পুষ্টিই হোক তাদের অধিকার।
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
							<h3 class="text-lg font-semibold text-gray-800 mb-2">স্বাস্থ্য সেবা</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								সুলভ ও সহজলভ্য চিকিৎসা সেবার মাধ্যমে বিশেষ চাহিদাসম্পন্ন মানুষের সুস্বাস্থ্য নিশ্চিত করাই আমাদের অঙ্গীকার এবং স্থানীয় ও জাতীয় হাসপাতালের মাধ্যমে উন্নত চিকিৎসা প্রদান ছাড়াও মানসিক স্বাস্থ্য সেবা ও কাউন্সেলিং প্রদানে গুরুত্ব দেওয়া হয়।
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
							<h3 class="text-lg font-semibold text-gray-800 mb-2">খাদ্য ও পুষ্টি</h3>
							<p class="text-gray-600 text-sm leading-relaxed">
								শুধু খাবার নয়, পুষ্টিকর খাবার—প্রতিটি শিশুর শারীরিক ও মানসিক বিকাশের জন্য প্রয়োজনীয় পুষ্টির নিশ্চয়তা আমরা দিচ্ছি ভালবাসা ও যত্নের সঙ্গে।
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
								পারসোনালাইজড ক্লাসরুম ও শিক্ষক
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
					<h3 class="text-lg font-semibold text-gray-800 mb-3">কারিগরি শিক্ষা</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						প্রশিক্ষণ আর দক্ষতার মাধ্যমে তৈরি করছি স্বনির্ভর এক ভবিষ্যৎ—যেখানে বিশেষ চাহিদাসম্পন্ন ব্যক্তিরাও গড়ে তুলতে পারে নিজের সামাজিক অবস্থান, সম্মান ও আত্মমর্যাদায়। যেমন- সেলাই, বেত শিল্প, আইটি ট্রেনিং ইত্যাদি অন্তর্ভুক্ত।
					</p>
				</div>

				<!-- আর্থিক ও অন্যান্য সহযোগিতা -->
				<div class="text-center bg-white p-6 rounded-xl shadow-sm">
					<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="pi pi-dollar text-white text-xl"></i>
					</div>
					<h3 class="text-lg font-semibold text-gray-800 mb-3">আইনি ও অধিকার সচেতনতা</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						আমরা দিচ্ছি আইনি ও অধিকার সচেতনতা বিষয়ক তথ্য, সহায়তা, পরামর্শ এবং প্রশিক্ষণ—সবার জন্য সহজবোধ্য ও কার্যকরভাবে।
					</p>
				</div>

				<!-- পুনর্বাসন, স্বাস্থ্যসেবা ও সাংস্কৃতিক বিকাশ -->
				<div class="text-center bg-white p-6 rounded-xl shadow-sm">
					<div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<i class="pi pi-heart-fill text-white text-xl"></i>
					</div>
					<h3 class="text-lg font-semibold text-gray-800 mb-3">সৃজনশীলতা, খেলাধুলা ও সাংস্কৃতিক বিকাশ
</h3>
					<p class="text-gray-600 text-sm leading-relaxed">
						আমরা দিচ্ছি সৃজনশীলতা, খেলাধুলা ও সাংস্কৃতিক বিকাশে উৎসাহ, প্রশিক্ষণ, অংশগ্রহণ এবং প্রতিভা বিকাশের সুযোগ ও সহায়তা।
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
