const h1Habilidade = document.getElementById("h1Habilidade");
const pHabilidade = document.getElementById("pHabilidade");
const iconeHTML = document.getElementById("iconeHTML");
const iconeCSS = document.getElementById("iconeCSS");
const iconeJS = document.getElementById("iconeJS");
const iconeReact = document.getElementById("iconeReact");
const iconeAPI = document.getElementById("iconeAPI");
const iconeGit = document.getElementById("iconeGit");
const iconeGitHub = document.getElementById("iconeGitHub");
const pHTML = document.getElementById("pHTML");
const pReact = document.getElementById("pReact");
const pCSS = document.getElementById("pCSS");
const pJS = document.getElementById("pJS");
const pAPI = document.getElementById("pAPI");
const jsSessao = document.getElementById('jsSessao');
const reactjsSessao = document.getElementById('reactjsSessao');

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
    pHabilidade.style.display = "none"
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

iconeReact.addEventListener("mouseout", () => {
    pReact.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

iconeReact.addEventListener("mouseover", () => {
    pReact.style.display = "block"
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

iconeAPI.addEventListener("mouseover", () => {
    pAPI.style.display = "block"
    pHabilidade.style.display = "none"
    h1Habilidade.style.display = "none"
})

iconeAPI.addEventListener("mouseout", () => {
    pAPI.style.display = "none"
    pHabilidade.style.display = "block"
    h1Habilidade.style.display = "block"
})

jsSessao.addEventListener('click', () => {
    document.getElementById('jsSessaoDiv').classList.remove('sessaoNone');
    document.getElementById('reactSessaoDiv').classList.add('sessaoNone');

    jsSessao.classList.remove('sessaoFechada');
    reactjsSessao.classList.add('sessaoFechada');
})

reactjsSessao.addEventListener('click', () => {
    const reactSessaoDiv = document.getElementById('reactSessaoDiv');

    document.getElementById('jsSessaoDiv').classList.add('sessaoNone');
    reactSessaoDiv.classList.remove('sessaoNone');
    reactSessaoDiv.classList.add('reactSessaoDivAberta');

    jsSessao.classList.add('sessaoFechada');
    reactjsSessao.classList.remove('sessaoFechada');
})

