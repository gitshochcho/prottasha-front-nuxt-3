<script setup>
const props = defineProps(["open", "contentUrl", "contentTitle"]);
const isOpen = ref(props.open);

const emit = defineEmits(["updatePopup"]);

const updatePopupStatus = (status) => {
  emit("updatePopup", status);
};

watch(() => props.open, (newVal) => {
  isOpen.value = newVal;
});
</script>

<template>
  <Dialog 
    v-model:visible="isOpen" 
    modal 
    :closable="false" 
    :style="{ width: '50vw' }" 
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #header>
      <div class="flex items-center w-full">
        <h3 class="text-base font-semibold leading-6 text-dark-200">{{ contentTitle }}</h3>
        <i 
          class="ml-auto text-gray-300 cursor-pointer fa-light fa-times" 
          @click="updatePopupStatus(false)"
        ></i>
      </div>
    </template>

    <div class="video-container">
      <iframe 
        :src="contentUrl + '?controls=0&autoplay=1&rel=0&t=0'" 
        class="w-full h-auto aspect-video rounded-xl"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0" 
        allowfullscreen
      ></iframe>
    </div>
  </Dialog>
</template>

<style scoped>
.p-dialog-content {
  padding: 0 !important;
  overflow: hidden !important;
}

.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>