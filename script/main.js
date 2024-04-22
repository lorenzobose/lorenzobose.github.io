const body =  document.body;

//aside Menù
const aside = document.createElement("aside");
aside.id="aside";


//Hamburgher Menù
const container = document.createElement("div");
container.id = "container";

const button = document.createElement("div");
button.id="button";

const input = document.createElement("input");
input.type = "checkbox";
input.id = "_checkbox";
input.checked = false;

const label = document.createElement("label");
label.htmlFor = "_checkbox";
label.id = "label";

const textBar = document.createElement("div");
textBar.id="text_bar";

label.appendChild(textBar);
button.appendChild(input);
button.appendChild(label);
container.appendChild(button);

//div container
const div = document.createElement("div");
div.id = "divC";

function svuota(){
    while(div.firstChild)
        div.removeChild(div.firstChild);
}

function ClickAutori(event){
    input.checked = false;
    aside.classList.remove("asidein");
    svuota();
    switch(event){
        case "Tasso": {
            grafica.Tasso();break;
        }
        case "Galileo": {
            grafica.Galileo();break;
        }
        case "Bruno":{
            grafica.Bruno();break;
        }
        case "Marino": {
            grafica.Marino();break;
        }
        case "1700": {
            grafica.mlstc();break;
        }
        case "Metastasio":{
            grafica.Metastasio();break;
        }
        case "Illuminismo":{
            grafica.Illuminismo();break;
        }
        case "Verri" : {
            grafica.Verri();break;    
        }
        case "Beccaria" : {
            grafica.Beccaria();break;
        }
        case "Parini" : {
            grafica.Parini();break;
        }
        case "Goldoni" : {
            grafica.Goldoni();break;
        }
        case "Alfieri" :{
            grafica.Alfieri();break;
        }
        default:{
            console.log("palle");
        }
    }
}

//Autori

const autors = document.createElement("ul");
autors.id ="autors";

//Tasso
const Tasso = document.createElement("li");
Tasso.id = "tasso";
Tasso.classList.add("nomi");
const TassoA = document.createElement("a");
TassoA.innerHTML= "Tasso";
TassoA.addEventListener("click", ()=> ClickAutori("Tasso"));

//Galileo
const Galileo = document.createElement("li");
Galileo.id = "Galileo"; 
Galileo.classList.add("nomi");
const GalileoA = document.createElement("a");
GalileoA.innerHTML = "Galileo";
GalileoA.addEventListener("click", ()=> ClickAutori("Galileo"));

//Bruno
const Bruno = document.createElement("li");
Bruno.id= "Bruno";
Bruno.classList.add("nomi");
const BrunoA = document.createElement("a");
BrunoA.innerHTML = "Giordano Bruno";
BrunoA.addEventListener("click", ()=> ClickAutori("Bruno"));


//Marino
const Marino = document.createElement("li");
Marino.id = "Marino";
Marino.classList.add("nomi");
const MarinoA = document.createElement("a");
MarinoA.innerHTML = "Marino";
MarinoA.addEventListener("click", ()=> ClickAutori("Marino"));

//1700
const mstc = document.createElement("li");
mstc.id ="1700";
mstc.classList.add("nomi");
const mstcA = document.createElement("a");
mstcA.innerHTML = "1700";
mstcA.addEventListener("click", ()=> ClickAutori("1700"));

//Metastasio
const Metastasio = document.createElement("li");
Metastasio.id= "Metastasio";
Metastasio.classList.add("nomi");
const MetastasioA = document.createElement("a");
MetastasioA.innerHTML ="Metastasio";
MetastasioA.addEventListener("click", ()=> ClickAutori("Metastasio"));

//Illuminismo
const Illuminismo = document.createElement("li");
Illuminismo.id= "Illuminismo";
Illuminismo.classList.add("nomi");
const IlluminismoA = document.createElement("a");
IlluminismoA.innerHTML = "Illuminismo";
IlluminismoA.addEventListener("click", ()=> ClickAutori("Illuminismo"));

//Verri
const Verri = document.createElement("li");
Verri.id ="Verri";
Verri.classList.add("nomi");
const VerriA  = document.createElement("a");
VerriA.innerHTML = "Verri";
VerriA. addEventListener("click", ()=> ClickAutori("Verri"));

//Beccaria
const Beccaria = document.createElement("li");
Beccaria.id = "Beccaria";
Beccaria.classList.add("nomi");
const BeccariaA = document.createElement("a");
BeccariaA.innerHTML = "Beccaria"; 
BeccariaA.addEventListener("click", ()=> ClickAutori("Beccaria"));

//Parini
const Parini = document.createElement("li");
Parini.id = "Parini";
Parini.classList.add("nomi");
const PariniA  = document.createElement("a");
PariniA.innerHTML = "Parini";
PariniA.addEventListener("click", ()=> ClickAutori("Parini"));

//Goldoni
const Goldoni = document.createElement("li");
Goldoni.id="Goldoni";
Goldoni.classList.add("nomi");
const GoldoniA = document.createElement("a");
GoldoniA.innerHTML = "Goldoni";
GoldoniA.addEventListener("click", ()=> ClickAutori("Goldoni"));

//Alfieri
const Alfieri = document.createElement("li");
Alfieri.id = "Alfieri";
Goldoni.classList.add("nomi");
const AlfieriA = document.createElement("a");
AlfieriA.innerHTML= "Alfieri";
AlfieriA.addEventListener("click", ()=> ClickAutori("Alfieri"));


Tasso.appendChild(TassoA);
Galileo.appendChild(GalileoA);
Bruno.appendChild(BrunoA);
Marino.appendChild(MarinoA);
mstc.appendChild(mstcA);
Metastasio.appendChild(MetastasioA);
Illuminismo.appendChild(IlluminismoA);
Verri.appendChild(VerriA);
Beccaria.appendChild(BeccariaA);
Parini.appendChild(PariniA);
Goldoni.appendChild(GoldoniA);
Alfieri.appendChild(AlfieriA);



autors.appendChild(Tasso);
autors.appendChild(Galileo);
autors.appendChild(Bruno);
autors.appendChild(Marino);
autors.appendChild(mstc);
autors.appendChild(Metastasio);
autors.appendChild(Illuminismo);
autors.appendChild(Verri);
autors.appendChild(Beccaria);
autors.appendChild(Parini);
autors.appendChild(Goldoni);
autors.appendChild(Alfieri);

aside.appendChild(autors);
body.appendChild(div);
body.appendChild(aside);
body.appendChild(container);



//aside animation
input.addEventListener("change", ()=>{
    if(input.checked)
        aside.classList.add("asidein");
    else
        aside.classList.remove("asidein");
})

