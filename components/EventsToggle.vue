<template>
  <div class="flex items-end justify-end font-mono mb-8">
      <button
        @click="$emit('click')"
        class="p-2 text-grey-darkest hover:text-black focus:outline-none"
      >
        <template v-if="events">Přepnout na zápisy</template>
        <template v-else>Přepnout na akce</template>
      </button>
    </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Boolean,
      required: true
    }
  }
}
</script>