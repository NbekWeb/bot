<template>
  <div class="font-epil h-calc" ref="scrollContainer" v-bind="$attrs">
    <div class="max-w-374 mx-auto max-xs:scale-90 !min-h-content">
      <div>
        <div class="flex justify-center mt-8">
          <img src="@/assets/img/task-big.png" class="h-50" />
        </div>
        <div class="grid w-full grid-cols-2 gap-5 mt-7">
          <div class="relative">
            <img src="@/assets/img/banner.png" class="w-full" />
            <span
              class="absolute text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >tasks</span
            >
          </div>
          <div class="relative">
            <img src="@/assets/img/banner-white.png" class="w-full" />
            <span
              class="absolute text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >tasks</span
            >
          </div>
        </div>
      </div>
      <div class="relative mt-4">
        <img src="@/assets/img/banner-white.png" class="" />
        <div
          class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-5"
        >
          <div class="flex items-center gap-3 text-2xl" @click="toggleTask">
            <img src="@/assets/img/instagram.png" class="w-6 h-6" />
            <span> Follow</span>
          </div>
          <div class="flex items-center text-xl">
            <span class="pr-1 text-2xl font-medium">+</span>
            <img src="@/assets/img/nut1.png" class="h-5 pr-1" />
            <span class="pr-2 font-medium">100</span>
            <img src="@/assets/img/check.png" class="w-6" />
          </div>
        </div>
      </div>
      <div class="relative mt-3">
        <img src="@/assets/img/banner.png" class="w-full" />
        <div
          class="absolute top-0 left-0 flex items-center justify-between w-full h-full px-5"
        >
          <div class="flex items-center gap-3 text-2xl">
            <span> Invite 5 friends</span>
          </div>
          <div class="flex items-center text-xl">
            <span class="pr-1 text-2xl font-medium">+</span>
            <img src="@/assets/img/nut1.png" class="h-5 pr-1" />
            <span class="pr-2 font-medium">100</span>
            <img src="@/assets/img/check.png" class="w-6 opacity-0" />
          </div>
        </div>
      </div>
      <div class="grid w-full grid-cols-2 gap-5 mt-7 justify-items-end">
        <span></span>
        <div class="relative">
          <img src="@/assets/img/banner-white.png" class="w-full" />
          <div
            class="absolute flex items-center gap-5 text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <span>Done</span>
            <img src="@/assets/img/check.png" class="w-5" />
          </div>
        </div>
      </div>
      <div class="mt-3">
        <span class="text-3xl">Daily rewards</span>
        <div class="flex flex-wrap items-center justify-between gap-5 mt-5">
          <div class="relative w-16 h-16">
            <img src="@/assets/img/cur-level.png" class="w-full" />
            <img
              src="@/assets/img/check.png"
              class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <div class="relative w-16 h-16" v-for="i of 6" :key="i">
            <img src="@/assets/img/cur-level.png" class="w-full" />
            <img
              src="@/assets/img/chest-bl.png"
              class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <div class="relative w-16 h-16">
            <img src="@/assets/img/cur-level.png" class="w-full" />
            <img
              src="@/assets/img/chest.png"
              class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fixed bottom-0 z-10 transition-transform duration-500 tasks-pop rounded-t-3xl max-h-[578px] h-full"
    :class="task ? 'translate-y-0' : 'translate-y-full'"
  >
    <div class="flex items-center px-5 mt-5 text-4xl  w-full">
      <img src="@/assets/img/arrow.png" class="w-5" @click="toggleTask" />
      <span class="flex justify-center flex-grow pl-2 font-epil">Follow our Instagram</span>
    </div>
    <div class="flex flex-col items-center gap-5 mt-12">
      <img src="@/assets/img/instagram.png " class="w-[154px]" />
      <div class="h-[50px] relative">
        <img src="@/assets/img/cloud-btn.png " class="h-full" />
        <span
          class="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  font-epil"
        >
          подписаться
        </span>
      </div>
      <div class="flex items-center gap-3 text-5xl">
        <span class="">+</span>
        <img src="@/assets/img/nut1.png" class="h-10" />
        <span>100</span>
      </div>
      <div class="h-[50px] relative mt-10">
        <img src="@/assets/img/cloud-btn-white.png " class="h-full" />
        <span
          class="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-epil"
        >
          подписаться
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const task = ref(false);
const scrollContainer = ref<HTMLElement | null>(null);
const toggleTask = () => {
  task.value = !task.value;
};

const onScroll = () => {
  if (task.value) {
    task.value = false;
  }
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", onScroll);
  }
});
onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", onScroll);
  }
});
</script>
<style scoped>
.tasks-pop {
  background-image: url("@/assets/img/task-pop.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

</style>
