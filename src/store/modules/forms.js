import { sendForm } from "@/api/v1/forms";

export const forms = {
  namespaced: true,
  state: {
    status: null,
  },
  mutations: {
    setStatus(state, value) {
      state.status = value;
    },
  },
  actions: {
    async send({ commit }) {
      try {
        const { data } = await sendForm();
        commit("setStatus", data);
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
