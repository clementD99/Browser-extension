const allButton = document.querySelector(".all_btn");
const activeButton = document.querySelector(".active_btn");
const inactiveButton = document.querySelector(".inactive_btn");
const extensionsList = document.querySelector(".extensions-list");
let extensions = [];

// Pour récupérer les données du data.json //

const fetchExtensions = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    extensions = data;
  } catch (error) {
    console.error("Impossible de récupérer les données:", error);
  }
};
