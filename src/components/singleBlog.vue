<script>
export default {
  data() {
    return {
      //Dynamic route params with vue router
      id: this.$route.params.id,
      blog: {},
    };
  },
  //Fetch data in created()
  created() {
    this.$http
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(function (data) {
        this.blog = data.body;
      });
  },
};
</script>

<template>
  <div id="single=blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
