<template>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
        <!-- Header Section -->
        <div 
            class="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
        >
            <div 
                class="inline-block bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-medium mb-6  hover:bg-amber-200 transition-colors duration-300"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="200"
            >
                আমাদের টিম
            </div>
            <h1 
                class="text-4xl md:text-5xl font-bold text-gray-800 mb-6  hover:text-teal-600 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
            >
                প্রতিবন্ধিতা: ইন টিম
            </h1>
            <p 
                class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed  hover:text-gray-800 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
            >
                একটি বিশেষায়িত, দক্ষ ও নিবেদিত টিম প্রতিবন্ধী ব্যক্তিদের উন্নয়ন, অধিকার ও সামাজিক অন্তর্ভুক্তির জন্য কাজ করে যাচ্ছে।
            </p>
        </div>

        <!-- Team Cards Grid -->
        <div 
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
        >
            <!-- Doctor -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="300"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="400"
                >
                    <div class="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-heart-fill text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-red-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="500"
                >
                    অভিজ্ঞ ডাক্তার
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="600"
                >
                    Experienced doctors & specialists
                </p>
            </div>

            <!-- Therapists -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="400"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="500"
                >
                    <div class="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-wrench text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-blue-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                >
                    ফিজিও ও কর্মসংস্থান থেরাপিস্ট
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="700"
                >
                    Physio & occupational therapy
                </p>
            </div>

            <!-- Counselors -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="500"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="600"
                >
                    <div class="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center group-hover:bg-teal-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-user text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-teal-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="700"
                >
                    মনঃস্বাস্থ্য পরামর্শদাতা
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="800"
                >
                    Mental health support
                </p>
            </div>

            <!-- Social Workers -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="600"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="700"
                >
                    <div class="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-users text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-green-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="800"
                >
                    সমাজকর্মী
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="900"
                >
                    Social rehabilitation specialists
                </p>
            </div>

            <!-- Trainers -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="700"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="800"
                >
                    <div class="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-briefcase text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-purple-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="900"
                >
                    দক্ষ প্রশিক্ষক
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1000"
                >
                    Skill development trainers
                </p>
            </div>

            <!-- Volunteers -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="800"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="900"
                >
                    <div class="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-heart text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-orange-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="1000"
                >
                    স্বেচ্ছাসেবক
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1100"
                >
                    Dedicated volunteers
                </p>
            </div>

            <!-- Project Managers -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="900"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1000"
                >
                    <div class="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-chart-bar text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-indigo-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="1100"
                >
                    প্রকল্প ব্যবস্থাপক
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1200"
                >
                    Skilled project management
                </p>
            </div>

            <!-- Special Teachers -->
            <div 
                class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="1000"
            >
                <div 
                    class="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1100"
                >
                    <div class="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                        <i class="pi pi-book text-white text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                </div>
                <h3 
                    class="text-xl font-semibold text-gray-800 mb-3  group-hover:text-emerald-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="1200"
                >
                    বিশেষ শিক্ষক
                </h3>
                <p 
                    class="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1300"
                >
                    Specialists in disability education
                </p>
            </div>
        </div>

        <!-- Bottom Call to Action -->
        <div 
            class="text-center mt-16"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
        >
            <div 
                class="bg-gradient-to-r from-teal-50 to-amber-50 p-8 rounded-2xl border border-teal-100"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="600"
            >
                <h3 
                    class="text-2xl font-bold text-gray-800 mb-4 "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="700"
                >
                    আমাদের সাথে যোগ দিন
                </h3>
                <p 
                    class="text-gray-600 mb-6 max-w-2xl mx-auto "
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="800"
                >
                    প্রতিবন্ধী ব্যক্তিদের সেবায় আমাদের টিমে যোগদান করুন এবং একটি অন্তর্ভুক্তিমূলক সমাজ গড়তে অংশগ্রহণ করুন।
                </p>
                <NuxtLink to="/volunteer-join-form" 
                    class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300  hover:scale-105 hover:shadow-lg"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="900"
                >
                    যোগদান করুন
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Initialize AOS when component mounts
onMounted(() => {
    // Initialize AOS if it's available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        })
    }
})
</script>

<style scoped>


/* Custom animation styles */
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.group:hover .float-animation {
    animation: float 2s ease-in-out infinite;
}

/* Icon pulse animation */
@keyframes pulse-scale {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

.group:hover .pi {
    animation: pulse-scale 1.5s ease-in-out infinite;
}

/* Enhanced hover effects */
.group:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Gradient border animation */
.group::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(45deg, transparent, rgba(20, 184, 166, 0.3), transparent);
    border-radius: 12px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.group:hover::before {
    opacity: 1;
}

/* Text glow effect */
.group:hover h3 {
    text-shadow: 0 0 10px rgba(20, 184, 166, 0.3);
}

/* Staggered hover animation for multiple elements */
.group:hover .w-24 {
    animation: float 2s ease-in-out infinite;
    animation-delay: 0.1s;
}

.group:hover h3 {
    animation: float 2s ease-in-out infinite;
    animation-delay: 0.2s;
}

.group:hover p {
    animation: float 2s ease-in-out infinite;
    animation-delay: 0.3s;
}

/* Color transition on scroll */
@keyframes colorShift {
    0% { filter: hue-rotate(0deg); }
    50% { filter: hue-rotate(180deg); }
    100% { filter: hue-rotate(360deg); }
}

.group:hover .bg-red-400,
.group:hover .bg-blue-400,
.group:hover .bg-teal-400,
.group:hover .bg-green-400,
.group:hover .bg-purple-400,
.group:hover .bg-orange-400,
.group:hover .bg-indigo-400,
.group:hover .bg-emerald-400 {
    animation: colorShift 3s ease-in-out infinite;
}

/* Button hover effects */
button:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 10px 30px rgba(20, 184, 166, 0.3);
}

/* Responsive enhancements */
@media (max-width: 640px) {
    .group:hover {
        transform: translateY(-5px) scale(1.02);
    }
}

/* Loading animation */
@keyframes shimmer {
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
}

.group:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    background-size: 200px 100%;
    animation: shimmer 2s infinite;
    border-radius: 12px;
    pointer-events: none;
}
</style>