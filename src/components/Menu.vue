<template>
  <div>
    <div class="menu-md">
      <nav
        class="navigation"
        :class="openNav ? 'open' : 'close-nav'"
        role="navigation"
      >
        <ul class="primary-nav">
          <li class="menu-login">
            <a class="login-btn" href="#">Login</a>
            <a class="register-btn" href="#">Register</a>
          </li>
          <li>
            <h2 class="section-title menu-1"><a href="#menu-intro">Home</a></h2>
          </li>
          <li>
            <h2 class="section-title">
              <router-link to="/about-us/">About Us</router-link>
            </h2>
          </li>
          <li>
            <h2 class="section-title">
              <router-link to="/destinations/">Destination</router-link>
            </h2>
          </li>
          <li>
            <h2 class="section-title">
              <a href="#menu-space">Package Tour</a>
            </h2>
          </li>
          <li>
            <h2 class="section-title">
              <a href="#menu-testimonial">Plan your trip</a>
            </h2>
          </li>
          <li>
            <h2 class="section-title"><a href="#menu-info">News</a></h2>
          </li>
          <li>
            <h2 class="section-title"><a href="#menu-info">Contact Us</a></h2>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        class="nav-toggle"
        :class="openNav ? 'open' : 'close-nav'"
        @click="openNav = !openNav"
        ><span></span
      ></a>
    </div>
    <div class="menu w-100">
      <div class="logo">
        <h1>
          <img
            class="animBlock notViewed"
            data-position="bottom"
            data-offset="300"
            src="@/assets/images/app/logo.svg"
          />
        </h1>
      </div>
      <div class="menu-frame">
        <div class="menu-item active"><a href="#menu-intro">Home</a></div>
        <div class="menu-item">
          <router-link to="/about-us/">About Us</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/destinations/">Destination</router-link>
        </div>
        <div class="menu-item"><a href="#menu-space">Package Tour</a></div>
        <div class="menu-item">
          <a href="#menu-testimonial">Plan your trip</a>
        </div>
        <div class="menu-item"><a href="#menu-info">News</a></div>
        <div class="menu-item"><a href="#menu-info">Contact Us</a></div>
        <div class="menu-item">
          <img class="search-icon" src="@/assets/images/app/search.svg" />
        </div>
      </div>
      <div class="register-cart">
        <div class="cart">
          <img src="@/assets/images/app/ic_cart.svg" />
        </div>
        <div class="login"><button>Login</button></div>
        <div class="register-button">
          <button>Register</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openNav: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
