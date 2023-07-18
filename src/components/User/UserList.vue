<script setup>
import { ref } from 'vue'

import { fetchUsers } from '../../services/user';
import { useUserStore } from '../../store/userStore'
import EventBus from '../../event-bus/EventBus';

const users = ref([]);

const store = useUserStore();
const { setActiveUser } = store

const getUsers = async () => {
  const { data } = await fetchUsers();
  users.value = data;
  const [firstUser] = data.data;

  setActiveUser({
      id: firstUser.id,
      email: firstUser.email,
      name: firstUser.name
  })
};

const storeUser = (user) => {
    setActiveUser({
        id: user.id,
        email: user.email,
        name: user.name
    });

    EventBus.emit("ACTIVE_USER_CHANGED", user);
}

getUsers();
</script>

<template>
    <q-item 
        v-for="user in users.data" 
        :key="user.id" 
        clickable 
        @click.prevent="storeUser(user)" 
        :class="{ active: store.getUserId === user.id}"
        v-ripple> 
        <!-- class="active" -->
        <q-item-section side>
            <q-avatar rounded size="40px" color="primary" text-color="white">JY</q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-weight-bold user-label">{{ user.name }}</q-item-label>
            <q-item-label class="text-weight-medium user-dob">01.18.1956</q-item-label>
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

.user-label {
  font-size: 16px;
  font-weight: 600;
}

.user-dob {
  color: #6B7280;
}

.active {
  background-color: #fff;
}
.content {
  background-color: #F9FAFB;
  padding: 1rem;
}
</style>
