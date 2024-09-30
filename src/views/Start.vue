<template>
  <div
    class="flex flex-col justify-between w-full h-screen overflow-y-hidden start"
  >
    <div class="flex flex-col items-center gap-8 mt-10">
      <span class="text-2xl text-white font-epil">Делай то-то и то-то</span>

      <div class="">
        <main-vue class="rounded-2xl relative !scale-60 -my-44">
          <Dashboard v-if="step == 0" />
          <Friends v-else-if="step == 1" />
          <LevelInfo v-else />
        </main-vue>
      </div>
      <!-- {{ step }}  -->
      <span class="text-2xl text-white font-epil max-w-60"
        >У нас вы можете первое, второе и третье.</span
      >
    </div>
    <div class="flex items-center justify-center gap-10 pb-14">
      <img
        src="@/assets/img/arrow.png"
        class="w-5"
        v-if="step == 2"
        @click="changer"
      />
      <router-link :to="{ name: 'Dashboard' }" class="relative">
        <img src="@/assets/img/cloud-btn.png" class="h-15" />
        <span class="absolute text-3xl text-black top-4 left-14 font-epil"
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
import MainVue from "@/views/Main.vue";
import Dashboard from "@/views/DashboardComp.vue";
import Friends from "@/views/Friends.vue";
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
