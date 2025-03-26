<script setup>
const props = defineProps({
    columns: {
        type: Array,
        required: true,
    },
    row: {
        type: Number,
        default: 20,
    },
});

const getStyle = (attrs) => {
    const { width, align = "left", maxWidth, minWidth } = attrs;
    const arrayStyles = [];
    if (width) {
        arrayStyles.push(`width:${width}px`);
    }
    if (maxWidth) {
        arrayStyles.push(`max-width:${maxWidth}px`);
    }
    if (minWidth) {
        arrayStyles.push(`min-width:${minWidth}px`);
    }
    if (align) {
        arrayStyles.push(`text-align:${align}`);
    }
    return arrayStyles.join(";");
};
</script>
<script>
export default {
    name: "TableSkeletion",
};
</script>
<template>
    <table class="table-skeleton" :class="theme">
        <thead>
            <tr>
                <th
                    v-for="column in columns"
                    :key="column.title"
                    :style="getStyle(column)"
                >
                    {{ column.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="trIndex in row" :key="trIndex">
                <td v-for="cell_index in columns.length" :key="cell_index">
                    <div class="table-skeleton__cell"></div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style lang="css" scoped>
.table-skeleton {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background: #ffffff;
}
.table-skeleton__cell {
    width: 100%;
    height: 16px;
    background-color: #686b8229;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    border-radius: 4px;
}
.table-skeleton thead tr th {
    padding: 10px;
    font-size: 12px;
    background-color: rgba(104, 107, 130, 0.04);
    color: #686b82;
    border-bottom: 1px solid #f0f0f0;
}
table.table-skeleton {
    width: 100%;
    border-collapse: collapse;
}
.table-skeleton tbody tr td {
    padding: 10px;
}
.table-skeleton tbody tr:nth-child(2n) {
    background-color: #f9f9f9;
}
@keyframes pulse {
    50% {
        opacity: 0.5;
    }
}
</style>
