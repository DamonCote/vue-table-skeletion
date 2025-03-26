import Table from "./table/index.vue";

export { Table };

const component = [Table];

const TableSkeleton = {
    install(Vue) {
        component.forEach((item) => {
            Vue.component(item.name, item);
        });
    },
};

export default TableSkeleton;
