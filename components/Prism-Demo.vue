<script setup>
    import { onMounted } from 'vue';
    import Prism from "prismjs";
    import "prismjs/themes/prism.min.css";
    import "~/assets/css/dracula.css";

    onMounted(() => {
        Prism.highlightAll();
    });

    const code = `\n
    <CommonAccordion :items="data" :collabsable="true" class="w-[50%] xl:w-1/4">
        <template #content="{ item }">
            <ul 
            class="flex flex-col justify-start gap-2 text-sm"
            v-for="(i, index) in item.items" 
            :key="index" 
            >
                <li>{{ i }}</li>
            </ul>
        </template>
    </CommonAccordion>`
</script>

<template>
    <pre>
        <code class="lang-html">
            <span>{{ code }}</span>;
        </code>
    </pre>
</template>