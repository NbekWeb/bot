<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div
    class="relative flex flex-col justify-between h-screen min-h-screen overflow-y-hidden main-fon"
  >
    <span></span>
    <router-view class="flex-grow" />
    <div class="relative w-full mx-auto max-w-374 mb-7 min-h-20">
      <img
        src="@/assets/img/tab-bg.png"
        class="absolute top-0 left-0 w-full h-20"
      />
      <div
        class="absolute flex items-center justify-between w-full h-full pb-1 mx-4 pr-9 z-1"
      >
        <router-link :to="{ name: 'Tasks' }">
          <img src="@/assets/img/tasks.png" class="w-10" />
        </router-link>
        <router-link :to="{ name: 'Leader' }">
          <img src="@/assets/img/leader.png" class="w-10" />
        </router-link>
        <router-link :to="{ name: 'Dashboard' }">
          <img src="@/assets/img/dashboard.png" class="w-10" />
        </router-link>
        <router-link to="">
          <img src="@/assets/img/friends.png" class="w-10" />
        </router-link>

        <router-link to="">
          <img src="@/assets/img/cash.png" class="w-10" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-fon {
  background-image: url("@/assets/img/fon.png"); /* Replace with your image URL */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
</style>
