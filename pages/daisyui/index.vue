<script setup>
</script>

<template>
    <div class="flex flex-col items-center justify-center p-8">
        <div class="flex flex-col justify-start p-4">
            <h1>Cards</h1>
            <div class="flex flex-wrap gap-5 mt-5">
                <DaisyCard v-for="index in 6" :key="index" />
            </div>
        </div>
    </div>
</template>
