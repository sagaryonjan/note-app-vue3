<script setup>
import { ref } from 'vue'

import { fetchNotes } from '../../services/note';

import NoteList from './NoteList.vue';
import CreateNote from './Actions/CreateNote.vue';
import { useUserStore } from '../../store/userStore';
import EventBus from '../../event-bus/EventBus';

const store = useUserStore();

const notes = ref([]);

const getNotes = async () => {
  const { data } = await fetchNotes();
  
  notes.value = data.data.filter(note => note.user_id === store.getUserId);
};

EventBus.on("ACTIVE_USER_CHANGED", (user) => {
    getNotes();
});

getNotes();

</script>

<template>
    <div class="q-container q-py-xl q-px-xl ">
        <q-card flat bordered class="my-card white">
            <q-card-section>
            <div class="row items-center no-wrap">
                <div class="col">
                    <div class="text-h5 card-title">Notes</div>
                </div>
                <CreateNote :refreshNoteList="getNotes" />
            </div>
            </q-card-section>
            
            <NoteList :notes="notes" :refreshNoteList="getNotes" />
        </q-card>
    </div>
</template>