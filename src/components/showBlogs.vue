<script>
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        this.blogs = data.body.slice(0, 10);
      });
  },
  //Use computed property to create a custom search filter for blogs that contain a particular word.
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  //Local filters
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  //Local directives
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
};
</script>

<template>
  <!--v- allows to create custom directives. Narrow in this instance is the binding.  Column is the argument -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All blog articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <!--To create a filter add | after -->
      <!--Bind the link to the blog object so we can access the id.-->
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2 v-rainbow>{{ blog.title | toUppercase }}</h2></router-link
      >
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
