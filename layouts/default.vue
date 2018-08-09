<template>
  <div class="bg-grey-lightest min-h-screen">
    <nuxt/>

    <footer class="container">
      <p class="font-mono">
        <small>
          Městský zápisník Svitavy |
          Made with &#x2764 by <a href="https://www.jakubkotek.cz" rel="noopener nofollow" class="no-underline hover:underline text-black font-bold">Jakub Kotek</a> |
          &copy; {{ new Date().getFullYear() }} |
          <a href="https://github.com/natocTo/mestsky-zapisnik" rel="noopener nofollow" class="no-underline hover:underline text-black font-bold">Github repository</a>
        </small>
      </p>
    </footer>
  </div>
</template>