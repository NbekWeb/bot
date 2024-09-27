<template>
  <div class="h-calc">
    <div
      class="relative w-full mx-auto mt-8 max-w-374 overflow-y-auto min-h-content"
    >
      <router-link :to="{ name: 'LevelInfo' }">
        <div class="relative max-xs:scale-90">
          <img src="@/assets/img/data-bg.png" class="w-full" />
          <img src="@/assets/img/user.png" class="absolute w-24 top-7 left-8" />
          <span
            class="absolute flex text-2xl font-medium text-white right-18 font-epil top-6 min-w-28"
            >@obtainer</span
          >
          <span
            class="absolute flex text-2xl font-medium text-white right-18 font-epil bottom-8 min-w-28"
            >level #2</span
          >
        </div>
      </router-link>
      <div class="mt-5 grid grid-cols-2 gap-1.5 max-xs:scale-90">
        <div class="relative">
          <img src="@/assets/img/cloud-btn.png" class="w-full" />
          <div class="absolute flex items-center gap-4 top-4 left-8">
            <img src="@/assets/img/nut1.png" class="h-5" />
            <span class="text-xl font-medium font-epil"> 20184 </span>
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/img/cloud-btn.png" class="w-full" />
          <div class="absolute flex items-center gap-4 top-4 left-8">
            <img src="@/assets/img/nut2.png" class="h-5" />
            <span class="text-xl font-medium font-epil"> 14 </span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mt-7 max-xs:scale-90">
        <div class="relative h-42 w-42">
          <img src="@/assets/img/big-btn-bg.png" class="w-full h-full" />
          <img
            src="@/assets/img/chest.png"
            class="absolute top-8 left-8 w-26 h-26"
          />
        </div>
        <div class="relative h-42 w-42">
          <img src="@/assets/img/big-btn-bg.png" class="w-full h-full" />
          <img
            src="@/assets/img/scrat.png"
            class="absolute top-8 left-8 w-26 h-26"
          />
        </div>
      </div>
      <div class="flex justify-center w-full mt-20">
        <img src="@/assets/img/start.gif" class="h-50" />
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style lang=""></style>
