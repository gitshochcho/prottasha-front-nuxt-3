<script setup>
const formData = ref({
    name: '',
    email: '',
    amount: '',
    message: '',
    type: 'donation'
});
const emit = defineEmits(['add_emit']);
const validations_errors = ref({});
const skip_validations = ref([
    'id',
    'message',
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
            email: formData.value.email,
            amount: formData.value.amount,
            message: formData.value.message,
            type: formData.value.type
        };
        
        const getData = await $fetch('https://api.prottaysha.org/api/donation/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: submitData,
        });
        
        response_modal.value = {
            status: true,
            message: 'দান সফলভাবে জমা দেওয়া হয়েছে!'
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
        amount: '',
        message: '',
        type: 'donation'
    };
    validations_errors.value = {};
}
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 font-bangla">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-teal-700 mb-4">দান ফর্ম</h1>
                <p class="text-gray-600 text-lg">
                    আমাদের সাথে যুক্ত হয়ে মানবিক সেবায় অংশগ্রহণ করুন
                </p>
            </div>

            <!-- Main Form Card -->
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div class="p-8 md:p-12">
                    <form @submit.prevent="createHandler" class="space-y-6">
                        
                        <!-- Name -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">নাম</label>
                            <input 
                                type="text"
                                v-model="formData.name"
                                :class="validations_errors.name ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                placeholder="নাম"
                                @focus="validations_errors.name = ''"
                            />
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.name" />
                        </div>

                        <!-- Email -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">ইমেইল</label>
                            <input 
                                type="email"
                                v-model="formData.email"
                                :class="validations_errors.email ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                placeholder="info@prottasha.net"
                                @focus="validations_errors.email = ''"
                            />
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.email" />
                        </div>

                        <!-- Amount -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">পরিমাণ</label>
                            <select 
                                v-model="formData.amount"
                                :class="validations_errors.amount ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                @focus="validations_errors.amount = ''"
                            >
                                <option value="">পরিমাণ নির্বাচন করুন</option>
                                <option value="500">৫০০ টাকা</option>
                                <option value="1000">১০০০ টাকা</option>
                                <option value="2000">২০০০ টাকা</option>
                                <option value="5000">৫০০০ টাকা</option>
                                <option value="10000">১০০০০ টাকা</option>
                                <option value="custom">অন্য পরিমাণ</option>
                            </select>
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.amount" />
                        </div>

                        <!-- Message -->
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">বার্তা (ঐচ্ছিক)</label>
                            <textarea 
                                rows="5"
                                v-model="formData.message"
                                :class="validations_errors.message ? 'border-red-500' : 'border-gray-300'"
                                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                                placeholder="আপনার বার্তা লিখুন..."
                                @focus="validations_errors.message = ''"
                            ></textarea>
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.message" />
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
                                এখনই দান করুন
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-heart text-teal-600 text-xl"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2">মানবিক সেবা</h3>
                    <p class="text-gray-600 text-sm">বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সেবায়</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-dollar text-blue-600 text-xl"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2">স্বচ্ছতা</h3>
                    <p class="text-gray-600 text-sm">আপনার দানের সঠিক ব্যবহার</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="pi pi-check-circle text-green-600 text-xl"></i>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-2">বিশ্বস্ততা</h3>
                    <p class="text-gray-600 text-sm">নিরাপদ ও বিশ্বস্ত দান প্ল্যাটফর্ম</p>
                </div>
            </div>
        </div>
        
        <LazyResponseModal :response_modal="response_modal" />
    </div>
</template>

<style>
.font-bangla {
    font-family: 'SolaimanLipi', 'Kalpurush', sans-serif;
}

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