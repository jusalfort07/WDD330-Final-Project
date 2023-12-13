import PetDetails from "./PetDetails.mjs";
import { loadPartials } from "./utils.mjs";
import { getPetsById } from "./utils.mjs";
import { getParams } from "./utils.mjs";

loadPartials();

const category = getParams("category");
const petId = getParams("id");
const element = document.querySelector(".pet-detail-container")
getPetsById(category, petId).then(pet => {
    const details = new PetDetails(pet, element);

    details.init()
});
