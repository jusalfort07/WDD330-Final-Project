function renderPetsTemplate(data){
    return `
    <div class="pet-container">
      <img src="${data.image}" alt="image of ${data.name}">
      <h2>${data.name}</h2>
    </div>
    `;
}

export default class petList {
    constructor(data, listElement){
        this.data = data;
        this.listElement = listElement;

    }

    async init() {
        const list = this.data;

        this.renderList(list)
    }

    renderList(list) {
        const htmlStrings = list.map(renderPetsTemplate);
        this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
    }
}