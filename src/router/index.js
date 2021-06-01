import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeGlobal")
        }
        // {
        //   path: "my-feed",
        //   name: "home-my-feed",
        //   component: () => import("@/views/HomeMyFeed")
        // },
        // {
        //   path: "tag/:tag",
        //   name: "home-tag",
        //   component: () => import("@/views/HomeTag")
        // }
      ]
    },
    {
      name: "about-us",
      path: "/about-us/",
      component: () => import("@/views/AboutUs")
    },
    {
      name: "destinations",
      path: "/destinations/",
      component: () => import("@/views/Destination")
      // children: [
      //   {
      //     name: "city-highlight",
      //     path: "/city-highlight",
      //     component: () => import("@/views/CityHighlight")
      //   }
      // ]
    },
    {
      name: "city-highlight",
      path: "/destinations/city-highlight/",
      component: () => import("@/views/CityHighlight")
    },
    {
      name: "city-highlight-detail",
      path: "/destinations/city-highlight/detail",
      component: () => import("@/views/CityDetail")
    },
    {
      name: "plan-your-trip",
      path: "/plan-your-trip/",
      component: () => import("@/views/PlanYourTrip")
    },
    {
      name: "news-detail",
      path: "/news/:slug",
      component: () => import("@/views/NewsDetail")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("@/views/Register")
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("@/views/Settings")
    },
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: "/@:username",
      component: () => import("@/views/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("@/views/ProfileArticles")
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () => import("@/views/ProfileFavorited")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import("@/views/Article"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () => import("@/views/ArticleEdit")
    }
  ]
});
