<script setup>
import { ref } from "vue";
const refTableColumns = ref([
    {
        title: "Name",
        width: 150,
        align: "left",
    },
    {
        title: "Age",
    },
    {
        title: "Address",
        width: 150,
    },
    {
        title: "Tags",
        width: 130,
    },
    {
        title: "Operation",
        width: 100,
        align: "right",
    },
]);
</script>
<template>
    <TableSkeletion :row="10" :columns="refTableColumns" />
</template>
