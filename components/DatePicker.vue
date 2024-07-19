<script setup>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    const emits = defineEmits(['update:modelValue']);

    const props = defineProps({
        disabledDates: {
            type: Array,
            default: () => []
        },
        maxNumberOfDates: {
            type: Number,
            default: 1
        },
        multiDates: {
            type: Boolean,
            default: false
        },
    });

    const date = ref(new Date());
    const dates = ref([]);

    watch(date, (newDate) => {
        if(date !== newDate) {
            emits('update:modelValue', newDate);
        }
    });

    watch(dates, (newDates) => {
        if(dates !== newDates) {
            emits('update:modelValue', newDates);
        }
    });
</script>

<template>
    <VueDatePicker v-if="multiDates" v-model="dates" :disabled-dates="disabledDates" :multi-dates="{ limit: maxNumberOfDates }" />
    <VueDatePicker v-else v-model="date" :disabled-dates="disabledDates" />
</template>