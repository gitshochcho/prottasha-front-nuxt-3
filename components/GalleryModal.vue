<template>
	<div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" @click="closeModal">
		<div class="relative w-full max-w-5xl h-[90vh] mx-4" @click.stop>
			<div class="relative bg-white rounded-lg shadow-xl dark:bg-gray-800 h-full flex flex-col">
				<!-- Header -->
				<div class="flex items-center justify-between p-4 border-b dark:border-gray-700 flex-shrink-0">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						{{ title }}
					</h3>
					<button @click="closeModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>

				<!-- Gallery Content -->
				<div class="p-4 flex-1 flex flex-col">
					<!-- Main Image Container - Fixed Size -->
					<div class="relative flex-1 mb-4">
						<div class="w-full h-full relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
							<!-- Loading state -->
							<div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center">
								<div class="w-8 h-8 border-b-2 border-purple-600 rounded-full animate-spin"></div>
							</div>

							<!-- Main Image - Always centered and contained within fixed area -->
							<img
								v-if="images && images[currentImageIndex]"
								:src="images[currentImageIndex]"
								class="absolute inset-0 w-full h-full object-contain"
								:class="{ 'opacity-0': imageLoading }"
								@load="imageLoaded"
								@error="imageError"
								loading="lazy" />

							<!-- Error state -->
							<div v-if="imageLoadError" class="absolute inset-0 flex items-center justify-center">
								<div class="text-center text-gray-500 dark:text-gray-400">
									<svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
									<p>Failed to load image</p>
								</div>
							</div>

							<!-- Navigation Arrows - positioned over the fixed image area -->
							<button
								v-if="images && images.length > 1"
								@click="previousImage"
								class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
								</svg>
							</button>

							<button
								v-if="images && images.length > 1"
								@click="nextImage"
								class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>
							</button>
						</div>
					</div>

					<!-- Bottom Section - Fixed Height -->
					<div class="flex-shrink-0">
						<!-- Image Counter -->
						<div v-if="images && images.length > 1" class="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
							{{ currentImageIndex + 1 }} of {{ images.length }}
						</div>

						<!-- Thumbnail Strip -->
						<div v-if="images && images.length > 1" class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
							<button
								v-for="(image, index) in images"
								:key="index"
								@click="setCurrentImage(index)"
								class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105"
								:class="currentImageIndex === index ? 'border-purple-500 shadow-lg' : 'border-gray-300 hover:border-gray-400'">
								<img :src="image" class="w-full h-full object-cover" loading="lazy" />
							</button>
						</div>

						<!-- Gallery info for single image -->
						<div v-if="images && images.length === 1" class="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">Single image</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		open: {
			type: Boolean,
			default: false,
		},
		images: {
			type: Array,
			default: () => [],
		},
		title: {
			type: String,
			default: "Gallery",
		},
	})

	const emit = defineEmits(["updatePopup"])

	const currentImageIndex = ref(0)
	const imageLoading = ref(false)
	const imageLoadError = ref(false)

	const closeModal = () => {
		emit("updatePopup", false)
		resetModal()
	}

	const resetModal = () => {
		currentImageIndex.value = 0
		imageLoading.value = false
		imageLoadError.value = false
	}

	const setCurrentImage = (index) => {
		if (index >= 0 && index < props.images.length) {
			imageLoading.value = true
			imageLoadError.value = false
			currentImageIndex.value = index
		}
	}

	const nextImage = () => {
		if (props.images && props.images.length > 1) {
			const nextIndex = currentImageIndex.value < props.images.length - 1 ? currentImageIndex.value + 1 : 0
			setCurrentImage(nextIndex)
		}
	}

	const previousImage = () => {
		if (props.images && props.images.length > 1) {
			const prevIndex = currentImageIndex.value > 0 ? currentImageIndex.value - 1 : props.images.length - 1
			setCurrentImage(prevIndex)
		}
	}

	const imageLoaded = () => {
		imageLoading.value = false
		imageLoadError.value = false
	}

	const imageError = () => {
		imageLoading.value = false
		imageLoadError.value = true
	}

	// Keyboard navigation
	const handleKeydown = (event) => {
		if (!props.open) return

		if (event.key === "Escape") {
			closeModal()
		} else if (event.key === "ArrowLeft") {
			event.preventDefault()
			previousImage()
		} else if (event.key === "ArrowRight") {
			event.preventDefault()
			nextImage()
		}
	}

	onMounted(() => {
		document.addEventListener("keydown", handleKeydown)
	})

	onUnmounted(() => {
		document.removeEventListener("keydown", handleKeydown)
	})

	// Reset when modal opens/closes
	watch(
		() => props.open,
		(newVal) => {
			if (newVal) {
				resetModal()
				if (props.images && props.images.length > 0) {
					imageLoading.value = true
				}
			}
		}
	)

	// Watch for image changes
	watch(
		() => props.images,
		(newImages) => {
			if (newImages && newImages.length > 0) {
				resetModal()
				imageLoading.value = true
			}
		},
		{ deep: true }
	)
</script>

<style scoped>
	/* Hide scrollbar for thumbnail strip */
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
