<script setup>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    const emits = defineEmits(['update:modelValue']);

    const props = defineProps({
        disabledDates: {
            type: Array,
            default: () => []
        }
    });

    const date = ref(new Date());

    watch(date, (newDate) => {
        if(date !== newDate) {
            emits('update:modelValue', newDate);
        }
    });
</script>

<template>
     <VueDatePicker v-model="date" :disabled-dates="disabledDates" />
</template>