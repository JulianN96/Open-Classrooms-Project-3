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

function filterDisplay(worksData, id){
  const gallery = document.querySelector(".gallery");
  let cards = "";
  worksData.forEach((work) => {
    if(work.categoryId == id){
      cards += `
      <figure class="work category${work.categoryId}">
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
      </figure>
      `
    } 
    gallery.innerHTML = cards;

  })
}

export default {
    displayWorks,
    filterDisplay
}
