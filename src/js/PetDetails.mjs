function petsDetailTemplate(pet){
    return `
    <div>
      <img src="${pet.image}" alt="picture of ${pet.name}">
      <p>Name: ${pet.name}</p>
      <p>Birthday: ${pet.birthday}</p>
      <p>Sex: ${pet.sex}</p>
      <p>Breed: ${pet.breed}</p>
    </div>
    `
}

export default class PetDetails{
    constructor(pet, element){
        this.pet = pet;
        this.element = element;
    }

    async init(){
        const data = this.pet;

        this.renderPetDetails(data);
    }

    renderPetDetails(pet){
        const htmlString = petsDetailTemplate(pet)
        this.element.insertAdjacentHTML("afterbegin", htmlString);
    }
}