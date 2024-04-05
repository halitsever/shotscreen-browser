<template>
    <div
        class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div class="flex flex-col main mt-32 ">
            <div class="mx-auto flex align-center flex-col">

                <div class="logo flex items-center justify-center">
                    <h1 class="text-white text-4xl ">
                        Shotscreen
                    </h1>
                </div>

                <InputBar class="w-96 mt-5 text-center" place-holder="Website url" v-model:target-url="targetUrl" />
                <Button text="Visit" class="mt-5 w-96" @click="visitUrl" />
            </div>
        </div>
    </div>
</template>

<script setup>
import InputBar from '../components/InputBar.vue';
import Button from '../components/Button.vue';
import BrowserIcon from '../components/icons/BrowserIcon.vue'
import { ref } from 'vue';

const targetUrl = ref(null);

const visitUrl = () => {
    window.electronAPI.goWebsite(targetUrl.value)
}

</script>

<style scoped></style>
