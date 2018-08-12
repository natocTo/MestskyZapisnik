<template>
  <main class="container py-8">
    <div class="flex justify-between items-center pb-4">
      <logo :city="city"></logo>

      <nuxt-link
        class="p-2 ml-4 text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
        to="contributor"
      >Chci se zapojit
      </nuxt-link>
    </div>

    <input
      ref="search"
      class="font-mono p-5 text-lg mt-2 mb-8 shadow appearance-none border rounded w-full"
      type="text"
      aria-label="Vyhledávání"
      placeholder="Zadejte hledaný text.."
      :value="search"
      @input="search = $event.target.value"
    >

    <template v-if="filteredFaqs.length > 0">
      <paginator
        :data="filteredFaqs"
        :page="page"
        @totalPageChanged="totalPageChanged"
      >
        <div slot-scope="{subset, isFirstPage, isLastPage}">
          <faq
            v-for="(faq, index) in subset"
            :key="index"
            :text="faq.text"
            :file="faq.file"
          ></faq>

          <div class="flex items-center justify-between">
            <button
              :disabled="isFirstPage"
              @click="prevPage"
              class="inline-flex items-center p-2 text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
              :class="{ 'opacity-50 cursor-not-allowed': isFirstPage }"
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

              <span>Předchozí <span class="hidden sm:inline-block">zápisky</span></span>
            </button>

            <button
              :disabled="isLastPage"
              @click="nextPage"
              class="inline-flex items-center p-2 text-black border-2 border-black no-underline rounded font-semibold hover:bg-white"
              :class="{ 'opacity-50 cursor-not-allowed': isLastPage }"
            >
              <span>Další <span class="hidden sm:inline-block">zápisky</span></span>

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
                class="inline-block h-4 w-4 ml-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </paginator>
    </template>

    <div
      class="font-mono tracking-wide leading-normal sm:text-justify max-w-md py-4 mb-16"
      v-else
    >
      <h2 class="text-3xl pb-2">
        Nebylo nic nalezeno :(
      </h2>

      <p class="text-xl">
        A v případě že se Vám podaří informaci dohledat jinde. Budeme moc rádi
        když <nuxt-link to="contributor" class="no-underline text-blue">přidáte</nuxt-link> tuto informaci i k nám. Další lidé ji tu pak snadno dohledají.
      </p>
    </div>
  </main>
</template>

<script>
import Paginator from "~/components/Paginator.vue";
import Logo from "~/components/Logo.vue";
import Faq from "~/components/Faq.vue";
import cities from "~/cities.js";
import scrollTop from "~/utils/scrollTop.js";
const faqs = require.context("~/faqs", true, /\.md/);

export default {
  name: "City",

  components: {
    Paginator,
    Logo,
    Faq
  },

  validate ({ params }) {
    return cities.find(city => city.path === params.city);
  },

  head () {
    return {
      title: `${this.city} - Městský zápisník`
    };
  },

  data() {
    return {
      page: 1,
      search: "",
      faqs: []
    }
  },

  created() {
    this.loadCityFaqs();
  },

  mounted() {
    this.$refs.search.focus();
  },

  computed: {
    city() {
      return cities.find(city => city.path === this.$route.params.city).name;
    },

    filteredFaqs() {
      if (this.search === "") return this.faqs;

      const search = this.search.toLowerCase();
      const searchRegex = new RegExp("(" + search + ")(?!([^<]+)?>)", "gi");

      return this.faqs
        .filter(faq => faq.text.replace(/(<([^>]+)>)/ig, '').toLowerCase().indexOf(search) !== -1)
        .map(faq => {
          if (search.length < 3) return faq;

          return {
            "file": faq.file,
            "text": faq.text.replace(searchRegex, '<span class="highlight">$1</span>')
          }
        });
    }
  },

  methods: {
    loadCityFaqs() {
      const city = new RegExp(`^\.\/${this.$route.params.city}\/`);

      this.faqs = faqs.keys()
        .filter(faq => city.test(faq))
        .map(faq => ({
          'file': faq.replace(/^.*[\\\/]/, ''),
          'text': faqs(faq)
        }));
    },

    nextPage() {
      this.page = this.page + 1;
      scrollTop();
    },

    prevPage() {
      this.page = this.page - 1;
      scrollTop();
    },

    totalPageChanged(current, previous) {
      if (current !== previous) {
        this.page = 1;
      }
    }
  }
}
</script>