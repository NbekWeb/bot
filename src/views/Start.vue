<template>
  <div
    class="start w-full h-screen overflow-y-hidden flex flex-col justify-between"
  >
    <div class="mt-10 flex flex-col gap-8 items-center">
      <span class="text-white font-epil text-2xl">Делай то-то и то-то</span>

      <div class="">
        <main-vue class="rounded-2xl relative !scale-60 -my-44">
          <Dashboard v-if="step == 0" />
          <Friends v-else-if="step == 1" />
          <LevelInfo v-else />
        </main-vue>
      </div>
      <!-- {{ step }}  -->
      <span class="text-white font-epil text-2xl max-w-60"
        >У нас вы можете первое, второе и третье.</span
      >
    </div>
    <div class="flex justify-center pb-14 gap-10 items-center">
      <img
        src="@/assets/img/arrow.png"
        class="w-5"
        v-if="step == 2"
        @click="changer"
      />
      <router-link :to="{ name: 'Dashboard' }" class="relative">
        <img src="@/assets/img/cloud-btn.png" class="h-15" />
        <span class="absolute top-4 left-14 text-3xl text-black font-epil"
          >Начать</span
        >
      </router-link>
      <img
        src="@/assets/img/arrow.png"
        class="w-5 rotate-180"
        @click="changer"
        v-if="step !== 2"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import MainVue from "./Main.vue";
import Dashboard from "./Dashboard.vue";
import Friends from "./Friends.vue";
import LevelInfo from '@/views/LevelInfo.vue';

const step = ref(0);

const changer = () => {
  if (step.value < 2) {
    step.value++;
  } else {
    step.value--;
  }
};
</script>
<style>
.start {
  background: #26272c;
}
.start .start-scale {
  transform: scale(0.9) !important;
}
.start .left-none {
  left: 0 !important;
}
</style>
