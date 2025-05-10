<script setup>
</script>

<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/documentaries/list">List</router-link>
        <router-link to="/documentaries/create">Create</router-link>
      </nav>
      <router-view />
    </div>
</template>

<style scoped>

</style>
