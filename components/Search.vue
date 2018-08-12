<template>
  <div class="relative mt-2 mb-8">
    <input
      ref="search"
      class="font-mono p-5 pr-12 text-lg shadow appearance-none border rounded w-full"
      type="text"
      :value="value"
      v-on="listeners"
      v-bind="$attrs"
    >

    <transition name="fade">
      <button
        v-if="value.length > 0"
        @click="$emit('input', '')"
        title="Vymazat hledání"
        class="absolute pin-y pin-r mt-2 mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="inline-block h-8 w-8 text-grey hover:text-red"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    value: {
      type: String,
      required: true,
      default: ""
    }
  },

  mounted() {
    this.$refs.search.focus();
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value)
      }
    }
  }
}
</script>