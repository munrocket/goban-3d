import Vue from "vue";
import Router from "vue-router";
import Players from "./views/Players.vue";
import Games from "./views/Games.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/players" },
    {
      path: "/players",
      name: "players",
      component: Players
    },
    {
      path: "/games",
      name: "games",
      component: Games
    },
    {
      path: "/chat",
      name: "chat",
      component: function() {
        return import("./views/Chat.vue");
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
