<template>
  <input
    type="text"
    :placeholder="props.placeHolder"
    v-model="targetUrl"
    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  />
</template>

<script setup>
const props = defineProps({
  placeHolder: {
    type: String,
    default: "",
  },
});
const targetUrl = defineModel("targetUrl");
</script>
