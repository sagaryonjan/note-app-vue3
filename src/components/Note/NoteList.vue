<script setup>
import { ref } from 'vue'

import EditNote from './Actions/EditNote.vue';
import DeleteNote from './Actions/DeleteNote.vue';
import EditForm from './Forms/EditForm.vue';

const props = defineProps({
    refreshNoteList: Function,
    notes: Array
});

const modalStatus = ref(false);

const openModal = () => {
    modalStatus.value = true;
}

const closeModal = () => {
    modalStatus.value = false;
}

</script>

<template>
  <div>
    <div v-for="note in notes">
      <q-separator />

      <q-card-section class="card-item">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="subject">{{ note.subject }}</div>
            <div>
              {{ note.note }}
            </div>
            <div class="row items-center justify-between q-py-sm">
              <div class="row items-center q-py-sm">
                <q-avatar size="24px" color="orange">SY</q-avatar>
                <div class="text-bold q-pl-sm user-name">{{note.user.name}}</div>
              </div>
              <div class="q-pl-sm created-date">{{ note.created_at }}</div>
              <!-- 05/12/2023, 04:00 PM -->
            </div>
          </div>
          <q-btn color="grey-8" round flat icon="more_vert" class="more-info">
              <q-menu cover auto-close>
                <q-list>
                  <EditNote :note-id="note.id" :openModal="openModal" />
                  <DeleteNote :note-id="note.id" :refreshNoteList="refreshNoteList"/>
                </q-list>
              </q-menu>
            </q-btn>
        </div>
      </q-card-section>
    </div>

    <q-dialog v-model="modalStatus">
        <EditForm :refreshNoteList="refreshNoteList" :closeModal="closeModal" />
    </q-dialog>
  </div>
</template>

<style scoped>
.card-item {
}
.card-item:hover {
  background-color: #E5E7EB;
}
.more-info {
  position: absolute;
  top: 14px;
  right: 2px;
  visibility: hidden;
  opacity: 0;
  font-size: 12px;
}

.card-item:hover .more-info {
  visibility: visible;
  opacity: 1;
}
.subject {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
}
.user-name {
  font-size: 13px;
  font-weight: 600;
}
.created-date {
  font-size: 11px;
  color: #6B7280;
}
</style>
