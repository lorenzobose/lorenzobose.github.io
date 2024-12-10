let text;
const grafica = {
    inizio(){
        const sfondo = document.createElement("img");
        sfondo.src = "img/sfondo.png";
        sfondo.style.width = "100%";
        field.appendChild(sfondo);

        text = document.createElement("span");
        text.innerHTML = "AUTOMOBILE";
        text.classList.add("text");
        field.appendChild(text);
        text.style.right = (parseFloat(window.getComputedStyle(field).width) - parseFloat(window.getComputedStyle(text).width)) / 2 + "px";
        setTimeout(()=>{text.style.top = parseFloat(window.getComputedStyle(text).height) + "px"}, 300);
    }, 

}

let sector = 0;

function controller(){
    switch(sector){
        case 0: {
            grafica.inizio();
        }
        default: break;
    }
}

controller();

function svuota(){
    while(field.firstChild){
        field.removeChild(field.firstChild);
    }
}

document.addEventListener("click", ()=>{
    svuota();
    sector++;
    controller();
})

/**
 * @param {KeyboardEvent} event 
 */
function tasti(event){
    if(event.key == "ArrowLeft"){
        svuota();
        sector--;
        if(sector < 0)
            sector = 0;
        controller();
    }
    if(event.key == "ArrowRight"){
        svuota();
        sector++;
        controller();
    }
}

document.addEventListener("keydown", tasti);