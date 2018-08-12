<template>
  <main class="container">
    <div class="py-8">
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
          A v případě že se Vám podaří informaci dohledat jinde. Budeme moc rádi
          když <nuxt-link to="contributor" class="no-underline text-blue">přidáte</nuxt-link> tuto informaci i k nám. Další lidé ji tu pak snadno dohledají.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Faq from "~/components/Faq.vue";
import cities from "~/cities.js";
const faqs = require.context("~/faqs", true, /\.md/);

export default {
  components: {
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
    }
  }
}
</script>