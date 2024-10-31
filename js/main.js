function loadHeaderFooter(){
    fetch("components/header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);
}


function loadPage(page){
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => document.getElementById("content").innerHTML = data);
}

function initializePage(){
    loadHeaderFooter();

    const page = window.location.hash ? window.location.hash.substring(1) : "home";
    if(!window.location.hash){
        window.location.hash = "home";
    }
    loadPage(page);

    window.addEventListener("hashchange", () =>{
        const newPage = window.location.hash.substring(1);
        loadPage(newPage);
    }); 
}

document.addEventListener("DOMContentLoaded", initializePage);

console.log('está funcionando');
