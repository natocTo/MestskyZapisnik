<template>
  <div
    class="font-mono container mx-auto min-h-screen flex justify-center items-center text-center"
  >
    <div class="py-8">
      <h2 v-if="error.statusCode === 404" class="text-3xl mb-4">
        Hledaná stránka nenalezena :(
      </h2>

      <h2 v-else class="text-3xl mb-4">
        Nastala neočekávaná chyba :(
      </h2>

      <nuxt-link to="/" class="text-black text-xl no-underline hover:underline">
        Zpět na hlavní stranu
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "empty",
    props: ["error"]
  };
</script>
