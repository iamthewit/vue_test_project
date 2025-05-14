<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from "axios";

defineOptions({
  name: 'View',
});

const route = useRoute();
const documentary = ref(null);
const error = ref(null);

onMounted(async() => {
  const id = route.params.id;
  try {
    const response = await axios.get(`http://localhost:5032/api/Documentary/${id}`);
    documentary.value = response.data;
  } catch (err) {
    error.value = "Failed to fetch documentary";
  }
});
</script>

<template>
  <div>
    <h1>Documentary Details</h1>
    <p v-if="error">{{ error }}</p>
    <div v-else-if="documentary">
      <h2>ID: {{ documentary.id }}</h2>
      <h3>Title: {{ documentary.title }}</h3>
      <h4>Director: {{ documentary.director }}</h4>
      <div>
        <router-link :to="`/documentaries/update/${documentary.id}`">Update</router-link>
<!--        <router-link :to="`/documentaries/delete/${documentary.id}`">Delete</router-link>-->
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>

</style>