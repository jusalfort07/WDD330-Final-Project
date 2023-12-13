// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderWithTemplate(template, parentElement, data, callback,  position = "afterbegin"){
  parentElement.insertAdjacentHTML(position, template);

  if (callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path);
  const template = await html.text();
  return template;
} 

export async function loadPartials() {
  const headerTemplate = await loadTemplate("../partials/header.html")
  const footerTemplate = await loadTemplate("../partials/footer.html")
  const navTemplate = await loadTemplate("../partials/navigation.html")

  const headerElement = document.querySelector("#header");
  const footerElement = document.querySelector("#footer");
  const navElement = document.querySelector("#navigation")

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
  renderWithTemplate(navTemplate, navElement)
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);

  return product;
}

async function convertToJson(res) {
  var data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw {name: "servicesError", message: data };
  }
}

export async function getPets(category){
  const pets = await fetch(`../json/${category}.json`);
  const data = await convertToJson(pets);

  return data.Result;
}