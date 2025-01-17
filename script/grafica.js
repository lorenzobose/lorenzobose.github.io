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

    Alfieri(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Alfieri";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Alfieri.vita;

        const tirannide = document.createElement("h2");
        tirannide.innerHTML="Tirannide";
        tirannide.classList.add("titoletto");

        const Tirannidet = document.createElement("p");
        Tirannidet.classList.add("testo");
        Tirannidet.innerHTML = text.Alfieri.Tirannide;

        const rime = document.createElement("h2");
        rime.innerHTML ="Rime";
        rime.classList.add("titoletto");

        const rimet = document.createElement("p");
        rimet.classList.add("testo");
        rimet.innerHTML = text.Alfieri.rime;

        const tragico = document.createElement("h2");
        tragico.innerHTML = "Alfieri Tragico";
        tragico.classList.add("titoletto");

        const tragicot = document.createElement("p");
        tragicot.classList.add("testo");
        tragicot.innerHTML = text.Alfieri.tragico;

        const saul = document.createElement("h2");
        saul.innerHTML ="Saul";
        saul.classList.add("titoletto");

        const sault = document.createElement("p");
        sault.classList.add("testo");
        sault.innerHTML = text.Alfieri.Saul;       

        const mirra = document.createElement("h2");
        mirra.innerHTML = "Mirra";
        mirra.classList.add("titoletto");

        const mirrat = document.createElement("p");
        mirrat.classList.add("testo");
        mirrat.innerHTML = text.Alfieri.Mirra;

        const Vita = document.createElement("h2");
        Vita.classList.add("titoletto");
        Vita.innerHTML = "Vita di Vittorio Alfieri scritta da Esso";

        const vitat = document.createElement("p");
        vitat.classList.add("testo");
        vitat.innerHTML = text.Alfieri.Vita;

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(tirannide);
        div.appendChild(Tirannidet);
        div.appendChild(rime);
        div.appendChild(rimet);
        div.appendChild(tragico);
        div.appendChild(tragicot);
        div.appendChild(saul);
        div.appendChild(sault);
        div.appendChild(mirra);
        div.appendChild(mirrat);
        div.appendChild(Vita);
        div.appendChild(vitat);
        
    },

    Foscolo(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Foscolo";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Foscolo.vita;

        const Zacinto = document.createElement("h2");
        Zacinto.innerHTML= "A Zacinto";
        Zacinto.classList.add("titoletto");

        const zacinto = document.createElement("p");
        zacinto.classList.add("testo");
        zacinto.innerHTML = text.Foscolo.Zacinto;

        const Sera = document.createElement("h2");
        Sera.innerHTML = "Alla Sera";
        Sera.classList.add("titoletto");

        const sera = document.createElement("p");
        sera.classList.add("testo");
        sera.innerHTML = text.Foscolo.Sera;

        const Giovanni = document.createElement("h2");
        Giovanni.innerHTML = "In Morte Del Fratello Giovanni";
        Giovanni.classList.add("titoletto");

        const giovanni = document.createElement("p");
        giovanni.classList.add("testo");
        giovanni.innerHTML = text.Foscolo.Giovanni;

        const Amica = document.createElement("h2");
        Amica.innerHTML = "Ode All'Amica Risanata";
        Amica.classList.add("titoletto");
        
        const amica = document.createElement("p");
        amica.classList.add("testo");
        amica.innerHTML = text.Foscolo.Amica;

        const Auto = document.createElement("h2");
        Auto.innerHTML = "Autoritratto";
        Auto.classList.add("titoletto");

        const auto = document.createElement("p");
        auto.classList.add("testo");
        auto.innerHTML = text.Foscolo.Autoritratto;

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(Zacinto);
        div.appendChild(zacinto);
        div.appendChild(Sera);
        div.appendChild(sera);
        div.appendChild(Giovanni);
        div.appendChild(giovanni);
        div.appendChild(Amica);
        div.appendChild(amica);
        div.appendChild(Auto);
        div.appendChild(auto);
    },
    Pascoli(){
        const nome = document.createElement("h1");
        nome.innerHTML = "Pascoli";
        nome.classList.add("titolo");

        const vita = document.createElement("p");
        vita.classList.add("testo");
        vita.innerHTML = text.Pascoli.vita;

        const Fanciullino = document.createElement("h2");
        Fanciullino.innerHTML = "Fanciullino";
        Fanciullino.classList.add("titoletto");

        const fanciullino = document.createElement("p");
        fanciullino.classList.add("testo");
        fanciullino.innerHTML = text.Pascoli.Fanciullino;

        const XAgosto = document.createElement("h2");
        XAgosto.innerHTML = "X Agosto";
        XAgosto.classList.add("titoletto");

        const xagosto = document.createElement("p");
        xagosto.classList.add("testo");
        xagosto.innerHTML = text.Pascoli.XAgosto;


        const Myricae = document.createElement("h2");
        Myricae.innerHTML = "Myricae";
        Myricae.classList.add("titoletto");

        const myricae = document.createElement("p");
        myricae.classList.add("testo");
        myricae.innerHTML = text.Pascoli.Myricae;

        const GiornoMorte = document.createElement("h3");
        GiornoMorte.innerHTML = "Il Giorno Della Morte";
        GiornoMorte.classList.add("titoletto");

        const giornomorte = document.createElement("p"); 
        giornomorte.classList.add("testo");
        giornomorte.innerHTML = text.Pascoli.GiornoMorte;

        const Lampo = document.createElement("h3");
        Lampo.innerHTML = "Il Lampo";
        Lampo.classList.add("titoletto");

        const lampo = document.createElement("p");
        lampo.classList.add("testo");
        lampo.innerHTML = text.Pascoli.Lampo;

        const Tuono = document.createElement("h3");
        Tuono.innerHTML = "Il Tuono";
        Tuono.classList.add("titoletto");

        const tuono = document.createElement("p");
        tuono.classList.add("testo");
        tuono.innerHTML = text.Pascoli.Tuono;

        const Gattici = document.createElement("h3");
        Gattici.innerHTML = "I Gattici";
        Gattici.classList.add("titoletto");

        const gattici = document.createElement("p");
        gattici.classList.add("testo");
        gattici.innerHTML = text.Pascoli.Gattici;

        const GelsominoNotturno = document.createElement("h3");
        GelsominoNotturno.innerHTML = "Gelsomino Notturno";
        GelsominoNotturno.classList.add("titoletto");

        const gelsomino = document.createElement("p");
        gelsomino.classList.add("testo");
        gelsomino.innerHTML = text.Pascoli.GelsominoNotturno;

        div.appendChild(nome);
        div.appendChild(vita);
        div.appendChild(Fanciullino);
        div.appendChild(fanciullino);
        div.appendChild(XAgosto);
        div.appendChild(xagosto);
        div.appendChild(Myricae);
        div.appendChild(myricae);
        div.appendChild(GiornoMorte);
        div.appendChild(giornomorte);
        div.appendChild(Lampo);
        div.appendChild(lampo);
        div.appendChild(Tuono);
        div.appendChild(tuono);
        div.appendChild(Gattici);
        div.appendChild(gattici);
        div.appendChild(GelsominoNotturno);
        div.appendChild(gelsomino);
    }
}