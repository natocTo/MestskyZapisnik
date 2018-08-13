<template>
  <div class="faq group relative mb-4">
    <div class="absolute pin-r pin-t invisible group-hover:visible">
      <a
        class="inline-block p-1"
        :href="`${repository}/edit/master/faqs/${city}/${event ? 'akce/' : ''}${file}`"
        rel="nofollow noopener"
        title="Upravit zápis"
        target="_blank"
      >
        <svg
          class="fill-current text-grey-dark hover:text-blue inline-block h-6 w-6"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/>
        </svg>
      </a>

      <a
        class="inline-block p-1"
        :href="`${repository}/delete/master/faqs/${city}/${event ? 'akce/' : ''}${file}`"
        rel="nofollow noopener"
        title="Vymazat zápis"
        target="_blank"
      >
        <svg
          class="fill-current text-grey-dark hover:text-red inline-block h-6 w-6"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M704 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm128 724v-948h-896v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3 0 10.5-8.5t14.5-27 7-40.5zm-672-1076h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/>
        </svg>
      </a>
    </div>

    <article
      class="font-mono text-grey-darkest border-b-4 border-dotted border-grey leading-normal pt-2 pb-2 mt-4"
      v-html="text"
    ></article>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },

    file: {
      type: String,
      required: true
    },

    event: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      repository: process.env.repository,
      city: this.$route.params.city
    }
  }
}
</script>