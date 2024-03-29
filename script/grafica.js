const grafica = {
    Tasso(){
        const Titolo = document.createElement("h1");
        Titolo.innerHTML="Tasso";
        Titolo.classList.add("titolo");
        

        const vitah = document.createElement("h2");
        vitah.innerHTML = "Vita";
        vitah.classList.add("titoletto");

        const Vita = document.createElement("p");
        Vita.classList.add("testo");
        Vita.innerHTML = text.Tasso.vita;
        
        const canzM = document.createElement("h2");
        canzM.innerHTML = "Canzone al Metauro";
        canzM.classList.add("titoletto");

        const Canzo = document.createElement("p");
        Canzo.innerHTML = text.Tasso.metauro;
        Canzo.classList.add("testo");

        const Amint = document.createElement("h2");
        Amint.innerHTML = "Aminta";
        Amint.classList.add("titoletto");

        const aminta = document.createElement("p");
        aminta.classList.add("testo");
        aminta.innerHTML = text.Tasso.aminta;

        const gerul = document.createElement("h2");
        gerul.innerHTML="Gerusalemme Liberata";
        gerul.classList.add("titoletto");

        const geruld = document.createElement("p");
        geruld.innerHTML = text.Tasso.gerusalemme.descrizione;
        geruld.classList.add("testo");

        const gerup = document.createElement("h3");
        gerup.classList.add("titoletto");
        gerup.innerHTML = "Personaggi";

        const gerulp = document.createElement("p");
        gerulp.classList.add("testo");
        gerulp.innerHTML = text.Tasso.gerusalemme.personaggi;

        const gerut = document.createElement("h3");
        gerut.innerHTML="Temi";
        gerut.classList.add("titoletto");

        const gerult = document.createElement("p");
        gerult.classList.add("testo");
        gerult.innerHTML = text.Tasso.gerusalemme.temi;

        div.appendChild(Titolo);
        div.appendChild(vitah);
        div.appendChild(Vita);
        div.appendChild(canzM);
        div.appendChild(Canzo);
        div.appendChild(Amint);
        div.appendChild(aminta);
        div.appendChild(gerul);
        div.appendChild(geruld);
        div.appendChild(gerup);
        div.appendChild(gerulp);
        div.appendChild(gerut);
        div.appendChild(gerult);
    }, 

    Galileo(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Galileo Galilei";
        nome.classList.add("titolo");

        const vita = document.createElement("h2");
        vita.innerHTML ="Vita";
        vita.classList.add("titoletto");

        const vitat = document.createElement("p");
        vitat.classList.add("testo");
        vitat.innerHTML = text.Galileo.vita;
        
        const side = document.createElement("h2");
        side.innerHTML = "Siderius Nuncius";
        side.classList.add("titoletto");

        const sidep = document.createElement("p");
        sidep.classList.add("testo");
        sidep.innerHTML = text.Galileo.siderius;

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(vitat);
        div.appendChild(side);
        div.appendChild(sidep);

    },

    Bruno(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Giordano Bruno";
        nome.classList.add("titolo");

        const vita = document.createElement("h2");
        vita.innerHTML ="Vita";
        vita.classList.add("titoletto");
        
        const vitat = document.createElement("p");
        vitat.classList.add("testo");
        vitat.innerHTML = text.Bruno.vita;

        const infinit = document.createElement("h2");
        infinit.innerHTML = "Infinito";
        infinit.classList.add("titoletto");

        const infinito = document.createElement("p");
        infinito.innerHTML = text.Bruno.infinito;
        infinito.classList.add("testo");

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(vitat);
        div.appendChild(infinit);
        div.appendChild(infinito);
    },

    Marino(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Gian Battista Marino";
        nome.classList.add("titolo");

        const vita = document.createElement("h2");
        vita.innerHTML ="Vita";
        vita.classList.add("titoletto");
        
        const vitat = document.createElement("p");
        vitat.classList.add("testo");
        vitat.innerHTML = text.Marino.vita;

        const lira = document.createElement("h2");
        lira.innerHTML = "La Lira";
        lira.classList.add("titoletto");

        const lirat = document.createElement("p");
        lirat.classList.add("testo");
        lirat.innerHTML = text.Marino.lira;

        const pim = document.createElement("h3");
        pim.innerHTML = "Porta Intorno Madonna";
        pim.classList.add("titoletto");

        const pimt = document.createElement("p");
        pimt.classList.add("testo");
        pimt.innerHTML = text.Marino.porta;

        const pallo = document.createElement("h3");
        pallo.classList.add("titoletto");
        pallo.innerHTML = "Pallore dell'Amata";

        const pallot = document.createElement("p");
        pallot.classList.add("testo");
        pallot.innerHTML = text.Marino.pallore;

        const donna = document.createElement("h3");
        donna.classList.add("titoletto");
        donna.innerHTML = "La donna che cuce";

        const donnat = document.createElement("p");
        donnat.classList.add("testo");
        donnat.innerHTML = text.Marino.donna;

        const ninfa = document.createElement("h3");
        ninfa.classList.add("titoletto");
        ninfa.innerHTML = "La ninfa mungitrice";

        const ninfat = document.createElement("p");
        ninfat.classList.add("testo");
        ninfat.innerHTML = text.Marino.ninfa;

        const adone = document.createElement("h2");
        adone.innerHTML = "Adone";
        adone.classList.add("titoletto");

        const adonet = document.createElement("p");
        adonet.innerHTML = text.Marino.adone;
        adonet.classList.add("testo");

        const usi = document.createElement("h3");
        usi.innerHTML ="Canto dell' Usignolo";
        usi.classList.add("titoletto");

        const usit = document.createElement("p");
        usit.innerHTML = text.Marino.usignolo;
        usit.classList.add("testo");

        

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(vitat);
        div.appendChild(lira);
        div.appendChild(lirat);
        div.appendChild(pim);
        div.appendChild(pimt);
        div.appendChild(pallo);
        div.appendChild(pallot);
        div.appendChild(donna);
        div.appendChild(donnat);
        div.appendChild(ninfa);
        div.appendChild(ninfat);
        div.appendChild(adone);
        div.appendChild(adonet);
        div.appendChild(usi);
        div.appendChild(usit);

    },

    mlstc(){
        const nome = document.createElement("h1");
        nome.innerHTML = "1700";
        nome.classList.add("titolo");

        const storia = document.createElement("p");
        storia.classList.add("testo");
        storia.innerHTML = text.mlstc.mlst;

        div.appendChild(nome);
        div.appendChild(storia);
    }, 

    Metastasio(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Pietro Metastasio";
        nome.classList.add("titolo");

        const vita = document.createElement("h2");
        vita.innerHTML ="Vita";
        vita.classList.add("titoletto");
        
        const vitat = document.createElement("p");
        vitat.classList.add("testo");
        vitat.innerHTML = text.Metastasio.vita;

        const liber = document.createElement("h2");
        liber.innerHTML = "Infinito";
        liber.classList.add("titoletto");

        const libert = document.createElement("p");
        libert.innerHTML = text.Metastasio.liber;
        libert.classList.add("testo");

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(vitat);
        div.appendChild(liber);
        div.appendChild(libert);
    },

    Illuminismo(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Illuminismo";
        nome.classList.add("titolo");

        const storia = document.createElement("p");
        storia.classList.add("testo");
        storia.innerHTML = text.Illuminismo.storia;

        div.appendChild(nome);
        div.appendChild(storia);
    },

    Verri(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Verri";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Verri.vita;

        div.appendChild(nome);
        div.appendChild(vita);
    },

    Beccaria(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Cesare Beccaria";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Beccaria.vita;

        div.appendChild(nome);
        div.appendChild(vita);
    }, 

    Parini(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Parini";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Parini.vita;

        const odi = document.createElement("h2");
        odi.innerHTML = "Le Odi";
        odi.classList.add("titoletto");

        const odit = document.createElement("p");
        odit.innerHTML = text.Parini.odi;
        odit. classList.add("testo");

        const salu = document.createElement("h3");
        salu.classList.add("titoletto");
        salu.innerHTML ="La Salubrità dell'Aria";

        const salut = document.createElement("p");
        salut.classList.add("testo");
        salut.innerHTML = text.Parini.salub;

        const giorno = document.createElement("h2");
        giorno.innerHTML = "Il Giorno";
        giorno.classList.add("titoletto");

        const giornot = document.createElement("p");
        giornot.innerHTML = text.Parini.giorno;
        giornot.classList.add("testo");

        const cuccia  = document.createElement("h3");
        cuccia.innerHTML = "Vergine Cuccia";
        cuccia.classList.add("titoletto");

        const cucciat = document.createElement("p");
        cucciat.classList.add("testo");
        cucciat.innerHTML = text.Parini.cuccia;
        const img = document.createElement("img");
        img.src = "/script/VERGINECUCCIA.png";
        img.classList.add("testo");
        cucciat.appendChild(img); 

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(odi);
        div.appendChild(odit);
        div.appendChild(salu);
        div.appendChild(salut);
        div.appendChild(giorno);
        div.appendChild(giornot);
        div.appendChild(cuccia);
        div.appendChild(cucciat);
    }, 

    Goldoni(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Goldoni";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Goldoni.vita;

        div.appendChild(nome);
        div.appendChild(vita);
    },
}