<script setup>
  // implement createDocumentary method
  import { ref } from 'vue';
  import axios from "axios";
  import { v4 as uuidv4 } from 'uuid';

  defineOptions({
    name: 'Create',
  });

  const documentary = ref({
    id: uuidv4(),
    title: '',
    director: ''
  });
  function createDocumentary() {
    axios.post("http://localhost:5032/api/Documentary", JSON.stringify(documentary.value), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Documentary created:", response.data);
        // Optionally, redirect or show a success message
      })
      .catch(error => {
        console.error("Error creating documentary:", error);
      });
  }
</script>

<template>
  <div>
    <h1>Create Documentary</h1>
    <form @submit.prevent="createDocumentary">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="documentary.title" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="documentary.director" required></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<style scoped>

</style>