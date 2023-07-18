import { defineStore } from 'pinia'

export const useUserStore = defineStore('activeUser', {
  state: () => {
    return {
      id: 0,
      email: '',
      name: ''
    }
  },
  getters: {
    getUserId: (state) => state.id,
    getActiveUser: (state) => state,
  },
  actions: {
    setActiveUser({id, email, name}) {
      this.id = id;
      this.email = email;
      this.name = name;
    },
  },
})
