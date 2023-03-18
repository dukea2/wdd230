// Today's date //
const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<b>${fulldateUK}</b>`;

// Copyright //
const copyright = document.querySelector('#copyright');
copyright.textContent = `©${new Date().getFullYear()}`;

// Last Updated //
onload = function(){
    document.getElementById("lastUpdated").innerHTML = "Last Modification: " + document.lastModified;
}

// Nav Menu //
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Directory Page //
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");


if (gridbutton) {
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList);
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
}

const url = "json/data.json";

// Fetch from JSON
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businessDirectory);
}

getBusinessData()

// Display
const displayBusinesses = (businessDirectory) => {
    const cards = document.querySelector('article.cards');

    businessDirectory.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a')
        let image = document.createElement('img');

        name.textContent = `${business.name}`;
        name.setAttribute('class', 'name-hidden');

        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;

        website.setAttribute('href', `${business.website}`);
        website.textContent = `${business.webtext}`;
        
        image.setAttribute('src', business.imageurl);
        image.setAttribute('alt', `${business.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}