<template>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 my-12">
        <!-- Header Section -->
        <div class="text-center mb-16">
            <div class="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6 font-bangla">
                আমাদের সেবা
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-[#114F3F] mb-4 font-bangla">
                আমরা যা করি
            </h1>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-bangla">
                'প্রত্যাশা' একটি মানবিক সেবামূলক প্রতিষ্ঠান হিসেবে সমাজের অবহেলিত প্রতিবন্ধীদের জন্য বহুমাত্রিক সহায়তামূলক কার্যক্রম পরিচালনা করে।
            </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- চিকিৎসা সহায়তা ও পুনর্বাসন -->
            <div class="group cursor-pointer rounded-xl border">
                <div class="relative overflow-hidden rounded-xl h-64 mb-4">
                    <img 
                        src="/images/services/1.png" 
                        alt="চিকিৎসা সহায়তা ও পুনর্বাসন"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute top-4 left-4">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <i class="pi pi-heart-fill text-white text-lg"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h3 class="text-xl font-bold text-white font-bangla">চিকিৎসা সহায়তা ও পুনর্বাসন</h3>
                    </div>
                </div>
                <div class="p-2 text-gray-600 text-sm leading-relaxed font-bangla">
                    <p class="mb-2 font-medium">প্রতিবন্ধী শিশু ও প্রাপ্তবয়স্কদের চিকিৎসা ও প্রতিরোধ কার্যক্রমের অংশগুলি:</p>
                    <ul class="list-disc list-inside space-y-1 text-xs">
                        <li>ফিজিওথেরাপি চিকিৎসা</li>
                        <li>অকুপেশনাল থেরাপি</li>
                        <li>পুনর্বাসন কর্মসূচি</li>
                    </ul>
                </div>
            </div>

            <!-- দুর্বলদের যত্ন -->
            <div class="group cursor-pointer rounded-xl border">
                <div class="relative overflow-hidden rounded-xl h-64 mb-4">
                    <img 
                        src="/images/services/2.png" 
                        alt="দুর্বলদের যত্ন"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute top-4 left-4">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <i class="pi pi-shield text-white text-lg"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h3 class="text-xl font-bold text-white font-bangla">দুর্বলদের যত্ন</h3>
                    </div>
                </div>
                <p class="p-2 text-gray-600 text-sm leading-relaxed font-bangla">
                    Dedicated support and protection services for those who are most at risk, ensuring their safety, dignity, and well-being.
                </p>
            </div>

            <!-- শিক্ষা ও প্রশিক্ষণ -->
            <div class="group cursor-pointer rounded-xl border">
                <div class="relative overflow-hidden rounded-xl h-64 mb-4">
                    <img 
                        src="/images/services/3.png" 
                        alt="শিক্ষা ও প্রশিক্ষণ"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute top-4 left-4">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <i class="pi pi-briefcase text-white text-lg"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h3 class="text-xl font-bold text-white font-bangla">শিক্ষা ও প্রশিক্ষণ</h3>
                    </div>
                </div>
                <p class="p-2 text-gray-600 text-sm leading-relaxed font-bangla">
                    Legal advocacy, rights protection, and employment opportunities to ensure equal access to justice and meaningful work.
                </p>
            </div>

            <!-- স্বাস্থ্য ও পুষ্টি সেবা -->
            <div class="group cursor-pointer rounded-xl border">
                <div class="relative overflow-hidden  rounded-xl h-64 mb-4">
                    <img 
                        src="/images/services/4.png" 
                        alt="স্বাস্থ্য ও পুষ্টি সেবা"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute top-4 left-4">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <i class="pi pi-apple text-white text-lg"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h3 class="text-xl font-bold text-white font-bangla">স্বাস্থ্য ও পুষ্টি সেবা</h3>
                    </div>
                </div>
                <div class="p-2 text-gray-600 text-sm leading-relaxed font-bangla">
                    <p class="mb-2 font-medium">নিয়মিত স্বাস্থ্য পরীক্ষা, তজ্ঞ্য প্রদান ও চিকিৎসার ব্যবস্থা:</p>
                    <ul class="list-disc list-inside space-y-1 text-xs">
                        <li>স্বাস্থ্য পরীক্ষা</li>
                        <li>পুষ্টি পরামর্শ</li>
                        <li>পুষ্টি প্রদান</li>
                    </ul>
                </div>
            </div>

            <!-- মানসিক স্বাস্থ্য সহায়তা -->
            <div class="group cursor-pointer border  rounded-xl">
                <div class="relative overflow-hidden rounded-xl h-64 mb-4">
                    <img 
                        src="/images/services/5.png" 
                        alt="মানসিক স্বাস্থ্য সহায়তা"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute top-4 left-4">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <i class="pi pi-user text-white text-lg"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h3 class="text-xl font-bold text-white font-bangla">মানসিক স্বাস্থ্য সহায়তা</h3>
                    </div>
                </div>
                <div class="p-2 text-gray-600 text-sm leading-relaxed font-bangla">
                    <p class="mb-2 font-medium">নিয়মিত কাউন্সেলিং, মেন্টাল ও ব্রেন সাপোর্ট সেবা:</p>
                    <ul class="list-disc list-inside space-y-1 text-xs">
                        <li>কাউন্সেলিং</li>
                        <li>মেন্টাল সেবা</li>
                        <li>ব্রেন সাপোর্ট</li>
                    </ul>
                </div>
            </div>

            <!-- সামাজিক সচেতনতা সৃষ্টি ও নীতি উন্নয়ন -->
            <div class="group cursor-pointer rounded-xl border">
                <div class="relative overflow-hidden rounded-xl h-64 mb-4">
                    <img 
                        src="/images/services/6.png" 
                        alt="সামাজিক সচেতনতা সৃষ্টি ও নীতি উন্নয়ন"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div class="absolute top-4 left-4">
                        <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                            <i class="pi pi-users text-white text-lg"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <h3 class="text-xl font-bold text-white font-bangla">সামাজিক সচেতনতা সৃষ্টি ও নীতি উন্নয়ন</h3>
                    </div>
                </div>
                <p class="text-gray-600 p-2 text-sm leading-relaxed font-bangla">
                    Community education, advocacy campaigns and rights awareness programs to build an inclusive and understanding society.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
.font-bangla {
    font-family: 'SolaimanLipi', 'Kalpurush', sans-serif;
}
</style>