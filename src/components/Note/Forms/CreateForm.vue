<script setup>
import { createNote } from '../../../services/note';
import { useNoteFormStore } from '../../../store/noteFormStore';
import NoteForm from '../NoteForm.vue';
import { useUserStore } from '../../../store/userStore';

const props = defineProps({
    refreshNoteList: Function,
    closeModal: Function,
})

const noteFormstore = useNoteFormStore();
const userStore = useUserStore();

async function submitHandler() {
    try {
        await createNote({
            subject: noteFormstore.getFormDetail.subject,
            note: noteFormstore.getFormDetail.note,
            user_id: userStore.id,
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
        <div class="text-h6">Add New Note</div>
        </q-card-section>

        <q-separator />
        <q-form autofocus @submit.prevent="submitHandler">

            <NoteForm />

            <q-separator />

            <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn color="primary" type="submit">Add Note</q-btn>
            </q-card-actions>

        </q-form>
    </q-card>
</template>

