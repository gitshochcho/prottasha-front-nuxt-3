<template>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
        <div class="relative bg-gray-100 rounded-3xl py-16 px-8 overflow-hidden min-h-[500px]">
            <!-- Header Section -->
            <div class="text-center mb-12">
                <div class="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                     অভিজ্ঞতার গল্প
                </div>
                <h2 class="text-4xl md:text-4xl font-bold text-gray-800 mb-3">
                    আমাদের কার্যক্রম নিয়ে
                </h2>
                <h3 class="text-4xl md:text-4xl font-bold text-gray-800">
                    কমিউনিটির প্রতিক্রিয়া
                </h3>
            </div>

            <!-- Floating Profile Images -->
            <div class="absolute inset-0 pointer-events-none">
                
            </div>

            <!-- PrimeVue Carousel for Testimonials -->
            <div class="relative z-10">
                <Carousel 
                    :value="testimonials" 
                    :numVisible="1" 
                    :numScroll="1"
                    :circular="true"
                    :autoplayInterval="5000"
                    :showNavigators="false"
                    :showIndicators="false"
                    class="testimonial-carousel"
                >
                    <template #item="{ data }">
                        <div class="max-w-4xl mx-auto text-center">
                            <!-- Main Profile Image -->
                            <div class="w-24 h-24 mx-auto mb-8 rounded-full bg-white shadow-xl overflow-hidden">
                                <img :src="data.image" :alt="data.name" class="w-full h-full object-cover">
                            </div>

                            <!-- Testimonial Text -->
                            <blockquote class="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 px-4">
                                {{ data.quote }}
                            </blockquote>

                            <!-- Author Info -->
                            <div class="text-center">
                                <h4 class="text-lg font-semibold text-gray-800 mb-1">{{ data.name }}</h4>
                                <p class="text-gray-600">{{ data.location }}</p>
                            </div>
                        </div>
                    </template>
                </Carousel>

                <!-- Custom Navigation Arrows -->
                <button 
                    @click="$refs.carousel.navBackward()" 
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
                >
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>

                <button 
                    @click="$refs.carousel.navForward()" 
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-700 rounded-full shadow-lg flex items-center justify-center hover:bg-green-800 transition-colors z-20"
                >
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>

            <!-- Decorative Dotted Pattern -->
            <div class="absolute inset-0 opacity-10 pointer-events-none">
                <div class="w-full h-full" style="background-image: radial-gradient(circle, #9CA3AF 1px, transparent 1px); background-size: 20px 20px;"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'

const testimonials = ref([
    {
        id: 1,
        name: "জর্ডান",
        location: "ম্যাপলটন, ওহাইও",
        quote: "এই এনজিও টিম আমার সমস্যার প্রতি যে দ্রুত প্রতিক্রিয়া দেখিয়েছে, তা আমাকে মুগ্ধ করেছে । আমি সত্যিই কৃতজ্ঞ ।",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "সারা জনসন",
        location: "পোর্টল্যান্ড, ওরেগন",
        quote: "এই সংগঠনটি আমাদের কমিউনিটিতে যে প্রভাব ফেলেছে তা অসাধারণ। তাদের কার্যক্রম অনেক পরিবারকে নতুন আশা ও পরিবর্তন এনে দিয়েছে। 🌟",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "মাইকেল চেন",
        location: "অস্টিন, টেক্সাস",
        quote: "এই এনজিওর সাথে কাজ করা আমার জন্য পরিবর্তনশীল অভিজ্ঞতা। টেকসই পরিবর্তন ও কমিউনিটি ক্ষমতায়নে তাদের অঙ্গীকার সত্যিই অনুপ্রেরণাদায়ক। ✨",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "এমিলি রদ্রিগেজ",
        location: "ডেনভার, কলোরাডো",
        quote: "এখানকার স্বেচ্ছাসেবক ও কর্মীরা সবসময় বাড়তি সহযোগিতা করেন। তারা শুধু সহায়তা দেন না, সম্পর্ক গড়ে তোলেন এবং স্থায়ী পরিবর্তন আনেন। 🙏",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
])

const carousel = ref()
</script>

<style scoped>
/* Hide default PrimeVue carousel styling */
:deep(.p-carousel-content) {
    padding: 0;
}

:deep(.p-carousel-container) {
    margin: 0;
}

:deep(.p-carousel-items-content) {
    padding: 0;
}

:deep(.p-carousel-item) {
    padding: 0;
}

/* Custom carousel styling */
.testimonial-carousel {
    height: auto;
}

:deep(.p-carousel-indicators) {
    display: none;
}

:deep(.p-carousel-prev),
:deep(.p-carousel-next) {
    display: none;
}
</style>