<template>
	<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
		<!-- Header Section -->
		<div class="text-center mb-12">
			<div class="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
				Our Team
			</div>
			<h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
				The Team Behind the Mission
			</h1>
			<h2 class="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
				Disability : In Team
			</h2>
			<p class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
				Our specialized, dedicated and multi-skilled team works towards the development, equal rights, and social inclusion of people with disabilities.
			</p>
		</div>

		<!-- Team Cards Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<!-- Doctor -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Doctor</h3>
				<p class="text-gray-500 text-sm">Experienced doctors & specialists</p>
			</div>

			<!-- Therapists -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm2 13h-4v-2h4v2zm0-4h-4V7h4v4z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Therapists</h3>
				<p class="text-gray-500 text-sm">Physio & occupational therapy</p>
			</div>

			<!-- Counselors -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Counselors</h3>
				<p class="text-gray-500 text-sm">Mental health support</p>
			</div>

			<!-- Social Workers -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Social Workers</h3>
				<p class="text-gray-500 text-sm">Social rehabilitation specialists</p>
			</div>

			<!-- Trainers -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.95 2.524z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Trainers</h3>
				<p class="text-gray-500 text-sm">Skill development trainers</p>
			</div>

			<!-- Volunteers -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Volunteers</h3>
				<p class="text-gray-500 text-sm">Dedicated volunteers</p>
			</div>

			<!-- Project Managers -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Project Managers</h3>
				<p class="text-gray-500 text-sm">Skilled project management</p>
			</div>

			<!-- Special Teachers -->
			<div class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
				<div class="w-20 h-20 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
					<div class="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
						</svg>
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">Special Teachers</h3>
				<p class="text-gray-500 text-sm">Specialists in disability education</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	
</script>

<style scoped>
	
</style>