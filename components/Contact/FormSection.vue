<script setup>
const formData = ref({
    first_name: null,
    last_name: '',
    email: '',
    phone: '',
    message: '',
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
        const getData = await $fetchCMS(`cms/contacts`, {
            method: 'POST',
            body: formData.value,
        });
        response_modal.value = getData;
        if (getData.status == true) {
            emit('add_emit', getData.data);
            resetForm();
        }
        if (getData.status == true) {
            response_modal.value = getData;
        }
    } catch (e) {
        console.log('Get Message', e.message);
        // console.log('Get response',e.response);
        if (e.response?.status === 404 || e.response?.status === 422) {
            console.log('here 1', e.response);
            if (e.response?.status === 404 || e.response?.status === 409 || e.response?.status === 422) {
                console.log('here 2', e.response._data.data);
                for (const key in e.response._data.data) {
                    if (e.response._data.data.hasOwnProperty(key)) {
                        const value = e.response._data.data[key][0];
                        validations_errors.value[key] = value;
                    }
                }
            }
        } else if (!e.response?.status) {
            response_modal.value = {
                status: false,
                message: 'Something went wrong. Please try again later.',
            }
        } else {
            response_modal.value = {
                status: e.response._data.status,
                message: e.response._data.message,
            }

        }
    } finally {
        isLoading.value = false;
    }
}
const resetForm = () => {
    formData.value = {
        first_name: null,
        last_name: '',
        email: '',
        phone: '',
        message: '',
    };
    validations_errors.value = {};
}
</script>

<template>
    <div class="container px-4 pt-20 pb-8 mx-auto md:py-6 md:px-8 lg:pt-20 lg:px-16">

        <div class="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900 md:flex-row">
            <!-- Left side - Info card -->
            <div class="flex flex-col justify-start w-full px-6 py-10 text-white bg-gray-800 dark:bg-gray-700 md:w-1/3">
                <div>
                    <h2 class="mb-2 text-xl font-bold">Need assistance?</h2>
                    <p class="mb-6 text-sm text-gray-300">Say something to start a live chat</p>
                    <div class="mt-6 space-y-4">
                        <div class="flex items-center">
                            <div class="flex items-center justify-center w-5 h-5 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span>+880 176 0000000</span>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center justify-center w-5 h-5 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span>assist@accesinmate.com</span>
                        </div>
                    </div>
                </div>
                <button
                    class="w-full px-4 py-2 mt-8 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                    Watch Demo
                </button>
            </div>

            <!-- Right side - Form -->
            <div class="w-full p-6 md:w-2/3">
                <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">First Name</label>
                        <input type="text"
                            class="w-full p-2 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            v-model="formData.first_name"
                            :class="validations_errors.first_name ? 'border-[#f44336!important]' : ''"
                            autocomplete="off" @focus="validations_errors.first_name = ''" Placeholder="i.e Jonh" />
                        <LazyInputError class="text-sm mt-1" :message="validations_errors.first_name" />
                    </div>
                    <div>
                        <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Last Name</label>
                        <input type="text"
                            class="w-full p-2 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            v-model="formData.last_name"
                            :class="validations_errors.last_name ? 'border-[#f44336!important]' : ''" autocomplete="off"
                            @focus="validations_errors.last_name = ''" Placeholder="i.e Deo" />
                        <LazyInputError class="text-sm mt-1" :message="validations_errors.last_name" />
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Email address</label>
                        <input type="email"
                            class="w-full p-2 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            v-model="formData.email"
                            :class="validations_errors.email ? 'border-[#f44336!important]' : ''" autocomplete="off"
                            @focus="validations_errors.email = ''" Placeholder="i.e example@email.com" />
                        <LazyInputError class="text-sm mt-1" :message="validations_errors.email" />
                    </div>
                    <div>
                        <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Phone Number</label>
                        <input type="tel"
                            class="w-full p-2 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            v-model="formData.phone"
                            :class="validations_errors.phone ? 'border-[#f44336!important]' : ''" autocomplete="off"
                            @focus="validations_errors.phone = ''" placeholder="+1 (555) 123-456" />
                        <LazyInputError class="text-sm mt-1" :message="validations_errors.phone" />
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Message</label>
                    <textarea rows="4"
                        class="w-full p-2 bg-white border border-gray-300 rounded-md resize-none dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        v-model="formData.message"
                        :class="validations_errors.message ? 'border-[#f44336!important]' : ''" autocomplete="off"
                        @focus="validations_errors.message = ''" placeholder="Write your message..."></textarea>
                    <LazyInputError class="text-sm mt-1" :message="validations_errors.message" />
                </div>
                <div class="text-right">
                    <div class="flex justify-end items-center gap-3 border-gray-200">
                        <Button v-if="isLoading" severity="secondary" style="cursor: not-allowed; width: 130px;">
                            <ProgressSpinner style="width: 25px; height: 25px" strokeWidth="8"
                                animationDuration=".5s" />
                        </Button>
                        <template v-else>
                            <Button type="button" :label="'Send Message'" raised
                                class="px-6 py-2 text-white transition duration-300 bg-gray-800 rounded-md dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-700"
                                @click="createHandler()">
                            </Button>
                        </template>
                    </div>
                </div>
            </div>
        </div>



        <!-- Didn't find section -->
        <div class="p-10 my-20 text-center rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 animate-fade-in">
            <h2 class="mb-2 text-3xl font-bold text-gray-800 dark:text-white">Didn't find what you were looking for?
            </h2>
            <p class="mb-6 text-gray-600 dark:text-gray-300">Questions? Feedback? We'd love to help you</p>

            <div class="flex flex-col justify-center gap-4 mb-10 md:flex-row">
                <div
                    class="flex flex-col items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-700 animate-slide-up">
                    <h3 class="mb-1 font-medium text-gray-700 dark:text-gray-200"><i class="fas fa-bug"></i> Contact
                        Support
                    </h3>
                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Encountered a bug? Issues with
                        installation?</p>
                    <button
                        class="px-6 py-2 transition duration-300 border border-gray-300 rounded-full dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105">
                        Contact Support
                    </button>
                </div>

                <div
                    class="flex flex-col items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-700 animate-slide-up">
                    <h3 class="mb-1 font-medium text-gray-700 dark:text-gray-200"><i class="fas fa-info-circle"></i>
                        Contact
                        Sales</h3>
                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Need a demo? Having pre-sale questions?</p>
                    <button
                        class="px-6 py-2 transition duration-300 border border-gray-300 rounded-full dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>

        <!-- Map section -->
        <div class="w-full h-64 overflow-hidden rounded-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.095336114207!2d90.41246231429824!3d23.815208692215823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a2fb6aaaab%3A0x27a3953ca824a1cd!2sOrange%20Business%20Development%20Ltd.%20(Orangebd)!5e0!3m2!1sen!2sbd!4v1653300634267!5m2!1sen!2sbd"
                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <LazyResponseModal :response_modal="response_modal" />
    </div>
</template>

<style>
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