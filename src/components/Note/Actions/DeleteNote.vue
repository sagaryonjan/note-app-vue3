<script setup>
import { useQuasar } from 'quasar';
import { deleteNote } from '../../../services/note';

const props = defineProps({
    noteId: Number,
    refreshNoteList: Function,
});

const $q = useQuasar()

const onClickDelete = async () => {

    $q.dialog({
        title: 'Delete note',
        message: 'Are you sure you want to delete your note?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
    }).onOk(async() => {
        if(!props.noteId) return;
        await deleteNote(props.noteId);
        $q.notify({
          message: 'Note deleted successfully.',
          color: 'secondary',
          position: 'top-right'
        })

        props.refreshNoteList();      
    })
};

</script>

<template>
   <q-item clickable @click.prevent="onClickDelete">
        <q-item-section>Delete</q-item-section>
    </q-item>
</template>
