<template>
    <div class="container  px-4 sm:px-6 md:px-8 lg:px-12 my-12  mx-auto ">
        <div class="border rounded-lg py-5">
            <!-- Header Section -->
            <div class="text-center mb-12">
                <h2 class="text-2xl font-bold text-teal-600 mb-4">আয়-এর উৎসসমূহ</h2>
                <p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    আমাদের সকল আয়ের প্রাথমিক উৎসগুলোর বিস্তারিত তথ্য পুরো স্বচ্ছতা সহকারে
                </p>
            </div>

            <!-- Carousel Section -->
            <div class="relative">
                <Carousel 
                    :value="slides" 
                    :numVisible="3" 
                    :numScroll="1" 
                    :circular="true"
                    :autoplayInterval="4000"
                    :responsiveOptions="responsiveOptions"
                    class="custom-carousel"
                    ref="carouselRef"
                    @update:page="updateCurrentIndex"
                >
                    <template #item="slotProps">
                        <div class="p-4">
                            <div 
                                :class="[
                                    'rounded-xl p-8 transition-all duration-300 min-h-[400px] flex flex-col justify-between',
                                    isMiddleCard(slotProps.index) ? 'bg-[#00725E] text-white transform scale-110 shadow-2xl' : 'bg-white text-gray-700 shadow-md'
                                ]"
                            >
                                <!-- Icon -->
                                <div class="flex justify-center mb-6">
                                    <div 
                                        :class="[
                                            'w-16 h-16 rounded-full flex items-center justify-center',
                                            isMiddleCard(slotProps.index) ? 'bg-yellow-400' : 'bg-yellow-100'
                                        ]"
                                    >
                                        <i 
                                            :class="[
                                                slotProps.data.icon, 
                                                'text-2xl',
                                                isMiddleCard(slotProps.index) ? 'text-teal-700' : 'text-yellow-600'
                                            ]"
                                        ></i>
                                    </div>
                                </div>

                                <!-- Title -->
                                <h3 
                                    :class="[
                                        'text-xl font-bold text-center mb-4',
                                        isMiddleCard(slotProps.index) ? 'text-yellow-400' : 'text-gray-800'
                                    ]"
                                >
                                    {{ slotProps.data.title }}
                                </h3>

                                <!-- Description -->
                                <p 
                                    :class="[
                                        'text-center leading-relaxed text-sm',
                                        isMiddleCard(slotProps.index) ? 'text-white' : 'text-gray-600'
                                    ]"
                                >
                                    {{ slotProps.data.description }}
                                </p>

                                <!-- Amount (for center slide) -->
                                <div 
                                    v-if="isMiddleCard(slotProps.index)" 
                                    class="text-center mt-6"
                                >
                                    <div class="text-2xl font-bold text-yellow-400">
                                        {{ slotProps.data.amount }}
                                    </div>
                                    <div class="text-sm text-gray-200 mt-1">
                                        গত বছরের তুলনায় ২০% বৃদ্ধি
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>

                
            </div>

           
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Carousel from 'primevue/carousel'

const currentIndex = ref(0)
const carouselRef = ref()

const slides = ref([
    {
        id: 1,
        title: 'ব্যক্তিগত ও আন্তর্জাতিক দাতাদের অনুদান',
        description: 'বিভিন্ন দাতব্য সংস্থা, এনজিও, প্রতিষ্ঠান এবং সরকারী-বেসরকারী খাত থেকে প্রাপ্ত অনুদান।',
        icon: 'pi pi-heart',
        amount: '৫০ লক্ষ টাকা'
    },
    {
        id: 2,
        title: 'ব্যক্তিগত অনুদানের ভিত্তিতে সংগ্রহ ও দান',
        description: 'ছোট বড় ব্যক্তিগত দান, মাসিক দাতাদের নিয়মিত অনুদান এবং উৎসবকেন্দ্রিক বিশেষ তহবিল সংগ্রহ প্রোগ্রাম।',
        icon: 'pi pi-money-bill',
        amount: '৭৫ লক্ষ টাকা'
    },
    {
        id: 3,
        title: 'কর্পোরেট স্পনসরশিপ',
        description: 'সামাজিক দায়বদ্ধতার অংশ হিসেবে কর্পোরেট প্রতিষ্ঠানের আমাদের কার্যক্রমে অনুদান বাজেট বরাদ্দ দিয়ে সাহায্য।',
        icon: 'pi pi-building',
        amount: '৩০ লক্ষ টাকা'
    },
    {
        id: 4,
        title: 'সরকারি অনুদান',
        description: 'সরকারি বিভিন্ন মন্ত্রণালয় এবং দপ্তর থেকে প্রাপ্ত বিশেষ প্রকল্প ভিত্তিক অনুদান।',
        icon: 'pi pi-flag',
        amount: '২৫ লক্ষ টাকা'
    },
    {
        id: 5,
        title: 'ইভেন্ট ও ফান্ড রেইজিং',
        description: 'বিভিন্ন সাংস্কৃতিক অনুষ্ঠান, চ্যারিটি ইভেন্ট এবং তহবিল সংগ্রহ কার্যক্রম থেকে আয়।',
        icon: 'pi pi-calendar',
        amount: '১৫ লক্ষ টাকা'
    }
])

const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
    }
])

// Function to determine if current card is in the middle position
const isMiddleCard = (index) => {
    // Calculate the middle index based on current carousel position
    const middleIndex = (currentIndex.value + 1) % slides.value.length
    return index === middleIndex
}

// Update current index when carousel changes
const updateCurrentIndex = (newIndex) => {
    currentIndex.value = newIndex
}

const nextSlide = () => {
    if (carouselRef.value) {
        const nextIndex = (currentIndex.value + 1) % slides.value.length
        currentIndex.value = nextIndex
        // Trigger carousel next programmatically if available
    }
}

const previousSlide = () => {
    if (carouselRef.value) {
        const prevIndex = currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1
        currentIndex.value = prevIndex
        // Trigger carousel previous programmatically if available
    }
}
</script>

<style lang="scss" scoped>


/* Custom carousel styles */
:deep(.p-carousel-container) {
    position: relative;
}

:deep(.p-carousel-content) {
    padding: 2rem 0;
}

:deep(.p-carousel-indicators) {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

:deep(.p-carousel-indicator) {
    margin: 0 0.5rem;
}

:deep(.p-carousel-indicator button) {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #d1d5db;
    border: none;
    transition: all 0.3s ease;
}

:deep(.p-carousel-indicator.p-highlight button) {
    background-color: #0d9488;
    transform: scale(1.2);
}

/* Hide default navigation buttons */
:deep(.p-carousel-prev),
:deep(.p-carousel-next) {
    display: none;
}

/* Custom animation for center slide */
.custom-carousel {
    :deep(.p-carousel-item) {
        transition: all 0.3s ease;
    }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .custom-carousel :deep(.p-carousel-item) {
        padding: 1rem;
    }
}
</style>