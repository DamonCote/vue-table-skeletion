import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TableSkeletion from "./components/table-skeletion";

const app = createApp(App);

app.use(TableSkeletion);

app.mount("#app");
