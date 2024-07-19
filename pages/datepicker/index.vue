<script setup>
    const selectType = ref('single');
    const selectedDate = ref(new Date());
    const disabledDates = ref([]);

    const disableDate = (date) => {
        disabledDates.value.push(date);
    }
</script>

<template>
    <div class="container">
        <div class="form-container">
            <select v-model="selectType">
                <option value="single">Single</option>
                <option value="multi">Multi</option>
            </select>
            <h1>Pick dates to disable</h1>
            <DatePicker v-if="selectType === 'single'" @update:model-value="(newDate) => disableDate(newDate)" />
            <DatePicker v-else :multi-dates="true" @update:model-value="(newDates) => disabledDates = newDates" :max-number-of-dates="6" />
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