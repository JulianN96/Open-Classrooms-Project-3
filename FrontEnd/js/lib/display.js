function displayWorks(worksData) {
  const gallery = document.querySelector(".gallery");
  let cards = "";
  worksData.forEach((work) => {
    cards += `
    <figure class="work category${work.categoryId}">
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
    </figure>
    `;
  });
  gallery.innerHTML = cards;
}

function filterDisplay(worksData, id) {
  const gallery = document.querySelector(".gallery");
  let cards = "";
  worksData.forEach((work) => {
    if (work.categoryId == id) {
      cards += `
      <figure class="work category${work.categoryId}">
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
      </figure>
      `;
    }
    gallery.innerHTML = cards;
  });
}

function displayModifyModal(worksData) {
  let modifyModal = document.getElementById("modifyModal");
  modifyModal.style.display = "block";
  let modifyModalContent = document.querySelector(".modifyModal__content");
  modifyModalContent.innerHTML = `
      <svg class="modifyModal__close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
      </svg>
      <h2>Galerie photo</h2>
      <div class="modifyModal__gallery"></div>
      <div class="modifyModal__divider"></div>
      <button class="modifyModal__button">Ajouter une photo</button>
      <button class="modifyModal__deleteGallery">Supprimer la galerie</button>`;

  const gallery = document.querySelector(".modifyModal__gallery");
  let cards = "";
  worksData.forEach((work) => {
    cards += `
        <figure class="work category${work.categoryId}">
            <div class="modifyModal__workContainer">
                <img src="${work.imageUrl}" alt="${work.title}">
                <div class="modifyModal__figureDelete" id="${work.id}">
                    <svg class="modifyModal__figureTrash" xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                        <path d="M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z" fill="white"/>
                    </svg>
                </div>
                <figcaption>éditer</figcaption>
            </div>
        </figure>
        `;
  });
  gallery.innerHTML = cards;
}

function displayAddModal() {
  let modifyModalContent = document.querySelector(".modifyModal__content");
  modifyModalContent.innerHTML = `
      <div class="modifyModal__topIcons">
        <svg class="modifyModal__back" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z" fill="black"/>
        </svg>
        <svg class="modifyModal__close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
        </svg>
      </div>
      <h2 class="modifyModal__imageAddTitle">Ajout photo</h2>
      <form class="modifyModal__form">
        <div class="addModal__input">
          <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
              <path d="M57 6H1C0.448 6 0 6.447 0 7V51C0 51.553 0.448 52 1 52H57C57.552 52 58 51.553 58 51V7C58 6.447 57.552 6 57 6ZM56 50H2V8H56V50Z" fill="#B9C5CC"/>
              <path d="M16 28.138C19.071 28.138 21.569 25.64 21.569 22.57C21.569 19.498 19.071 17 16 17C12.929 17 10.431 19.498 10.431 22.569C10.431 25.64 12.929 28.138 16 28.138ZM16 19C17.968 19 19.569 20.602 19.569 22.569C19.569 24.536 17.968 26.138 16 26.138C14.032 26.138 12.431 24.537 12.431 22.57C12.431 20.603 14.032 19 16 19Z" fill="#B9C5CC"/>
              <path d="M7.00004 46C7.23404 46 7.47004 45.918 7.66004 45.751L23.973 31.389L34.275 41.69C34.666 42.081 35.298 42.081 35.689 41.69C36.08 41.299 36.08 40.667 35.689 40.276L30.882 35.469L40.063 25.415L51.324 35.738C51.731 36.111 52.364 36.083 52.737 35.676C53.11 35.269 53.083 34.636 52.675 34.263L40.675 23.263C40.479 23.084 40.218 22.995 39.955 23.001C39.69 23.013 39.44 23.13 39.261 23.326L29.467 34.053L24.724 29.31C24.35 28.937 23.752 28.918 23.356 29.266L6.33904 44.249C5.92404 44.614 5.88404 45.246 6.24904 45.661C6.44704 45.886 6.72304 46 7.00004 46Z" fill="#B9C5CC"/>
          </svg>  
          <label for="image" class="modifyModal__imageAddRules">jpg, png : 4mo max</label>
          <input 
            value="Ajouter +"
            class="modifyModal__imageAddContainer addModalField" 
            type="file" 
            accept="image/png, image/jpg, image/jpeg" 
            name="image"
            required
          />
        </div>
          <label class="addModal__label" for="title">Titre</label>
          <input type="text" class="addModal__title addModalField" name="title" required>
          <label class="addModal__label" for="category" >Catégorie</label>
          <select class="addModal__category addModalField" name="category" required>
            <option class="disabledOption" disabled selected value></option>
            <option value=1>Objets</option>
            <option value=2>Appartements</option>
            <option value=3>Hotels & Restaurants</option>
          </select>
          <button class="modifyModal__formButton" disabled>Valider</button>
          </form>
          <div class="modifyModal__formDivider></div>
  `;
}

function displayEditMode() {
  const editTopBar = document.querySelector(".editTopBar");
  const modifyProjectButtons = document.querySelector(
    ".modifyProject__container"
  );
  const loginButton = document.getElementById("loginButton");
  const body = document.querySelector("body")

  body.classList.add("body__margin-top")

  editTopBar.innerHTML = `
    <div class="editTopBar__container">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.5229 1.68576L13.8939 2.05679C14.1821 2.34503 14.1821 2.81113 13.8939 3.0963L13.0016 3.99169L11.5879 2.57808L12.4803 1.68576C12.7685 1.39751 13.2346 1.39751 13.5198 1.68576H13.5229ZM6.43332 7.73578L10.5484 3.61759L11.9621 5.03121L7.84387 9.14633C7.75494 9.23525 7.64455 9.29964 7.52496 9.33337L5.73111 9.84546L6.2432 8.05162C6.27693 7.93203 6.34133 7.82164 6.43025 7.73271L6.43332 7.73578ZM11.4408 0.646245L5.39074 6.6932C5.12397 6.95998 4.93078 7.28808 4.82959 7.64685L3.9526 10.7133C3.879 10.9708 3.94953 11.2468 4.13965 11.4369C4.32977 11.627 4.60574 11.6976 4.86332 11.624L7.92973 10.747C8.29156 10.6427 8.61967 10.4495 8.88338 10.1858L14.9334 4.13888C15.7951 3.27722 15.7951 1.87894 14.9334 1.01728L14.5624 0.646245C13.7007 -0.215415 12.3024 -0.215415 11.4408 0.646245ZM2.69844 1.84214C1.20816 1.84214 0 3.05031 0 4.54058V12.8812C0 14.3715 1.20816 15.5796 2.69844 15.5796H11.0391C12.5293 15.5796 13.7375 14.3715 13.7375 12.8812V9.44683C13.7375 9.039 13.4094 8.71089 13.0016 8.71089C12.5937 8.71089 12.2656 9.039 12.2656 9.44683V12.8812C12.2656 13.5589 11.7167 14.1078 11.0391 14.1078H2.69844C2.02076 14.1078 1.47188 13.5589 1.47188 12.8812V4.54058C1.47188 3.86291 2.02076 3.31402 2.69844 3.31402H6.13281C6.54065 3.31402 6.86875 2.98591 6.86875 2.57808C6.86875 2.17025 6.54065 1.84214 6.13281 1.84214H2.69844Z" fill="white"/>
      </svg>
      <p class="editTopBar__text">Mode édition</p>
      <button class="editTopBar__button">Publier les changements</button>
    </div>
  `;

  modifyProjectButtons.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.5229 1.68576L13.8939 2.05679C14.1821 2.34503 14.1821 2.81113 13.8939 3.0963L13.0016 3.99169L11.5879 2.57808L12.4803 1.68576C12.7685 1.39751 13.2346 1.39751 13.5198 1.68576H13.5229ZM6.43332 7.73578L10.5484 3.61759L11.9621 5.03121L7.84387 9.14633C7.75494 9.23525 7.64455 9.29964 7.52496 9.33337L5.73111 9.84546L6.2432 8.05162C6.27693 7.93203 6.34133 7.82164 6.43025 7.73271L6.43332 7.73578ZM11.4408 0.646245L5.39074 6.6932C5.12397 6.95998 4.93078 7.28808 4.82959 7.64685L3.9526 10.7133C3.879 10.9708 3.94953 11.2468 4.13965 11.4369C4.32977 11.627 4.60574 11.6976 4.86332 11.624L7.92973 10.747C8.29156 10.6427 8.61967 10.4495 8.88338 10.1858L14.9334 4.13888C15.7951 3.27722 15.7951 1.87894 14.9334 1.01728L14.5624 0.646245C13.7007 -0.215415 12.3024 -0.215415 11.4408 0.646245ZM2.69844 1.84214C1.20816 1.84214 0 3.05031 0 4.54058V12.8812C0 14.3715 1.20816 15.5796 2.69844 15.5796H11.0391C12.5293 15.5796 13.7375 14.3715 13.7375 12.8812V9.44683C13.7375 9.039 13.4094 8.71089 13.0016 8.71089C12.5937 8.71089 12.2656 9.039 12.2656 9.44683V12.8812C12.2656 13.5589 11.7167 14.1078 11.0391 14.1078H2.69844C2.02076 14.1078 1.47188 13.5589 1.47188 12.8812V4.54058C1.47188 3.86291 2.02076 3.31402 2.69844 3.31402H6.13281C6.54065 3.31402 6.86875 2.98591 6.86875 2.57808C6.86875 2.17025 6.54065 1.84214 6.13281 1.84214H2.69844Z" fill="black"/>
    </svg>
    <p class="modifyProject__text">Modifier</p>
  `;

  loginButton.innerHTML = `logout`;
}

export default {
  displayWorks,
  filterDisplay,
  displayModifyModal,
  displayAddModal,
  displayEditMode,
};
