<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(parseInt(route.params.id));
const name = ref(route.query.name);

watch(
    () => route.query.name,
    (newName) => {
        name.value = newName;
        console.log("New query value", newName);
    },
);

</script>

<template>
    <div class="flex flex-col justify-start gap-3">
        <button @click="$router.push({ path: `/nuxt/${1}`, query: { name: 'test' } })">
            test
        </button>
        <div class="flex flex-col items-center justify-center mb-4">
            id: {{ id }}
            name: {{ name }}
        </div>
    </div>
</template>
