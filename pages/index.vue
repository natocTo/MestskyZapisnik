<template>
  <main class="container">
    <div class="flex flex-wrap">
      <nuxt-link
        class="text-2xl inline-block no-underline border-2 py-2 px-4 font-semibold rounded mr-4 my-4"
        v-for="(city, index) in sortedCities"
        :key="index"
        v-text="city.name"
        :to="city.path">
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import cities from "~/cities.js";

export default {
  middleware: 'svitavy',

  head() {
    return {
      title: 'Městský zápisník'
    }
  },

  data() {
    return {
      cities
    }
  },

  computed: {
    sortedCities() {
      return this.cities.sort();
    }
  }
}
</script>