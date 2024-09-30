<template>
  <div
    class="relative flex flex-col justify-between h-full min-h-screen !overflow-y-hidden main-fon"
  >
  <slot></slot>
    <RouterView class="flex-grow mx-auto border border-black" />
    <div
      class="fixed  w-full mx-auto max-w-374 bottom-2 min-h-20 left-1/2 left-none transform -translate-x-1/2 max-xs:scale-90 start-scale"
    >
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
        <router-link :to="{ name: 'Friends' }">
          <img src="@/assets/img/friends.png" class="w-10" />
        </router-link>

        <router-link :to="{ name: 'Cash' }">
          <img src="@/assets/img/cash.png" class="w-10" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
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
