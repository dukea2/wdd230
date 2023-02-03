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