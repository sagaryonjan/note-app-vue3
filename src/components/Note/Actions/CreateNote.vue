<script setup>
import { ref } from 'vue'

import CreateForm from '../Forms/CreateForm.vue';
import { useNoteFormStore } from '../../../store/noteFormStore';

const props = defineProps({
    refreshNoteList: Function,
})

const {clearForm} = useNoteFormStore();

const modalStatus = ref(false);

const openModal = () => {
    clearForm();
    modalStatus.value = true;
}

const closeModal = () => {
  modalStatus.value = false;
}

</script>

<template>
    <div>
        <q-btn
            style="background: #ececec; color: #111"
            unelevated
            @click="openModal"
            label="Add"
            />

        <q-dialog v-model="modalStatus" >
            <CreateForm
                :refreshNoteList="refreshNoteList"
                :closeModal="closeModal"
            />
        </q-dialog>
    </div>
</template>

