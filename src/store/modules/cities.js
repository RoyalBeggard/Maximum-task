import { getCities } from "@/api/v1/cities";

export const cities = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    setData(state, value) {
      state.data = value;
    },
  },
  actions: {
    async load({ commit }) {
      try {
        const { data } = await getCities();
        commit("setData", data);
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
