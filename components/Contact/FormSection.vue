<script setup>
	const formData = ref({
		name: "",
		phone: "",
		email: "",
		address: "",
		message: "",
	})
	const emit = defineEmits(["add_emit"])
	const validations_errors = ref({})
	const skip_validations = ref(["id"])
	const isLoading = ref(false)
	const response_modal = ref({})
	const createHandler = async () => {
		validations_errors.value = {}
		const errors = Object.keys(formData.value).filter((item) => !formData.value[item] && !skip_validations.value.includes(item))
		if (errors.length > 0) {
			errors.map((item) => {
				validations_errors.value[item] = `${item.replaceAll("_", " ")} is required`
			})
			console.log(validations_errors.value)
			return
		}

		try {
			isLoading.value = true
			const getData = await $fetchCMS(`cms/contacts`, {
				method: "POST",
				body: formData.value,
			})
			response_modal.value = getData
			if (getData.status == true) {
				emit("add_emit", getData.data)
				resetForm()
			}
			if (getData.status == true) {
				response_modal.value = getData
			}
		} catch (e) {
			console.log("Get Message", e.message)
			// console.log('Get response',e.response);
			if (e.response?.status === 404 || e.response?.status === 422) {
				console.log("here 1", e.response)
				if (e.response?.status === 404 || e.response?.status === 409 || e.response?.status === 422) {
					console.log("here 2", e.response._data.data)
					for (const key in e.response._data.data) {
						if (e.response._data.data.hasOwnProperty(key)) {
							const value = e.response._data.data[key][0]
							validations_errors.value[key] = value
						}
					}
				}
			} else if (!e.response?.status) {
				response_modal.value = {
					status: false,
					message: "Something went wrong. Please try again later.",
				}
			} else {
				response_modal.value = {
					status: e.response._data.status,
					message: e.response._data.message,
				}
			}
		} finally {
			isLoading.value = false
		}
	}
	const resetForm = () => {
		formData.value = {
			name: "",
			phone: "",
			email: "",
			address: "",
			message: "",
		}
		validations_errors.value = {}
	}
</script>

<template>
	<div class="container px-4 pt-20 pb-8 mx-auto md:py-6 md:px-8 lg:pt-20 lg:px-16">
		<div class="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
			<!-- Left side - Info card -->
			<div
				class="flex flex-col justify-start w-full px-6 py-10 text-white md:w-1/3"
				style="background-image: url('/images/profession/contact.png'); background-size: cover; background-position: center">
				<div style="border-radius: 0.5rem; padding: 1.5rem">
					<h2 class="mb-2 text-xl font-bold">স্থায়ী কার্যালয়</h2>

					<div class="mt-6 space-y-4">
						<div class="flex items-center">
							<div class="flex items-center justify-center w-5 h-5 mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<span>(+৮৮) ০১৭১২-০৩৬৩৭৩</span>
						</div>
						<div class="flex items-center">
							<div class="flex items-center justify-center w-5 h-5 mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<span>Info@prottasha.net</span>
						</div>
					</div>
				</div>
				<div style="border-radius: 0.5rem; padding: 1.5rem">
					<h2 class="mb-2 text-xl font-bold">ঢাকা কার্যালয়</h2>

					<div class="mt-6 space-y-4">
						<div class="flex items-center">
							<div class="flex items-center justify-center w-5 h-5 mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<span> (+৮৮) ০১৭১৬-৬১৫৮৩১</span>
						</div>
						<div class="flex items-center">
							<div class="flex items-center justify-center w-5 h-5 mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<span>Info@prottasha.net</span>
						</div>
					</div>
					<div class="flex space-x-3 mt-6">
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<a
							href="#"
							class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
							<svg class="w-4 h-4 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Right side - Form -->
			<div class="w-full p-8 md:w-2/3 font-bangla">
				<div class="space-y-6">
					<!-- Name and Phone -->
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label class="block mb-3 text-sm font-medium text-gray-700">নাম</label>
							<input
								type="text"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
								v-model="formData.name"
								:class="validations_errors.name ? 'border-red-500' : ''"
								autocomplete="off"
								@focus="validations_errors.name = ''"
								placeholder="নাম" />
							<LazyInputError class="text-sm mt-1" :message="validations_errors.name" />
						</div>
						<div>
							<label class="block mb-3 text-sm font-medium text-gray-700">ফোনের</label>
							<input
								type="tel"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
								v-model="formData.phone"
								:class="validations_errors.phone ? 'border-red-500' : ''"
								autocomplete="off"
								@focus="validations_errors.phone = ''"
								placeholder="ফোনের" />
							<LazyInputError class="text-sm mt-1" :message="validations_errors.phone" />
						</div>
					</div>

					<!-- Email and Address -->
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label class="block mb-3 text-sm font-medium text-gray-700">ইমেইল</label>
							<input
								type="email"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
								v-model="formData.email"
								:class="validations_errors.email ? 'border-red-500' : ''"
								autocomplete="off"
								@focus="validations_errors.email = ''"
								placeholder="info@prottasha.net" />
							<LazyInputError class="text-sm mt-1" :message="validations_errors.email" />
						</div>
						<div>
							<label class="block mb-3 text-sm font-medium text-gray-700">ঠিকানা</label>
							<input
								type="text"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
								v-model="formData.address"
								:class="validations_errors.address ? 'border-red-500' : ''"
								autocomplete="off"
								@focus="validations_errors.address = ''"
								placeholder="+৮৮ ০১৮৫৬ ৩৮ ৮৮ ৮০৬" />
							<LazyInputError class="text-sm mt-1" :message="validations_errors.address" />
						</div>
					</div>

					<!-- Message -->
					<div>
						<label class="block mb-3 text-sm font-medium text-gray-700">বার্তা</label>
						<textarea
							rows="6"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
							v-model="formData.message"
							:class="validations_errors.message ? 'border-red-500' : ''"
							autocomplete="off"
							@focus="validations_errors.message = ''"
							placeholder="আপনার বার্তা লিখুন..."></textarea>
						<LazyInputError class="text-sm mt-1" :message="validations_errors.message" />
					</div>

					<!-- Submit Button -->
					<div class="flex justify-end pt-4">
						<Button v-if="isLoading" disabled class="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium min-w-[140px]">
							<ProgressSpinner style="width: 20px; height: 20px" strokeWidth="4" />
						</Button>
						<Button
							v-else
							type="button"
							class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
							@click="createHandler()">
							বার্তা পাঠান
						</Button>
					</div>
				</div>

				<!-- Bottom Quote -->
				<div class="mt-8 pt-6 border-t border-gray-200">
					<p class="text-center text-sm text-gray-600 italic">"দুর্বল, একসাথে আমাদের আরো ছড়িয়ে দিতে - "প্রত্যাশা"র হৃদ এখানেই"</p>
				</div>
			</div>
		</div>

		<LazyResponseModal :response_modal="response_modal" />
	</div>
</template>

<style>
	.font-bangla {
		font-family: "SolaimanLipi", "Kalpurush", sans-serif;
	}

	/* Custom focus styles */
	input:focus,
	textarea:focus {
		box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes slide-up {
		from {
			transform: translateY(20px);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-in-out;
	}

	.animate-slide-up {
		animation: slide-up 0.5s ease-in-out;
	}
</style>
