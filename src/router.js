import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/Home.vue";
import Gatos from "./views/Gatos.vue";
import GalleryHeader from "./layout/starter/GalleryHeader";


Vue.use(Router);

export default new Router({
  base:'TheCatAPI',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/search/:query?",
      name: "search",
      components: {
        header: GalleryHeader,
        default: Gatos,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '*',
      redirect: { name: 'Home' },
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
