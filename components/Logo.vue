<template>
  <header class="font-mono text-black flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="hidden sm:inline-block h-16 w-16"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line class="line1" x1="8" y1="9" x2="10" y2="9"></line>
      <line class="line2" x1="8" y1="13" x2="16" y2="13"></line>
      <line class="line3" x1="8" y1="17" x2="16" y2="17"></line>
    </svg>

    <h1 class="inline-block ml-2">
      <small class="block font-normal text-base leading-none">Městský zápisník</small>
      <span class="text-4xl" v-text="city"></span>
    </h1>
  </header>
</template>

<script>
export default {
  props: ["city"]
}
</script>