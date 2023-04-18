const h1Habilidade = document.getElementById("h1Habilidade");
const pHabilidade = document.getElementById("pHabilidade");
const iconeHTML = document.getElementById("iconeHTML");
const iconeCSS = document.getElementById("iconeCSS");
const iconeJS = document.getElementById("iconeJS");
const iconeGit = document.getElementById("iconeGit");
const iconeGitHub = document.getElementById("iconeGitHub");
const pHTML = document.getElementById("pHTML");
const pCSS = document.getElementById("pCSS");
const pJS = document.getElementById("pJS");
const inputMudaIdioma = document.getElementById('inputMudaIdioma');

iconeHTML.addEventListener("mouseover", () => {
    pHTML.style.display = "inline"
    pHabilidade.style.display = "none"
    h1Habilidade.style.display = "none"
})

iconeHTML.addEventListener("mouseout", () => {
    pHTML.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

iconeCSS.addEventListener("mouseover", () => {
    pCSS.style.display = "block"
    Habilidade.style.display = "none"
    h1Habilidade.style.display = "none"
})

iconeCSS.addEventListener("mouseout", () => {
    pCSS.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

iconeJS.addEventListener("mouseover", () => {
    pJS.style.display = "block"
    pHabilidade.style.display = "none"
    h1Habilidade.style.display = "none"
})

iconeJS.addEventListener("mouseout", () => {
    pJS.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

iconeGit.addEventListener("mouseover", () => {
    pGit.style.display = "block"
    pHabilidade.style.display = "none"
    h1Habilidade.style.display = "none"
})

iconeGit.addEventListener("mouseout", () => {
    pGit.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

iconeGitHub.addEventListener("mouseover", () => {
    pGitHub.style.display = "block"
    pHabilidade.style.display = "none"
    h1Habilidade.style.display = "none"
})

iconeGitHub.addEventListener("mouseout", () => {
    pGitHub.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

inputMudaIdioma.addEventListener('click', () => {
    const span = document.getElementsByClassName('span');

    span.style.display ='inline-block';
})