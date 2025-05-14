<script setup>
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from "axios";

defineOptions({
  name: 'Delete',
});

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const error = ref(null);

onMounted(async() => {
  try {
    const response = await axios.delete(`http://localhost:5032/api/Documentary/${id}`);
    console.log(response);
    if (response.status === 204) {
      // redirect to list page
      await router.push("/documentaries/list?deleted=true");
    }
  } catch (err) {
    error.value = "Failed to fetch documentary";
  }
});
</script>

<template>

</template>

<style scoped>

</style>