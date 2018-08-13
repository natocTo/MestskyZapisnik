<script>
export default {
  name: "Paginator",

  render() {
    return this.$scopedSlots.default({
      subset: this.subset,
      totalPages: this.totalPages,
      isFirstPage: this.isFirstPage,
      isLastPage: this.isLastPage
    });
  },

  props: {
    data: {
      type: Array,
      required: true,
      default: []
    },

    page: {
      type: Number,
      required: true,
      default: 1
    },

    perPage: {
      type: Number,
      default: 20
    }
  },

  computed: {
    subset() {
      const firstEntry = (this.page - 1) * this.perPage;
      const lastEntry = firstEntry + this.perPage;
      return this.data.slice(firstEntry, lastEntry);
    },

    totalPages() {
      return Math.ceil(this.data.length / this.perPage) || 1;
    },

    isFirstPage() {
      return this.page === 1;
    },

    isLastPage() {
      return this.page === this.totalPages;
    }
  },

  watch: {
    totalPages(newValue, oldValue) {
      this.$emit('totalPageChanged', newValue, oldValue)
    }
  }
};
</script>