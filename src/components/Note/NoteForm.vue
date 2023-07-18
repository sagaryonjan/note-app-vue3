
<script setup>
import { useNoteFormStore } from '../../store/noteFormStore';

const store = useNoteFormStore();
const { updateField } = store

</script>

<template>
    <q-card-section style="max-height: 50vh">
        <q-input
            label="Subject *"
            filled
            v-model="store.getFormDetail.subject"
            @input="updateField('subject', $event)" 
            :rules="[
                (val) => (val && val.length > 0) || 'Subject must be filled in.',
            ]"
        />

        <br />

        <q-input
            label="Note *"
            filled
            type="textarea"
            v-model="store.getFormDetail.note"
            @input="updateField('note', $event)" 
            :rules="[
                (val) => (val && val.length > 0) || 'Note must be filled in.',
            ]"
        />

    </q-card-section>
</template>
  