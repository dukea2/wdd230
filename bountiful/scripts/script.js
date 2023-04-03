// Nav Menu //
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Copyright //
const copyright = document.querySelector('#copyright');
copyright.textContent = `©${new Date().getFullYear()}`;

// Last Updated //
onload = function(){
    document.getElementById("lastUpdated").innerHTML = "Last Modification: " + document.lastModified;
}