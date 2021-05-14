<template>
  <div id="app">
    <!-- <Menu /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default {
  name: "App",
  components: {
    Menu,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
