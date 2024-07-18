<script setup>
    const selectedDate = ref(new Date());
    const disabledDates = ref([]);

    const disableDate = (date) => {
        disabledDates.value.push(date);
    }
</script>

<template>
    <div class="container">
        <div class="form-container">
            <h1>Pick date to disable</h1>
            <DatePicker @update:model-value="(newDate) => disableDate(newDate)" />
        </div>
        <div class="selected-dates-container">
            <span v-for="(date, index) in disabledDates" :key="index">{{ date }}</span>
        </div>
        <div>
            <DatePicker @update:model-value="(newDate) => selectedDate = newDate" :disabled-dates="disabledDates" />
            <h1>Selected date: {{ selectedDate }}</h1>
        </div>
    </div>
    
</template>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form-container {
        margin: 20px 0px;
    }

    .selected-dates-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 20px 0px;
    }

    .selected-dates-container span {
        margin-left: 10px;
    }
</style>