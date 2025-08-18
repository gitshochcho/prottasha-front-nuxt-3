<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
        <!-- Header Section -->
        <div class="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end">
            <div class="flex flex-col items-start mb-6 lg:mb-0">
                <div class="mb-4">
                    <span class="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">আমাদের অবকাঠামো</span>
                </div>

                <h1 class="text-3xl sm:text-4xl font-bold mb-4 flex flex-col items-start gap-3">
                    <span class="text-gray-800 ">আমাদের অবকাঠামো </span>
                    <span class="text-gray-800">সম্পর্কে জানুন</span>
                </h1>
            </div>

            <p class="text-gray-600 max-w-2xl text-left leading-relaxed">
                আমরা প্রতিবন্ধী ব্যক্তিদের জন্য এমন একটি সহযোগিতামূলক পরিকাঠামো গড়ে তুলেছি, যেখানে তাঁদের জীবনের প্রতিটি দিককে সমর্থন করার ব্যবস্থা আছে।
            </p>
        </div>

		<!-- Facilities Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<!-- Specialized School -->
			<div class="bg-white p-6 rounded-lg shadow-sm border">
				<div class="mb-4">
					<div class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
						<i class="pi pi-graduation-cap text-white text-lg"></i>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">বিশেষায়িত বিদ্যালয়</h3>

				<ul class="text-sm text-gray-600 space-y-1">
					<li>প্রতিবন্ধী শিশুদের জন্য বিশেষ শিক্ষা ব্যবস্থা</li>
					<li>• বিশেষ শিক্ষক</li>
					<li>• আধুনিক পাঠ্যক্রম</li>
					<li>• ব্যক্তিগত যত্ন</li>
				</ul>
			</div>

			<!-- Comprehensive Medical Center -->
			<div class="bg-white p-6 rounded-lg shadow-sm border">
				<div class="mb-4">
					<div class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
						<i class="pi pi-heart text-white text-lg"></i>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">চিকিৎসাকেন্দ্র</h3>

				<ul class="text-sm text-gray-600 space-y-1">
					<li>২৪/৭ চিকিৎসা সেবা ও জরুরি চিকিৎসা</li>
					<li>• জরুরি সেব</li>
					<li>• বিশেষজ্ঞ চিকিৎসক</li>
					<li>• আধুনিক যন্ত্রপাতি</li>
					
				</ul>
			</div>

			<!-- Skills Development Center -->
			<div class="bg-white p-6 rounded-lg shadow-sm border">
				<div class="mb-4">
					<div class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
						<i class="pi pi-cog text-white text-lg"></i>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">কারিগরি প্রশিক্ষণ কেন্দ্র</h3>

				<ul class="text-sm text-gray-600 space-y-1">
					<li>দক্ষতা উন্নয়ন ও পেশাগত প্রশিক্ষণ</li>
					<li>• হস্তশিল্প</li>
					<li>• কম্পিউটার প্রশিক্ষণ</li>
					<li>• উদ্যোক্তা উন্নয়ন</li>
				</ul>
			</div>

			<!-- Inclusive Living Facilities -->
			<div class="bg-white p-6 rounded-lg shadow-sm border">
				<div class="mb-4">
					<div class="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
						<i class="pi pi-home text-white text-lg"></i>
					</div>
				</div>

				<h3 class="text-lg font-bold text-gray-800 mb-3">নিরাপদ আবাসন</h3>

				<ul class="text-sm text-gray-600 space-y-1">
					<li>স্বাচ্ছন্দ্যময় ও নিরাপদ থাকার ব্যবস্থা</li>
					<li>• পরিষ্কার পরিবেশ</li>
					<li>• পুষ্টিকর খাবার</li>
					<li>• বিনোদন ব্যবস্থা</li>
				</ul>
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
