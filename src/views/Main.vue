<template>
  <SettingsView
    @closeModal="isSettingsWindowOpen = false"
    :isOpen="isSettingsWindowOpen"
  />

  <div class="title-bar"></div>

  <div
    class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
  >
    <div class="flex flex-col main mt-28">
      <div class="mx-auto flex align-center flex-col">
        <div class="logo flex items-center justify-center">
          <h1 class="text-white text-3xl logo flex align-center items-center">
            Shotscreen
          </h1>
        </div>

        <InputBar
          class="w-96 mt-5 text-center"
          place-holder="Website url"
          v-model:target-url="targetUrl"
        />
        <Button text="Visit" class="mt-5 w-96" @click="visitUrl" />

        <SettingsIcon
          class="mx-auto mt-4 cursor-pointer"
          @click="openSettingsWindow"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import InputBar from "../components/InputBar.vue";
import Button from "../components/Button.vue";
import SettingsView from "./SettingsView.vue";
import SettingsIcon from "../components/icons/SettingsIcon.vue";
import { ref } from "vue";

const targetUrl = ref(null);
const isSettingsWindowOpen = ref(false);

const visitUrl = () => {
  if (!targetUrl.value) {
    alert("Please enter a valid URL");
    return;
  }

  if (
    !targetUrl.value.startsWith("http://") &&
    !targetUrl.value.startsWith("https://")
  ) {
    targetUrl.value = "https://" + targetUrl.value;
  }

  window.electronAPI.goWebsite(targetUrl.value);
};

const openSettingsWindow = () => {
  isSettingsWindowOpen.value = true;
};
</script>
