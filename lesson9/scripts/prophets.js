const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data,prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('p');
        let death = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        death.textContent = `Date of Death: ${prophet.death}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '400');

        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(death);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}