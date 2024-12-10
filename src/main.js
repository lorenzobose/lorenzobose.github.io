let text, container;

const grafica = {
    
    titolo(){
        const arrow = document.createElement("img");
        arrow.src ="img/freccia.png";
        arrow.style.position = "absolute";
        arrow.style.right = "0%";
        arrow.style.width = "7%";
        arrow.style.backgroundColor = "white";
        arrow.style.backgroundSize = "contain";

        field.appendChild(arrow);

        container = document.createElement("div");
        container.style.backgroundColor = "#A7D49B";
        container.style.position = "absolute";
        container.style.width = "60%";
        container.style.height = "60%";
        container.style.top = "20%";
        container.style.left = "20%";
        container.style.alignContent = "center";

        text = document.createElement("p");
        text.style.textAlign = "center";
        text.innerHTML = "Di Boselli Lorenzo, Dell'Acqua Luca, Passaniti Samuele e Carman Alessandro Eric";
        text.style.fontSize = "50px";
        text.style.position = "relative";

        container.appendChild(text);
        field.appendChild(container);

        text.style.width = parseFloat(window.getComputedStyle(container).width) * 0.6 + "px";
        
        container.style.animation = "pulse 2s ease-in-out infinite";
        text.style.animation = "static 2s ease-in-out infinite";
    },

    inizio(){
        const sfondo = document.createElement("img");
        sfondo.src = "img/sfondo.webp";
        sfondo.style.width = "100%";
        field.appendChild(sfondo);

        const larrow = document.createElement("img");
        larrow.src ="img/freccia.png";
        larrow.style.position = "absolute";
        larrow.style.right = "0%";
        larrow.style.width = "7%";
        larrow.style.backgroundColor = "white";
        larrow.style.backgroundSize = "contain";

        field.appendChild(larrow);

        const rarrow = document.createElement("img");
        rarrow.src ="img/freccia.png";
        rarrow.style.position = "absolute";
        rarrow.style.right = "7%";
        rarrow.style.width = "7%";
        rarrow.style.backgroundColor = "white";
        rarrow.style.backgroundSize = "contain";
        rarrow.style.transform = "rotate(180deg)";
        rarrow.addEventListener("click", ()=>{
            svuota();
            sector--;
            if(sector < 0)
                sector = 0;
            controller();
        })

        field.appendChild(rarrow);

        const text = document.createElement("span");
        text.innerHTML = "L' AUTOMOBILE";
        text.classList.add("text");
        field.appendChild(text);
        text.style.right = (parseFloat(window.getComputedStyle(field).width) - parseFloat(window.getComputedStyle(text).width)) / 2 + "px";
        setTimeout(()=>{text.style.top = parseFloat(window.getComputedStyle(text).height) + "px"}, 300);
    }, 



}

let sector = 0;

function controller(){
    console.log(sector);
    switch(sector){
        case 0: grafica.titolo(); break;
        case 1: grafica.inizio(); break;
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