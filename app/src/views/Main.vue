<template>
    <div
        class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div class="flex flex-col justify-center main mt-10 ">
            <div class="mx-auto flex align-center flex-col">
                <img src="../assets/logo.png" alt="App logo" class="h-24 w-24 mx-auto" />
                <p class="text-center text-white mt-10">Enter url for browsing</p>
                <InputBar class="w-96 mt-5" v-model:target-url="targetUrl" />
                <Button text="Visit" class="mt-5 w-96" @click="visitUrl" />
            </div>
        </div>
    </div>
</template>

<script setup>
import InputBar from '../components/InputBar.vue';
import Button from '../components/Button.vue';
import { ref } from 'vue';

const targetUrl = ref(null);

const visitUrl = () => {
    window.electronAPI.goWebsite(targetUrl.value)
}

</script>

<style scoped></style>
