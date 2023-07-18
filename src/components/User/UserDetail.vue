<script setup>
import { useUserStore } from '../../store/userStore'

const store = useUserStore();
</script>

<template>
    <q-item>
        <q-item-section side>
            <q-avatar rounded size="90px" color="primary" text-color="white">JY</q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-weight-bold user-name">{{ store.getActiveUser.name  }}</q-item-label>
            <q-item-label>
            <q-icon size="xs" name="person_outline"/>&nbsp;Male &nbsp;&nbsp;
            <q-icon size="xs" name="event"/>&nbsp;01.18.1956
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<style scoped>
.container {
  height: 100vh;
}
.sidebar {
  background-color: #F3F4F6;
  height: 100%;
  
}

.user-name {
  font-size: 24px;
  margin-bottom: 10px;
  color: #111827;
}

.active {
  background-color: #fff;
}
.content {
  background-color: #F9FAFB;
  padding: 1rem;
}
</style>
