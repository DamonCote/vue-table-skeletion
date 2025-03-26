import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TableSkeleton from "./components/table-skeleton";

const app = createApp(App);

app.use(TableSkeleton);

app.mount("#app");
