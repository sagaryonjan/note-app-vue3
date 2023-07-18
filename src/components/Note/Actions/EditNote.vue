<script setup>

import { fetchNoteById } from '../../../services/note';
import { useNoteFormStore } from '../../../store/noteFormStore';

const store = useNoteFormStore();
const { updateForm } = store

const props = defineProps({
    noteId: Number,
    openModal: Function
})

const onClickEditModal = async () => {
    if(!props.noteId) return; 

   const { data } = await fetchNoteById(props.noteId);

   updateForm({id: data.id, subject: data.subject, note: data.note});
   props.openModal()
};

</script>

<template>
    <div>
        <q-item clickable @click.prevent="onClickEditModal">
            <q-item-section>Edit</q-item-section>
        </q-item>
    </div>
</template>

