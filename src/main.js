let menuOpen = false
const hamBtn = /**@type {HTMLElement} */ (document.getElementsByClassName("ham-btn")[0])
const bar = /** @type {HTMLCollectionOf<HTMLElement>}*/ (document.getElementsByClassName("bar"));

function menu(){
    if(!menuOpen){
        menuOpen = !menuOpen;
        hamBtn.style.justifyContent = "none"
        bar[0].style.transform = "translateY(8px) rotate(45deg)";
        bar[1].style.transform = "rotate(-45deg)";
        bar[2].style.opacity = "0";

        let content = document.createElement("div");
        content.classList.add("menuContainer");

        const lista = document.createElement("ul");
        lista.classList.add("menuList");
        content.appendChild(lista);

        const Home = document.createElement("li");
        const HomeLink = document.createElement("a");
        HomeLink.innerHTML = "Home";
        HomeLink.href = "index.html";
        Home.appendChild(HomeLink)
        Home.classList.add("menuListElement")

        const Results = document.createElement("li");
        const ResultsLink = document.createElement("a");
        ResultsLink.innerHTML = "Results";
        ResultsLink.href = "results.html";
        Results.appendChild(ResultsLink);
        Results.classList.add("menuListElement")

        const Team = document.createElement("li");
        const TeamLink = document.createElement("a");
        TeamLink.innerHTML = "Team";
        TeamLink.href = "team.html";
        Team.appendChild(TeamLink)
        Team.classList.add("menuListElement")

        const Car = document.createElement("li");
        const CarLink = document.createElement("a");
        CarLink.innerHTML = "Car";
        CarLink.href = "car.html";
        Car.appendChild(CarLink)
        Car.classList.add("menuListElement")

        const Partners = document.createElement("li");
        const PartnersLink = document.createElement("a");
        PartnersLink.innerHTML = "Partners";
        PartnersLink.href = "partners.html";
        Partners.appendChild(PartnersLink)
        Partners.classList.add("menuListElement")

        lista.appendChild(Home)
        lista.appendChild(Results)
        lista.appendChild(Team)
        lista.appendChild(Car)
        lista.appendChild(Partners)

        

        content.style.left = "-100%"
        content.style.transition = "left 0.5s ease";
        document.body.appendChild(content)
        setTimeout(() => {
            content.style.left = "0"
        }, 50);
    }
    else{
        menuOpen = !menuOpen;
        bar[0].style.transform = "";
        bar[1].style.transform = "";
        bar[2].style.opacity = "1"

        const content = /**@type {HTMLElement} */ (document.getElementsByClassName("menuContainer")[0])
        content.style.left = "-100%"
        setTimeout(()=>{
            document.body.removeChild(content)
        }, 550)
    }
}

hamBtn.addEventListener("click", ()=>menu())

const langButton = document.getElementById("lang-button");
const settingButton = /**@type {HTMLElement} */(document.getElementsByClassName("settings-buttons")[0]);
const logoImg = document.getElementById("logo-img");
const initialFlag = document.createElement("img");

function setInitialFlag(){
    let language = navigator.language.split("-")[0];
    switch(language){
        case "it": {
            language = "it";
            initialFlag.src = "img/flag/italy.png"
            break;
        }
        default : {
            language = "en";
            initialFlag.src = "img/flag/england.jpg"
        };
    }
    initialFlag.classList.add("lang");
    langButton.appendChild(initialFlag)
}
setInitialFlag();

/** @param {String} src */
function setFlag(src){
    const selectedFlag = document.createElement("img");
    selectedFlag.classList.add("lang");
    selectedFlag.src = src;

    while(langButton.firstChild){
        langButton.removeChild(langButton.firstChild);
    }
    langButton.appendChild(selectedFlag)

    settingButton.classList.remove("open")
    langButton.classList.remove("open")
    logoImg.classList.remove("open")

    langButton.style.transition = "background-color 0.3s ease, width 0.5s ease, border-radius 0.1s ease-out"
    setTimeout(()=>{langButton.style.borderRadius = "60%"}, 500);

    setTimeout(()=>{langButton.addEventListener("click", openLangMenu)}, 350);
}

function openLangMenu(){
    settingButton.classList.add("open")
    langButton.classList.add("open");
    logoImg.classList.add("open");

    while(langButton.firstChild){
        langButton.removeChild(langButton.firstChild);
    }
    langButton.style.transition = "background-color 0.3s ease, width 0.5s ease"
    langButton.style.borderRadius = "0"

    const italy = document.createElement("img");
    italy.src = "img/flag/italy.png";
    italy.classList.add("lang");
    italy.addEventListener("click", ()=>{setFlag(italy.src)})

    const england = document.createElement("img");
    england.src = "img/flag/england.jpg";
    england.classList.add("lang");
    england.addEventListener("click", ()=>setFlag(england.src))

    const china = document.createElement("img");
    china.src = "img/flag/china.jpg";
    china.classList.add("lang");
    china.addEventListener("click", ()=>setFlag(china.src))

    langButton.appendChild(italy);
    langButton.appendChild(england);
    langButton.appendChild(china);

    langButton.removeEventListener("click", openLangMenu);

}

langButton.addEventListener("click", openLangMenu);