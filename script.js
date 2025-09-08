const allButton = document.querySelector(".all_btn");
const activeButton = document.querySelector(".active_btn");
const inactiveButton = document.querySelector(".inactive_btn");
const extensionsList = document.getElementById("extensions-list");
const buttonTheme = document.getElementById("change-theme");
const changeTheme = localStorage.theme;
let extensions = [];

// Pour récupérer les données du data.json
const fetchExtensions = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Impossible de récupérer les données:", error);
  }
};

// Les éléments qui s'affichent dynamiquement dans le HTML
function displayExtensions(extensions) {
  extensionsList.innerHTML = "";
  extensions.forEach((extension) => {
    const element = document.createElement("div");
    element.classList.add("elements");
    element.dataset.name = extension.name;

    element.innerHTML = `
      <div class="extensions-elements">
        <img src="${extension.logo}" alt="${extension.name}">
        <div class="extensions-infos">
          <div class="name">${extension.name}</div>
          <div class="infos"><p>${extension.description}</p></div>
        </div>
       </div>
        <div class="actions">
         <button class="remove">Remove</button>
        <label class="switch">
         <input type="checkbox">
         <span class="check round"></span>
        </label>
        </div>
      </div>`;
    extensionsList.appendChild(element);
  });
}

// Affiche les données du displayExtensions sur la page
fetchExtensions().then((data) => {
  if (data) {
    extensions = data;
    displayExtensions(extensions);
  }
});
