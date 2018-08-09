<template>
  <main class="container">
    <div class="py-8">
      <div class="flex justify-between items-center pb-4">
        <h2 class="font-mono text-black flex items-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-1024-864q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"/>
          </svg>

          <div class="inline-block ml-2">
            <small class="block font-normal text-base leading-none">Městský zápisník</small>
            <span class="text-4xl" v-text="cityName"></span>
          </div>
        </h2>

        <nuxt-link
          class="p-2 ml-4 text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
          to="new"
        >Chci se zapojit
        </nuxt-link>
      </div>

      <input
        class="font-mono p-5 text-lg mt-2 mb-8 shadow appearance-none border rounded w-full"
        v-model="search"
        type="text"
        aria-label="Vyhledávání"
        placeholder="Zadejte hledaný text.."
      >

      <div
        class="py-4"
        v-if="filteredFaqs.length > 0"
      >
        <faq
          v-for="(faq, index) in filteredFaqs"
          :key="index"
          :text="faq.text"
          :file="faq.file"
        ></faq>
      </div>

      <div
        class="font-mono tracking-wide leading-normal sm:text-justify max-w-md py-4 mb-16"
        v-else
      >
        <h2 class="text-3xl pb-2">
          Nebylo nic nalezeno :(
        </h2>

        <p class="text-xl">
          Budeme rádi, pokud naleznete odpověď někde jinde, když přidáte tuto informaci i k nám, aby další lidé již tuto informaci zde dohledali.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Faq from "~/components/Faq.vue";
import cities from "~/cities.js";
const faqs = require.context("~/faqs", true, /\.md/);

export default {
  components: {
    Faq
  },

  validate ({ params }) {
    return cities.find(city => city.path === params.city);
  },

  head () {
    return {
      title: `${this.cityName} - Městský zápisník`
    };
  },

  data() {
    return {
      city: this.$route.params.city,
      search: "",
      faqs: []
    }
  },

  created() {
    this.loadCityFaqs();
  },

  computed: {
    cityName() {
      return cities.find(city => city.path === this.city).name;
    },

    filteredFaqs() {
      if (this.search === "") return this.faqs;

      const search = this.search.toLowerCase();
      const searchRegex = new RegExp(search, "gi");

      return this.faqs
        .filter(faq => faq.toLowerCase().indexOf(search) !== -1)
        .map(faq => {
          if (search.length < 4) return faq;

          return faq.replace(searchRegex, match => {
            return '<span class="highlight">' + match + '</span>';
          })
        });
    }
  },

  methods: {
    loadCityFaqs() {
      const city = new RegExp(`^./${this.city}/*`);

      this.faqs = faqs.keys().filter(faq => city.test(faq)).map(faq => ({
        'file': faq.replace(/^.*[\\\/]/, ''),
        'text': faqs(faq)
      }));
    }
  }
}
</script>