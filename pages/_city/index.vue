<template>
  <div class="container mx-auto py-8 py-4 px-2">
    <div class="flex justify-between items-center pb-4">
      <logo :city="city"></logo>
      <contributor></contributor>
    </div>

    <search
      :value="search"
      @input="updateSearch"
      aria-label="Vyhledávání"
      placeholder="Zadejte hledaný text.."
    ></search>

    <template v-if="filteredFaqs.length > 0">
      <paginator :data="filteredFaqs" :page="page" @totalPageChanged="page = 1">
        <main slot-scope="{ subset, isFirstPage, isLastPage }">
          <faq
            v-for="(faq, index) in subset"
            :key="index"
            :text="faq.text"
            :file="faq.file"
          ></faq>

          <div class="flex items-center justify-between">
            <previous :disabled="isFirstPage" @click="--page"></previous>
            <next :disabled="isLastPage" @click="++page"></next>
          </div>
        </main>
      </paginator>
    </template>

    <no-match v-else></no-match>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import Contributor from "~/components/Contributor.vue";
  import Search from "~/components/Search.vue";
  import Paginator from "~/components/Paginator.vue";
  import Faq from "~/components/Faq.vue";
  import Previous from "~/components/Previous.vue";
  import Next from "~/components/Next.vue";
  import NoMatch from "~/components/NoMatch.vue";
  import cities from "~/cities.js";
  import scrollTop from "~/utils/scrollTop.js";

  const faqs = require.context("~/faqs", true, /\.md/);

  export default {
    name: "City",

    components: {
      Logo,
      Contributor,
      Search,
      Paginator,
      Faq,
      Previous,
      Next,
      NoMatch
    },

    validate({ params }) {
      return cities.find(city => city.path === params.city);
    },

    head() {
      return {
        title: `${this.city} - Městský zápisník`
      };
    },

    data() {
      return {
        page: 1,
        search: "",
        faqs: []
      };
    },

    watch: {
      page() {
        scrollTop();
      }
    },

    created() {
      this.loadCityFaqs();
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
          .filter(
            faq =>
              faq.text
                .replace(/(<([^>]+)>)/gi, "")
                .toLowerCase()
                .indexOf(search) !== -1
          )
          .map(faq => {
            if (search.length < 3) return faq;

            return {
              file: faq.file,
              text: faq.text.replace(
                searchRegex,
                '<span class="highlight">$1</span>'
              )
            };
          });
      }
    },

    methods: {
      loadCityFaqs() {
        const city = new RegExp(`^\.\/${this.$route.params.city}\/`);

        this.faqs = faqs
          .keys()
          .filter(faq => city.test(faq))
          .map(faq => ({
            file: faq.replace(/^.*[\\\/]/, ""),
            text: faqs(faq)
          }));
      },

      updateSearch(text) {
        this.search = text;
      }
    }
  };
</script>
