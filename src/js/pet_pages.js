import petList from "./pet-list.mjs";
import { getParams, getPets } from "./utils.mjs";

const category = getParams("category");
const listElement = document.querySelector(".pet-list");
getPets(category).then(list => {
    const pets = new petList(list, listElement)

    pets.init()
})
