<script setup>
import  { ref, onMounted } from 'vue';
import axios from "axios";

defineOptions({
  name: 'List',
});

const documentaries = ref([]);
const error = ref(null);

onMounted(async() => {
  try {
    const response = await axios.get("http://localhost:5032/api/Documentary");
    documentaries.value = response.data;
  } catch (err) {
    error.value = "Failed to fetch documentaries";
  }
})
</script>

<template>
  <div>
    <h1>Documentaries List</h1>
    <p>This is the documentaries listing page</p>
    <p v-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="doc in documentaries" :key="doc.id">
        <h2>{{ doc.title }}</h2>
        <h3>{{ doc.id }}</h3>
        <p>{{ doc.director }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>