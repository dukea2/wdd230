const directoryURL = "json/data.json";

async function getDirectoryData() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayDirectory(data.businessDirectory);
}

getDirectoryData()

const displayDirectory = (businessDirectory) => {
    const spotlights = document.querySelector('section.spotlights');

    businessDirectory.forEach((business) => {
        if (business.level == 'silver') {
            let card = document.createElement('section');
            let logo = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');

            logo.setAttribute('src', business.imageurl);
            logo.setAttribute('alt', `${business.name} logo`);
            logo.setAttribute('width', '350');

            address.textContent = `${business.address}`;
            phone.textContent = `${business.phone}`;
            website.setAttribute('href', `${business.website}`);
            website.textContent = `${business.webtext}`;

            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);

            spotlights.appendChild(card);
        }
    })
}