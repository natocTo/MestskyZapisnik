<template>
  <button
    :disabled="disabled"
    @click="$emit('click')"
    class="inline-flex items-center p-2 text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="inline-block h-4 w-4 mr-2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 8 8 12 12 16"></polyline>
      <line x1="16" y1="12" x2="8" y2="12"></line>
    </svg>

    <span>Předchozí</span>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: true,
      default: true
    }
  }
}
</script>