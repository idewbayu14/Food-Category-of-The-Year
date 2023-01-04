import { getCategory, getCategoryFoodByName } from "./function.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) { await getCategoryFoodByName(category); }

await getCategory();