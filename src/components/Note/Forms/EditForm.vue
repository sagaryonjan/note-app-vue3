<script setup>
import NoteForm from '../NoteForm.vue';

import { updateNote } from '../../../services/note';
import { useNoteFormStore } from '../../../store/noteFormStore';

const store = useNoteFormStore();

const props = defineProps({
    refreshNoteList: Function,
    closeModal: Function
});

async function submitHandler() {
    try {
        if(!store.getFormDetail.id) return;

        await updateNote(store.getFormDetail.id, {
            subject: store.getFormDetail.subject,
            note: store.getFormDetail.note,
        })

        props.closeModal();
        props.refreshNoteList();
  } catch (e) {
    console.log(e);
  }
}

</script>

<template>
    <q-card style="width: 35%">
        <q-card-section>
            <div class="text-h6">Edit Note</div>
        </q-card-section>

        <q-separator />

        <q-form autofocus @submit.prevent="submitHandler">

            <NoteForm />

            <q-separator />

            <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn color="primary" type="submit">Save</q-btn>
            </q-card-actions>

        </q-form>
    </q-card>
</template>