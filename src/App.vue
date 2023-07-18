<script setup>
import UserList from './components/User/UserList.vue';
import UserDetail from './components/User/UserDetail.vue';
import NoteDashboard from './components/Note/NoteDashboard.vue';

</script>

<template>
  <div class="card">
    <div>
        <div class="row items-start container">
          <div tabindex="0" class="sidebar">
            <UserList />
          </div>

          <div class="content" tabindex="0">
            <div>
              <UserDetail />
              <hr color="#eee" />

              <NoteDashboard />
             
            </div>
          </div>
      </div>
    </div>

    </div>

</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
  background-color: #F9FAFB;
}
.sidebar {
  background-color: #F3F4F6;
  height: 100%; 
}

.card-title {
  font-weight: 600;
}

.active {
  background-color: #fff;
}
.content {
  padding: 1rem;
}

.content .q-container .q-card {
  width: 330px;
}
</style>
