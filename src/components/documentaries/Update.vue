<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import axios from "axios";

defineOptions({
  name: 'Update',
});

const route = useRoute();
const router = useRouter();
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

function updateDocumentary() {
  axios.put(`http://localhost:5032/api/Documentary/${documentary.value.id}`, JSON.stringify(documentary.value), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(response => {
        console.log("Documentary updated:", response.data);
        // Optionally, redirect or show a success message
        router.push("/documentaries/view/" + documentary.value.id);
      })
      .catch(error => {
        console.error("Error updating documentary:", error);
      });
}
</script>

<template>
  <div>
    <h1>Update Documentary</h1>
    <p v-if="error">{{ error }}</p>
    <div v-else-if="documentary">
      <form @submit.prevent="updateDocumentary">
        <div>
          <p>ID: {{documentary.id}}</p>
        </div>
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="documentary.title" required />
        </div>
        <div>
          <label for="description">Director:</label>
          <input type="text" id="description" v-model="documentary.director" required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>