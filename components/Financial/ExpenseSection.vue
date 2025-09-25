<template>
	<div class="bg-[#00725E] py-16 px-4 relative overflow-hidden ">
		<!-- Decorative background elements -->
		<div class="hidden lg:block absolute top-4 right-4 opacity-40">
			<img class="w-96" src="/svg/about/design2.svg" alt="" />
		</div>

		<div class="hidden md:block absolute -bottom-36 -left-48 opacity-40">
			<img class="w-96" src="/svg/about/design2.svg" alt="" />
		</div>

		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
			<!-- Header -->
			<div class="text-start mb-12">
				<h2 class="text-2xl font-bold text-yellow-400 mb-4">ব্যয়ের খাতসমূহ</h2>
				<p class="text-white text-start text-lg max-w-2xl leading-relaxed opacity-90">প্রাপ্ত অর্থ ব্যবহার করা হয় একাধিক সেবামূলক খাতে, যার মধ্যে উল্লেখযোগ্য</p>
			</div>
		</div>

		<div class="max-w-4xl mx-auto relative z-10">
			<!-- Expense Categories Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				<!-- Left Column -->
				<div class="space-y-6">
					<!-- চিকিৎসা ও সার্বিক সহায়তা -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								চিকিৎসা ও সার্জারি সহায়তা
							</h3>
						</div>
					</div>

					<!-- আবাসন ও খাবারের -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">আবাসন ও খাদ্যসেবা</h3>
						</div>
					</div>

					<!-- শিক্ষা ও কর্মসূচির প্রশিক্ষণ -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								শিক্ষা ও কারিগরি প্রশিক্ষণ
							</h3>
						</div>
					</div>

					<!-- মানসিক স্বাস্থ্য ও কাউন্সেলিং -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								মানসিক স্বাস্থ্য ও কাউন্সেলিং
							</h3>
						</div>
					</div>
				</div>

				<!-- Divider Line (visible on large screens) -->
				<div class="hidden lg:block absolute left-1/2 top-32 bottom-16 w-px bg-white opacity-30 transform -translate-x-1/2"></div>

				<!-- Right Column -->
				<div class="space-y-6">
					<!-- কর্মচারী ও আনুষঙ্গিক কাজ সহায় -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								কর্মসংস্থান ও আয়মুখী কার্যক্রম
							</h3>
						</div>
					</div>

					<!-- যাতায়াত ও তহবিল সংগ্রহের -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								স্বাস্থ্যসেবা ও ওষুধ সরবরাহ
							</h3>
						</div>
					</div>

					<!-- পরিচালনা ও প্রকাশনার খরচ -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								পরিচালন ও রক্ষণাবেক্ষণ খরচ
							</h3>
						</div>
					</div>

					<!-- সচেতনতা বৃদ্ধি কর্মসূচি ও সার্বিক প্রোগ্রামিং -->
					<div class="flex items-start space-x-4 group">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
						</div>
						<div>
							<h3 class="text-white text-sm font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
								সচেতনতা বৃদ্ধির কার্যক্রম ও সামাজিক প্রচার অভিযান
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
