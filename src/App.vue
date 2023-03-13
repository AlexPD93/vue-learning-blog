<script>
import FormOne from "./components/formOne.vue";
import FormTwo from "./components/formTwo.vue";
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import header from "./components/header.vue";

export default {
  components: {
    "form-one": FormOne,
    "form-two": FormTwo,
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "app-header": header,
  },
  data() {
    return {
      component: "form-one",
    };
  },
};
</script>

<template>
  <div>
    <app-header></app-header>
    <!--Creating a Vue component which is dynamic when bound -->
    <!--Use keep-alive tag to keep information when switching to a new component-->
    <!-- <component v-bind:is="component"></component>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: fantasy;
}
</style>
