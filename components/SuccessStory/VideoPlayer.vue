<script setup>
	// Define the prop
	const props = defineProps({
		videoSliderList: {
			type: Array,
			required: true,
		},
		maxWidth: {
			type: String,
			default: "70%",
		},
	})

	const isOpen = ref(false)
	const url = ref("")
	const title = ref("")
	const update_popup = (val) => {
		isOpen.value = val
	}
	const openModal = (id) => {
		url.value = props.videoSliderList[id].url
		title.value = props.videoSliderList[id].hl
		isOpen.value = true
	}

	const settings1 = ref([{ breakpoint: "1024px", numVisible: 1, numScroll: 1 }])

	onMounted(() => {})
</script>

<template>
	<div class="w-full videoPart">
		<Carousel :value="videoSliderList" :numVisible="1" :numScroll="1" :autoplayInterval="10000" :circular="true" :responsiveOptions="settings1" class="w-full">
			<template #item="slotProps">
				<div class="w-full video_part">
					<div class="h-full mx-auto" :style="{ maxWidth: props.maxWidth }">
						<div class="relative block w-full videoBox rounded-xl" @click="openModal(slotProps.index)">
							<img :src="slotProps.data.img" class="w-full rounded-xl" />
							<img src="/images/yt-play.png" class="absolute top-[46%] z-40 left-[46%] w-[50px] h-[50px] yt-play" />
							<button
								class="absolute top-[46%] z-40 left-[46%] yt-play bg-red-600 hover:bg-red-700 text-white w-16 h-16 rounded-full flex items-center justify-center transition-colors">
								<i class="pi pi-play text-xl ml-1"></i>
							</button>
						</div>
					</div>
				</div>
			</template>
			<template #containerStart>
				<div class="carousel-container">
					<i class="cursor-pointer fa-solid fa-arrow-left-long" @click="$refs.carousel.prev()"></i>
				</div>
			</template>
			<template #containerEnd>
				<div class="carousel-container">
					<i class="cursor-pointer fa-solid fa-arrow-right-long" @click="$refs.carousel.next()"></i>
				</div>
			</template>
		</Carousel>
	</div>
	<VideoModal :open="isOpen" :contentUrl="url" :contentTitle="title" @updatePopup="update_popup" />
</template>

<style lang="scss" scoped>
	:deep(.p-carousel-prev-button) {
		display: none !important;
	}
	:deep(.p-carousel-next-button) {
		display: none !important;
	}
	:deep(.p-carousel-indicator-button) {
		display: none !important;
	}
	:deep(.p-carousel-indicator-list) {
		display: none !important;
	}
	.videoPart {
		background: url("/images/divider-2.png") no-repeat left center;

		.videoBox {
			padding: 30px 0px 0 0px;
			cursor: pointer;

			&:hover {
				.videoBox {
					background-size: 95% 93%;
				}
				background-size: 95% 93%;
			}
		}
	}

	.video_part .videoBox .yt-play {
		z-index: 40;
		cursor: pointer;
		transition: all 0.2s ease;
		animation: pulseGlow 1.5s infinite;
	}

	@keyframes pulseGlow {
		0% {
			transform: scale(1);
			filter: drop-shadow(0 0 0px rgba(5, 89, 198, 0.7));
		}
		50% {
			transform: scale(1.3);
			filter: drop-shadow(0 0 8px rgba(5, 89, 198, 0.8));
		}
		100% {
			transform: scale(1);
			filter: drop-shadow(0 0 0px rgba(5, 89, 198, 0.7));
		}
	}

	/* Add hover effect for additional interactivity */
	.video_part .videoBox .yt-play:hover {
		transform: scale(1.3) !important;
		filter: drop-shadow(0 0 10px rgba(5, 89, 198, 0.2)) !important;
	}

	/* Stop animation when hovering over the videoBox */
	.video_part .videoBox:hover .yt-play {
		transform: scale(1.3) !important;
		animation: none !important; /* Disable animation */
	}
</style>
