<template>
  <div class="bg-gray-200 min-h-screen">
    <nuxt/>

    <footer class="container mx-auto py-4">
      <p class="font-mono">
        <small v-once>
          Městský zápisník &copy; {{ new Date().getFullYear() }} |
          Vyrobil <a href="https://www.jakubkotek.cz" rel="noopener nofollow" class="no-underline hover:underline text-black font-bold">Jakub Kotek</a> |
          <a href="https://github.com/natocTo/mestsky-zapisnik" rel="noopener nofollow" class="no-underline hover:underline text-black font-bold">Zdrojové kódy</a>
        </small>
      </p>
    </footer>
  </div>
</template>