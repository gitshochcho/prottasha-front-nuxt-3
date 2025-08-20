<script setup>
const formData = ref({
    name: '',
    email: '',
    phone: '',
    age: '',
    area_of_interest: '',
    available_time: '',
    district_id: '',
    password: '',
    why_interest: '',
    type: 'volunteer'
});
const emit = defineEmits(['add_emit']);
const validations_errors = ref({});
const skip_validations = ref([
    'id',
]);
const isLoading = ref(false);
const response_modal = ref({});
const createHandler = async () => {
    validations_errors.value = {};
    const errors = Object.keys(formData.value).filter(item => !formData.value[item] && !skip_validations.value.includes(item));
    if (errors.length > 0) {
        errors.map(item => {
            validations_errors.value[item] = `${item.replaceAll('_', ' ')} is required`;
        });
        console.log(validations_errors.value);
        return;
    }

    try {
        isLoading.value = true;
        
        // Prepare data for API submission
        const submitData = {
            name: formData.value.name,
            phone: formData.value.phone,
            email: formData.value.email,
            age: parseInt(formData.value.age),
            area_of_interest: formData.value.area_of_interest,
            available_time: formData.value.available_time,
            district_id: parseInt(formData.value.district_id),
            password: formData.value.password,
            why_interest: formData.value.why_interest,
            type: formData.value.type
        };
        
        const getData = await $fetch('https://api.prottaysha.org/api/volunteer/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: submitData,
        });
        
        response_modal.value = {
            status: true,
            message: 'স্বেচ্ছাসেবক হিসেবে সফলভাবে নিবন্ধিত হয়েছেন!'
        };
        
        if (getData) {
            resetForm();
        }
    } catch (e) {
        console.log('Get Message', e.message);
        console.log('Error response:', e);
        
        if (e.response?.status === 422) {
            // Handle validation errors
            if (e.response._data?.errors) {
                for (const key in e.response._data.errors) {
                    if (e.response._data.errors.hasOwnProperty(key)) {
                        const value = e.response._data.errors[key][0];
                        validations_errors.value[key] = value;
                    }
                }
            }
        } else {
            response_modal.value = {
                status: false,
                message: e.message || 'কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।',
            };
        }
    } finally {
        isLoading.value = false;
    }
}
const resetForm = () => {
    formData.value = {
        name: '',
        email: '',
        phone: '',
        age: '',
        area_of_interest: '',
        available_time: '',
        district_id: '',
        password: '',
        why_interest: '',
        type: 'volunteer'
    };
    validations_errors.value = {};
}
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 ">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-teal-700 mb-4">স্বেচ্ছাসেবক ফর্ম</h1>
                <p class="text-gray-600 text-lg">
                    আমাদের সাথে যুক্ত হয়ে সমাজ সেবায় অংশগ্রহণ করুন
                </p>
            </div>

            <!-- Main Form Card -->
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div class="p-8 md:p-12">
                    <form @submit.prevent="createHandler" class="space-y-6">
                        
                        <!-- Name and Email -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">নাম *</label>
                                <input 
                                    type="text"
                                    v-model="formData.name"
                                    :class="validations_errors.name ? 'border-red-500' : 'border-gray-300'"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="আপনার পূর্ণ নাম লিখুন"
                                    @focus="validations_errors.name = ''"
                                />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.name" />
                            </div>
                            
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">ইমেইল *</label>
                                <input 
                                    type="email"
                                    v-model="formData.email"
                                    :class="validations_errors.email ? 'border-red-500' : 'border-gray-300'"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="info@example.com"
                                    @focus="validations_errors.email = ''"
                                />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.email" />
                            </div>
                        </div>

                        <!-- Phone and Age -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">ফোন *</label>
                                <input 
                                    type="tel"
                                    v-model="formData.phone"
                                    :class="validations_errors.phone ? 'border-red-500' : 'border-gray-300'"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="+880 1XXX XXXXXX"
                                    @focus="validations_errors.phone = ''"
                                />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.phone" />
                            </div>
                            
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">বয়স *</label>
                                <input 
                                    type="number"
                                    v-model="formData.age"
                                    :class="validations_errors.age ? 'border-red-500' : 'border-gray-300'"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="আপনার বয়স"
                                    min="18"
                                    max="80"
                                    @focus="validations_errors.age = ''"
                                />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.age" />
                            </div>
                        </div>

                        <!-- District and Available Time -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">জেলা *</label>
                                <select 
                                    v-model="formData.district_id"
                                    :class="validations_errors.district_id ? 'border-red-500' : 'border-gray-300'"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    @focus="validations_errors.district_id = ''"
                                >
                                    <option value="">জেলা নির্বাচন করুন</option>
                                    <option value="1">ঢাকা</option>
                                    <option value="2">চট্টগ্রাম</option>
                                    <option value="3">সিলেট</option>
                                    <option value="4">রাজশাহী</option>
                                    <option value="5">খুলনা</option>
                                    <option value="6">বরিশাল</option>
                                    <option value="7">রংপুর</option>
                                    <option value="8">ময়মনসিংহ</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.district_id" />
                            </div>
                            
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">উপলব্ধ সময় *</label>
                                <select 
                                    v-model="formData.available_time"
                                    :class="validations_errors.available_time ? 'border-red-500' : 'border-gray-300'"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    @focus="validations_errors.available_time = ''"
                                >
                                    <option value="">উপলব্ধ সময় নির্বাচন করুন</option>
                                    <option value="সকাল ৮টা - দুপুর ১২টা">সকাল ৮টা - দুপুর ১২টা</option>
                                    <option value="দুপুর ১২টা - বিকেল ৫টা">দুপুর ১২টা - বিকেল ৫টা</option>
                                    <option value="বিকেল ৫টা - রাত ৯টা">বিকেল ৫টা - রাত ৯টা</option>
                                    <option value="সপ্তাহান্তে">শুধু সপ্তাহান্তে</option>
                                    <option value="যেকোনো সময়">যেকোনো সময়</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.available_time" />
                            </div>
                        </div>

                        <!-- Area of Interest -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">আগ্রহের ক্ষেত্র *</label>
                            <input 
                                type="text"
                                v-model="formData.area_of_interest"
                                :class="validations_errors.area_of_interest ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                placeholder="যেমন: শিক্ষা, স্বাস্থ্য, পরিবেশ, সামাজিক সেবা"
                                @focus="validations_errors.area_of_interest = ''"
                            />
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.area_of_interest" />
                        </div>

                        <!-- Password -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">পাসওয়ার্ড *</label>
                            <input 
                                type="password"
                                v-model="formData.password"
                                :class="validations_errors.password ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড"
                                @focus="validations_errors.password = ''"
                            />
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.password" />
                        </div>

                        <!-- Why Interest -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">কেন স্বেচ্ছাসেবক হতে চান? *</label>
                            <textarea 
                                rows="5"
                                v-model="formData.why_interest"
                                :class="validations_errors.why_interest ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                                placeholder="আপনার অভিজ্ঞতা ও আমাদের সাথে যুক্ত হওয়ার কারণ লিখুন..."
                                @focus="validations_errors.why_interest = ''"
                            ></textarea>
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.why_interest" />
                        </div>

                        <!-- Submit Button -->
                        <div class="text-center pt-6">
                            <Button 
                                v-if="isLoading" 
                                disabled 
                                class="bg-teal-600 text-white px-12 py-3 rounded-full text-lg font-medium min-w-[200px]"
                            >
                                <ProgressSpinner style="width: 25px; height: 25px" strokeWidth="4" />
                            </Button>
                            <Button 
                                v-else
                                type="submit"
                                class="bg-teal-600 hover:bg-teal-700 text-white px-12 py-3 rounded-full text-lg font-medium transition-colors duration-300 transform hover:scale-105 shadow-lg"
                            >
                                আবেদন জমা দিন
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-users text-teal-600 text-xl"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2">সমাজ সেবা</h3>
                    <p class="text-gray-600 text-sm">বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সেবায়</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-heart text-blue-600 text-xl"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2">মানবিক সেবা</h3>
                    <p class="text-gray-600 text-sm">মানুষের কল্যাণে নিবেদিত</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-graduation-cap text-green-600 text-xl"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2">প্রশিক্ষণ</h3>
                    <p class="text-gray-600 text-sm">দক্ষতা উন্নয়নে সহায়তা</p>
                </div>
            </div>
        </div>
        
        <LazyResponseModal :response_modal="response_modal" />
    </div>
</template>

<style>


/* Custom focus styles */
input:focus, select:focus, textarea:focus {
    box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}

/* Custom animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* Button hover effects */
.hover\:scale-105:hover {
    transform: scale(1.05);
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
    width: 6px;
}

textarea::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
</style>