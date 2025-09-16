const extensionsList = document.getElementById("extensions-list");
let extensions = [];

// Pour récupérer les données du data.json
const fetchExtensions = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur:", error);
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
          <div class="name"><h2>${extension.name}</h2></div>
          <div class="infos"><p>${extension.description}</p></div>
        </div>
       </div>
        <div class="actions">
         <button class="remove"><span>Remove</span></button>
        <label class="switch">
         <input type="checkbox">
         <span class="check round"></span>
        </label>
        </div>
      </div>`;
    extensionsList.appendChild(element);

    // Pour supprimer un élément

    element.querySelector(".remove").addEventListener("click", function () {
      element.remove();
    });
  });
}

// données du displayExtensions sur la page
fetchExtensions().then((data) => {
  if (data) {
    extensions = data;
    displayExtensions(extensions);
  }
});

// ----- DARKMODE ----- //

const buttonTheme = document.getElementById("change-theme");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

buttonTheme.addEventListener("click", () => {
  const changeTheme = localStorage.getItem("darkmode");
  changeTheme !== "active" ? enableDarkmode() : disableDarkmode();
});

// ----- active + inactive buttons ----- //

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active-btn")) {
      button.classList.remove("active-btn");
    } else {
      document.querySelector(".active-btn")?.classList.remove("active-btn");
      button.classList.add("active-btn");
    }
  });
});
