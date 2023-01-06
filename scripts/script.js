const copyright = document.querySelector('#copyright');
copyright.textContent = `© ${new Date().getFullYear()}`;

onload = function(){
    document.getElementById("lastUpdated").innerHTML = "Last Updated " + document.lastModified;
}