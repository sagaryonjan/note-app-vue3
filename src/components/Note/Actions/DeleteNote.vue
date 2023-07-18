<script setup>
import { deleteNote } from '../../../services/note';

const props = defineProps({
    noteId: Number,
    refreshNoteList: Function,
})

const onClickDelete = async () => {
    if(!props.noteId) return;
    await deleteNote(props.noteId);
    props.refreshNoteList();
};

</script>

<template>
   <q-item clickable @click.prevent="onClickDelete">
        <q-item-section>Delete</q-item-section>
    </q-item>
</template>
