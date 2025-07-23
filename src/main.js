let menuOpen = false

const hamBtn = document.getElementsByClassName("ham-btn")[0]
function menu(){
    if(!menuOpen){
        menuOpen = !menuOpen;
        let bar = document.getElementsByClassName("bar");
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

        const Journey = document.createElement("li");
        const JourneyLink = document.createElement("a");
        JourneyLink.innerHTML = "Journey";
        JourneyLink.href = "index.html";
        Journey.appendChild(JourneyLink)
        Journey.classList.add("menuListElement")

        const Team = document.createElement("li");
        const TeamLink = document.createElement("a");
        TeamLink.innerHTML = "Team";
        TeamLink.href = "index.html";
        Team.appendChild(TeamLink)
        Team.classList.add("menuListElement")

        const Car = document.createElement("li");
        const CarLink = document.createElement("a");
        CarLink.innerHTML = "Car";
        CarLink.href = "index.html";
        Car.appendChild(CarLink)
        Car.classList.add("menuListElement")

        const Partners = document.createElement("li");
        const PartnersLink = document.createElement("a");
        PartnersLink.innerHTML = "Partners";
        PartnersLink.href = "index.html";
        Partners.appendChild(PartnersLink)
        Partners.classList.add("menuListElement")

        lista.appendChild(Home)
        lista.appendChild(Journey)
        lista.appendChild(Team)
        lista.appendChild(Car)
        lista.appendChild(Partners)

        

        content.style.left = "-100%"
        content.style.transition = "left 0.5s ease";
        document.body.appendChild(content)
        setTimeout(() => {
            content.style.left = "0"
        }, 0.5);
    }
    else{
        menuOpen = !menuOpen;
        let bar = document.getElementsByClassName("bar");
        bar[0].style.transform = "";
        bar[1].style.transform = "";
        bar[2].style.opacity = "1"

        content = document.getElementsByClassName("menuContainer")[0]
        content.style.left = "-100%"
        setTimeout(()=>{
            document.body.removeChild(content)
        }, 550)
    }
}

function setFlag(){
    let language = navigator.language.split("-")[0]
    const langBtn = document.getElementById("lang")
    switch(language){
        default : {
            language = "en-EN";
            langBtn.src = "img/flag/italy.png"
        };
    }
}

setFlag();

hamBtn.addEventListener("click", ()=>{menu()})
