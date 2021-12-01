import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { cities } from "@/store/modules/cities";
import { forms } from "@/store/modules/forms";

export default new Vuex.Store({
  modules: {
    cities,
    forms,
  },
});
