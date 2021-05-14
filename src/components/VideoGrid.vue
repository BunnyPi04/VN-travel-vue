<template>
  <div class="video-grid-section">
    <div class="collapse-title" @click="collapse = !collapse">
      <a class="btn btn-primary">
        <h4>Videos</h4>
      </a>
      <!--       <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseVideo" aria-expanded="false" aria-controls="collapseVideo">
        Button with data-target
      </button> -->
    </div>
    <div class="" :class="collapse ? 'slide-down' : ''" id="collapseVideo">
      <div>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      collapse: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.collapse {
  transition-duration: 0.5s;
  transition: all;
  transform: translateY(0);
}
.slide-down {
  transform: translateY(100px);
}
</style>
