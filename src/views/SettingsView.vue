<template>

    <div id="default-modal" tabindex="-1" aria-hidden="true" :class="{ hidden: !props.isOpen }">
        <div class="flex justify-center mt-20 ">
            <!-- Modal content -->
            <div class="w-96 relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Settings
                    </h3>
                    <button @click="closeModal" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>

                </div>
                <!-- Modal body -->


                <div class="p-6">


                    <p class="text-white">Height (px):</p>
                    <InputBar placeholder="800" type="number" v-model="height" class="mb-4" />
                    <p class="text-white">Width (px):</p>
                    <InputBar placeholder="600" type="number" v-model="width" class="mb-4" />

                </div>

                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="default-modal" type="button" @click="applySettings()"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';
import InputBar from '../components/InputBar.vue';
import Button from '../components/Button.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['closeModal']);


const width = ref(null);
const height = ref(null);

const applySettings = () => {
    if (!width.value || !height.value) return alert("Please enter a valid dimension");
    window.electronAPI.resizeWindow({ width: width.value, height: height.value });
}


const closeModal = () => {
    emit('closeModal')
};

</script>
