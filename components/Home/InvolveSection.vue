<template>
	<div class="relative overflow-hidden" style="background-image: url('/images/slider/background-3.png');">
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-10">
			<!-- You can add background pattern images here if needed -->
		</div>

		<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 relative z-10">
			<!-- Header Section -->
			<div class="text-center mb-12">
				<div class="mb-4">
					<span class="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">Get Involved</span>
				</div>

				<h1 class="text-4xl font-bold mb-6 text-white">
					Ready to Make a Difference?<br />
					<span class="text-yellow-400">Work With Us</span>
				</h1>

				<p class="text-white/90 max-w-2xl mx-auto leading-relaxed">
					If you dream of building a humane society, working with us could be your next meaningful step.
				</p>
			</div>

			<!-- Involvement Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Become a Volunteer -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="text-center mb-6">
						<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="pi pi-users text-black text-xl"></i>
						</div>

						<h3 class="text-xl font-bold text-white mb-3">Become a Volunteer</h3>
						<p class="text-white/80 text-sm mb-6">Help us with your time and skills</p>
					</div>

					<!-- Benefits List -->
					<div class="space-y-3 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Flexible Schedule</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Skill Development</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Social Contribution</span>
						</div>
					</div>

					<button
						class="w-full bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
						Join Now
						<i class="pi pi-arrow-right text-sm"></i>
					</button>
				</div>

				<!-- Join Professional Positions -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="text-center mb-6">
						<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="pi pi-briefcase text-black text-xl"></i>
						</div>

						<h3 class="text-xl font-bold text-white mb-3">Join Professional Positions</h3>
						<p class="text-white/80 text-sm mb-6">Build your career with us and make a difference</p>
					</div>

					<!-- Benefits List -->
					<div class="space-y-3 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Competitive Salary</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Professional Development</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Job Satisfaction</span>
						</div>
					</div>

					<button
						class="w-full bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
						Apply Now
						<i class="pi pi-arrow-right text-sm"></i>
					</button>
				</div>

				<!-- Donate -->
				<div class="bg-teal-700/50 backdrop-blur-sm p-8 rounded-lg border border-teal-600/30">
					<div class="text-center mb-6">
						<div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="pi pi-heart text-black text-xl"></i>
						</div>

						<h3 class="text-xl font-bold text-white mb-3">Donate</h3>
						<p class="text-white/80 text-sm mb-6">Help our work with financial support</p>
					</div>

					<!-- Benefits List -->
					<div class="space-y-3 mb-8">
						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Transparent Usage</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Regular Reports</span>
						</div>

						<div class="flex items-center gap-3">
							<div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
								<i class="pi pi-check text-black text-xs"></i>
							</div>
							<span class="text-white text-sm">Direct Impact</span>
						</div>
					</div>

					<button
						class="w-full bg-white hover:bg-gray-100 text-teal-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
						Donate Now
						<i class="pi pi-arrow-right text-sm"></i>
					</button>
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
