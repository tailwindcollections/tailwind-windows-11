<template>
  <div
    class="flex flex-col w-full min-h-screen font-sans text-white bg-center bg-no-repeat bg-cover"
    style="background-image: url('/img/wallpaper.png')"
  >
    <div class="flex flex-1 p-6">
      <div class="flex flex-col items-center gap-y-1.5">
        <img class="w-8 h-auto" src="/img/recycle-bin.png" alt="" />
        <span class="text-xs">Recycle Bin</span>
      </div>
    </div>
    <div class="absolute w-[600px] flex flex-col bottom-16 right-1/2 translate-x-1/2">
      <div
        class="flex flex-col gap-y-6 p-8 rounded-t border border-white/10 bg-purple bg-opacity-65 backdrop-filter backdrop-blur-[200px]"
      >
        <div
          class="flex items-center w-full h-10 bg-white rounded-sm overflow-hidden shadow-search"
        >
          <div class="p-5 pr-4">
            <SearchIcon />
          </div>
          <input
            class="w-full h-full pb-0.5 text-sm text-gray-300 focus:outline-none"
            type="text"
            placeholder="Type here to"
          />
        </div>
        <div class="flex flex-col gap-y-3">
          <div class="flex justify-between">
            <span class="font-bold text-white">Pinned</span>
            <button
              class="flex items-center py-1 px-4 space-x-2 bg-gray-200 bg-opacity-10 rounded-md"
            >
              <span class="pb-0.5 text-xs">All apps</span>
              <ChevronRightIcon class="w-3 h-3" />
            </button>
          </div>
          <div class="grid grid-cols-6 -mx-5">
            <div
              v-for="menu in pinned"
              class="flex flex-col justify-center items-center w-24 h-20 text-center"
            >
              <img
                class="h-8 w-auto cursor-pointer"
                :src="`/img/${menu.icon}.png`"
                alt=""
              />
              <span class="pt-2 text-xs whitespace-nowrap cursor-pointer">
                {{ menu.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-3">
          <div class="flex justify-between">
            <span class="font-bold text-white">Recommended</span>
            <button
              class="flex items-center py-1 px-4 space-x-2 bg-gray-200 bg-opacity-10 rounded-md"
            >
              <span class="text-xs pb-0.5">More</span>
              <ChevronRightIcon class="w-3 h-3" />
            </button>
          </div>
          <div class="grid grid-cols-2 gap-x-4 gap-y-6">
            <div v-for="item in recommended" class="flex items-center px-2">
              <img class="w-8 cursor-pointer" :src="`/img/${item.icon}.png`" alt="" />
              <div class="flex flex-col pl-4">
                <span
                  class="text-xs font-bold tracking-wide leading-relaxed cursor-pointer"
                >
                  {{ item.title }}
                </span>
                <span class="text-xs cursor-pointer"> {{ item.description }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-between h-16 px-10 bg-purple bg-opacity-65 backdrop-filter backdrop-blur-[57px] border-b border-l border-r border-white/10 rounded-b-md"
      >
        <button class="flex items-center">
          <img class="w-8 h-8" src="/img/avatar.png" alt="" />
          <span class="pl-4 text-sm">Brooklyn Simmons</span>
        </button>
        <div class="flex items-center">
          <button class="flex justify-center items-center h-10 w-10">
            <SettingsIcon />
          </button>
          <button class="flex justify-center items-center h-10 w-10">
            <PowerIcon />
          </button>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 inset-x-0 h-14 flex items-center justify-center gap-x-3 bg-purple bg-opacity-[.63] backdrop-filter backdrop-blur-[50px]"
    >
      <div v-for="(item, index) in taskbar">
        <button
          class="p-2 rounded relative"
          :class="
            index === 0
              ? 'bg-white bg-opacity-[0.16] border border-white/10 shadow-md'
              : ''
          "
        >
          <img class="h-6 w-auto" :src="`/img/${item.icon}.png`" alt="" />
          <span
            v-if="item.isOpen"
            class="absolute h-0.5 w-1 rounded-full bg-white -bottom-0.5 left-1/2 -translate-x-1/2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChevronRightIcon from "./icons/chevron-right.svg";
import SearchIcon from "./icons/search.svg";
import SettingsIcon from "./icons/settings.svg";
import PowerIcon from "./icons/power.svg";
const taskbar = [
  { icon: "windows", isOpen: false },
  { icon: "search", isOpen: false },
  { icon: "screen", isOpen: false },
  { icon: "dashboard", isOpen: false },
  { icon: "explorer", isOpen: true },
  { icon: "edge", isOpen: false },
  { icon: "word", isOpen: true },
  { icon: "power-point", isOpen: false },
  { icon: "store", isOpen: false },
  { icon: "steam", isOpen: true },
];
const pinned = [
  { name: "Microsoft Edge", icon: "edge" },
  { name: "Word", icon: "word" },
  { name: "Excel", icon: "excel" },
  { name: "Powerpoint", icon: "power-point" },
  { name: "Calendar", icon: "calendar" },
  { name: "Settings", icon: "settings" },
  { name: "Microsoft Store", icon: "store-dark" },
  { name: "Epic Games", icon: "epic-games" },
  { name: "Spotify", icon: "spotify" },
  { name: "News", icon: "newsfeed" },
  { name: "Xbox", icon: "xbox" },
  { name: "Solitaire", icon: "solitaire" },
  { name: "Onedrive", icon: "onedrive" },
  { name: "Netflix", icon: "netflix" },
  { name: "Todo", icon: "todo" },
  { name: "Office", icon: "office" },
  { name: "Twitter", icon: "twitter" },
  { name: "Skype", icon: "skype" },
];
const recommended = [
  { title: "Get Started", description: "Welcome to windows", icon: "get-started" },
  { title: "One drive", description: "Recently added", icon: "recently-added" },
  { title: "Tournament Photos", description: "Yesterday at 4:20 PM", icon: "image" },
  { title: "Logo Ideas", description: "12h ago", icon: "image" },
];
</script>
