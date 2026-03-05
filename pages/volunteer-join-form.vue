<script setup>
const formData = ref({
    name: '',
    email: '',
    phone: '',
    age: '',
    area_of_interest: '',
    available_time: '',
    division_id: '',   
    district_id: '',
    upazila_id: '',    
    union_id: '',      
    password: '',
    why_interest: '',
    type: 'volunteer'
});


const divisions = ref([]);
const districts = ref([]);
const upazilas = ref([]);
const unions = ref([]);

const emit = defineEmits(['add_emit']);
const validations_errors = ref({});
const skip_validations = ref(['id']);
const isLoading = ref(false);
const response_modal = ref({});


const fetchDivisions = async () => {
    try {
        // const res = await $fetch('http://127.0.0.1:8000/api/divisions');
        const res = await $fetch('https://api.prottaysha.org/api/divisions');
        divisions.value = res.data;
    } catch (e) { console.error(e); }
};

const fetchDistricts = async () => {
    districts.value = []; upazilas.value = []; unions.value = [];
    formData.value.district_id = ''; formData.value.upazila_id = ''; formData.value.union_id = '';
    if (!formData.value.division_id) return;
    try {
        // const res = await $fetch(`http://127.0.0.1:8000/api/districts/${formData.value.division_id}`);
        const res = await $fetch(`https://api.prottaysha.org/api/districts/${formData.value.division_id}`);
        districts.value = res.data;
    } catch (e) { console.error(e); }
};

const fetchUpazilas = async () => {
    upazilas.value = []; unions.value = [];
    formData.value.upazila_id = ''; formData.value.union_id = '';
    if (!formData.value.district_id) return;
    try {
        const res = await $fetch(`https://api.prottaysha.org/api/upazilas/${formData.value.district_id}`);
        // const res = await $fetch(`http://127.0.0.1:8000/api/upazilas/${formData.value.district_id}`);
        upazilas.value = res.data;
    } catch (e) { console.error(e); }
};

const fetchUnions = async () => {
    unions.value = [];
    formData.value.union_id = '';
    if (!formData.value.upazila_id) return;
    try {
        const res = await $fetch(`https://api.prottaysha.org/api/unions/${formData.value.upazila_id}`);
        // const res = await $fetch(`http://127.0.0.1:8000/api/unions/${formData.value.upazila_id}`);
        unions.value = res.data;
    } catch (e) { console.error(e); }
};

onMounted(() => {
    fetchDivisions();
});

const createHandler = async () => {
    validations_errors.value = {};
    const errors = Object.keys(formData.value).filter(item => !formData.value[item] && !skip_validations.value.includes(item));
    if (errors.length > 0) {
        errors.map(item => {
            validations_errors.value[item] = `${item.replaceAll('_', ' ')} is required`;
        });
        return;
    }

    try {
        isLoading.value = true;
        const submitData = {
            ...formData.value,
            age: parseInt(formData.value.age),
            division_id: parseInt(formData.value.division_id),
            district_id: parseInt(formData.value.district_id),
            upazila_id: parseInt(formData.value.upazila_id),
            union_id: parseInt(formData.value.union_id),
        };
        
         const getData = await $fetch('https://api.prottaysha.org/api/volunteer/register', {
        // const getData = await $fetch('http://127.0.0.1:8000/api/volunteer/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: submitData,
        });
        
        response_modal.value = {
            status: true,
            message: 'স্বেচ্ছাসেবক হিসেবে সফলভাবে নিবন্ধিত হয়েছেন!'
        };
        
        if (getData) { resetForm(); }
    } catch (e) {
        if (e.response?.status === 422) {
            if (e.response._data?.errors) {
                for (const key in e.response._data.errors) {
                    validations_errors.value[key] = e.response._data.errors[key][0];
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
        name: '', email: '', phone: '', age: '', area_of_interest: '',
        available_time: '', division_id: '', district_id: '', upazila_id: '',
        union_id: '', password: '', why_interest: '', type: 'volunteer'
    };
    validations_errors.value = {};
}
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 ">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-teal-700 mb-4">স্বেচ্ছাসেবক ফর্ম</h1>
                <p class="text-gray-600 text-lg">আমাদের সাথে যুক্ত হয়ে সমাজ সেবায় অংশগ্রহণ করুন</p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div class="p-8 md:p-12">
                    <form @submit.prevent="createHandler" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">নাম *</label>
                                <input type="text" v-model="formData.name" :class="validations_errors.name ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" placeholder="আপনার পূর্ণ নাম লিখুন" @focus="validations_errors.name = ''" />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.name" />
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">ইমেইল *</label>
                                <input type="email" v-model="formData.email" :class="validations_errors.email ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" placeholder="info@example.com" @focus="validations_errors.email = ''" />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.email" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">ফোন *</label>
                                <input type="tel" v-model="formData.phone" :class="validations_errors.phone ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" placeholder="+880 1XXX XXXXXX" @focus="validations_errors.phone = ''" />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.phone" />
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">বয়স *</label>
                                <input type="number" v-model="formData.age" :class="validations_errors.age ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" placeholder="আপনার বয়স" min="18" max="80" @focus="validations_errors.age = ''" />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.age" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">বিভাগ *</label>
                                <select v-model="formData.division_id" @change="fetchDistricts" :class="validations_errors.division_id ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors">
                                    <option value="">বিভাগ নির্বাচন করুন</option>
                                    <option v-for="div in divisions" :key="div.id" :value="div.id">{{ div.name }}</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.division_id" />
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">জেলা *</label>
                                <select v-model="formData.district_id" @change="fetchUpazilas" :disabled="!formData.division_id" :class="validations_errors.district_id ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors disabled:bg-gray-100">
                                    <option value="">জেলা নির্বাচন করুন</option>
                                    <option v-for="dis in districts" :key="dis.id" :value="dis.id">{{ dis.name }}</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.district_id" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">উপজেলা *</label>
                                <select v-model="formData.upazila_id" @change="fetchUnions" :disabled="!formData.district_id" :class="validations_errors.upazila_id ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors disabled:bg-gray-100">
                                    <option value="">উপজেলা নির্বাচন করুন</option>
                                    <option v-for="upa in upazilas" :key="upa.id" :value="upa.id">{{ upa.name }}</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.upazila_id" />
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">ইউনিয়ন *</label>
                                <select v-model="formData.union_id" :disabled="!formData.upazila_id" :class="validations_errors.union_id ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors disabled:bg-gray-100">
                                    <option value="">ইউনিয়ন নির্বাচন করুন</option>
                                    <option v-for="uni in unions" :key="uni.id" :value="uni.id">{{ uni.name }}</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.union_id" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">উপলব্ধ সময় *</label>
                                <select v-model="formData.available_time" :class="validations_errors.available_time ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors">
                                    <option value="">উপলব্ধ সময় নির্বাচন করুন</option>
                                    <option value="সকাল ৮টা - দুপুর ১২টা">সকাল ৮টা - দুপুর ১২টা</option>
                                    <option value="দুপুর ১২টা - বিকেল ৫টা">দুপুর ১২টা - বিকেল ৫টা</option>
                                    <option value="বিকেল ৫টা - রাত ৯টা">বিকেল ৫টা - রাত ৯টা</option>
                                    <option value="সপ্তাহান্তে">শুধু সপ্তাহান্তে</option>
                                    <option value="যেকোনো সময়">যেকোনো সময়</option>
                                </select>
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.available_time" />
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-3">আগ্রহের ক্ষেত্র *</label>
                                <input type="text" v-model="formData.area_of_interest" :class="validations_errors.area_of_interest ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" placeholder="যেমন: শিক্ষা, স্বাস্থ্য, পরিবেশ, সামাজিক সেবা" @focus="validations_errors.area_of_interest = ''" />
                                <LazyInputError class="text-sm mt-1" :message="validations_errors.area_of_interest" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">পাসওয়ার্ড *</label>
                            <input type="password" v-model="formData.password" :class="validations_errors.password ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড" @focus="validations_errors.password = ''" />
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.password" />
                        </div>

                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-3">কেন স্বেচ্ছাসেবক হতে চান? *</label>
                            <textarea rows="5" v-model="formData.why_interest" :class="validations_errors.why_interest ? 'border-red-500' : 'border-gray-300'" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none" placeholder="আপনার অভিজ্ঞতা ও আমাদের সাথে যুক্ত হওয়ার কারণ লিখুন..." @focus="validations_errors.why_interest = ''"></textarea>
                            <LazyInputError class="text-sm mt-1" :message="validations_errors.why_interest" />
                        </div>

                        <div class="text-center pt-6">
                            <Button v-if="isLoading" disabled class="bg-teal-600 text-white px-12 py-3 rounded-full text-lg font-medium min-w-[200px]">
                                <ProgressSpinner style="width: 25px; height: 25px" strokeWidth="4" />
                            </Button>
                            <Button v-else type="submit" class="bg-teal-600 hover:bg-teal-700 text-white px-12 py-3 rounded-full text-lg font-medium transition-colors duration-300 transform hover:scale-105 shadow-lg">
                                আবেদন জমা দিন
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

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