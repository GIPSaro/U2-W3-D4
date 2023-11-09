const apiKey = "ebdhhz7wgCVwtzAx5qYxqIaynOvU5qHLnp4hnwsSaRco5yVCwcIHkZCh";
const url = "https://api.pexels.com/v1/search?query=cat";
const url2 = "https://api.pexels.com/v1/search?query=landscape";
const url3 = "https://api.pexels.com/v1/search?query=horses";

const photoContainer = document.getElementById("photoContainer");
const loadBtn1 = document.getElementById("btn1");
const loadBtn2 = document.getElementById("btn2");

window.onload = function () {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: apiKey
    }
  })
    .then((raw) => {
      return raw.json();
    })
    .then((dati) => {
      displayImages(dati.photos);
      console.log(dati);
    });
};

//creo le cards

function displayImages(images) {
  images.forEach((image) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer", "col-md-4");

    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "shadow-sm");

    const imgContainer = document.createElement("div");

    imgContainer.classList.add("d-flex", "justify-content-center");

    const imgAnchor = document.createElement("a");
    imgAnchor.href = "./Detail-template.html";

    const img = document.createElement("img");
    img.className = "card-body";
    img.src = image.src.small;
    img.alt = img.alt;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titleAnchor = document.createElement("a");
    titleAnchor.href = "./Detail-template.html";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = image.photographer;

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent =
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer";

    const cardSection = document.createElement("div");
    cardSection.classList.add(
      "cardSection",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "btn-group";

    const button1 = document.createElement("button");
    button1.type = "button";
    button1.classList.add("btn", "btn-sm", "btn-outline-secondary");
    button1.textContent = "View";

    const button2 = document.createElement("button");
    button2.type = "button";
    button2.classList.add("btn", "btn-sm", "btn-outline-secondary");
    button2.textContent = "Hide";

    const hideMinuts = document.createElement("small");
    hideMinuts.className = "text-muted";
    hideMinuts.textContent = image.id;

    //appendo gli elementi nel Dom

    cardContainer.appendChild(card);
    card.appendChild(imgContainer);
    imgContainer.appendChild(imgAnchor);
    imgAnchor.appendChild(img);
    titleAnchor.appendChild(title);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(cardSection);
    cardSection.appendChild(buttonContainer);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    cardSection.appendChild(hideMinuts);
    photoContainer.appendChild(cardContainer);
  });
}
