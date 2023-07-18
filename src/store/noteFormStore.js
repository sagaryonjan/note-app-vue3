import { defineStore } from 'pinia'

export const useNoteFormStore = defineStore('noteForm', {
  state: () => {
    return {
      id: '',
      subject: '',
      note: ''
    }
  },
  getters: {
    getFormDetail: (state) => state,
  },
  actions: {
    updateField(key, value) {
      this[key] = value;
    },

    updateForm({ id, subject, note }) {
      this.id = id;
      this.subject = subject;
      this.note = note;
    },
    
    clearForm() {
      this.id = '';
      this.subject = '';
      this.note = '';
    },
  },
})
