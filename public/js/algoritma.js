class Algoritma_permainan{
    constructor(pilihan){
        this.pilihan_player = pilihan;
    }

    algoritma_kertas_batu_gunting() {
        
        const pilihan_permainan = ["batu", "kertas", "gunting"];
        let acak_pilihan_com = Math.floor(Math.random() * pilihan_permainan.length);
        
        if (pilihan_permainan[acak_pilihan_com] == "gunting" && this.pilihan_player == "kertas") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("COM WIN");
            return ["COM WIN",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];
        }
        if (pilihan_permainan[acak_pilihan_com] == "kertas" && this.pilihan_player == "batu") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("COM WIN");
            return ["COM WIN",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];
        }
        if (pilihan_permainan[acak_pilihan_com] == "batu" && this.pilihan_player == "gunting") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("COM WIN");
            return ["COM WIN",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];            
        }
        if (this.pilihan_player == "gunting" && pilihan_permainan[acak_pilihan_com] == "kertas") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("PLAYER 1 WIN");
            return ["PLAYER 1 WIN",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];
        }
        if (this.pilihan_player == "kertas" && pilihan_permainan[acak_pilihan_com] == "batu") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("PLAYER 1 WIN");
            return ["PLAYER 1 WIN",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];
        }
        if (this.pilihan_player == "batu" && pilihan_permainan[acak_pilihan_com] == "gunting") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("PLAYER 1 WIN");
            return ["PLAYER 1 WIN",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];            
        }
        if (this.pilihan_player == "gunting" && pilihan_permainan[acak_pilihan_com] == "gunting") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("DRAW");
            return ["DRAW",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];
        }
        if (this.pilihan_player == "kertas" && pilihan_permainan[acak_pilihan_com] == "kertas") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("DRAW");
            return ["DRAW",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];
        }
        if (this.pilihan_player == "batu" && pilihan_permainan[acak_pilihan_com] == "batu") {
            console.log(`PLAYER 1 = ${this.pilihan_player}`);
            console.log(`COM = ${pilihan_permainan[acak_pilihan_com]}`);
            console.log("DRAW");
            return ["DRAW",this.pilihan_player,pilihan_permainan[acak_pilihan_com]];            
        }

    }
}

function hasil_permainan(value_pilihan_playerone) {
    let permainan = new Algoritma_permainan(value_pilihan_playerone);
    let hasil = permainan.algoritma_kertas_batu_gunting();
    if (hasil[0] == "DRAW") {
        let vs = document.getElementById("VS");
        vs.remove();

        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = "DRAW";
        div.style.display = 'inline-block';
        div.style.fontFamily = 'Open Sans';
        div.style.fontStyle = 'normal';
        div.style.fontWeight = 'bold';
        div.style.fontSize = '38px';
        div.style.textAlign = 'center';
        div.style.letterSpacing = '0.1em';
        div.style.textTransform = 'uppercase';
        div.style.color = '#FFFFFF';
        div.style.transform = 'rotate(-30.98deg)';
        div.style.paddingLeft = '3rem';
        div.style.paddingRight = '3rem';
        div.style.paddingTop = '2rem';
        div.style.paddingBottom = '2rem';
        div.style.background = '#035B0C';
        div.style.borderRadius = '10px';
        div.style.boxSizing = 'content-box';
        
        p.style.marginBottom = '0';
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5").appendChild(div);
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5 > div").appendChild(p);

        let player1 = document.getElementById(hasil[1]);
        player1.style.boxSizing = 'content-box';
        player1.style.background = '#C4C4C4';
        player1.style.borderRadius = '30px';

        
        if (hasil[2] == "batu") {
            let com = document.getElementById("com_batu");
            com.style.boxSizing = 'content-box';
            com.style.background = '#C4C4C4';
            com.style.borderRadius = '30px';
        }
        if (hasil[2] == "kertas") {
            let com = document.getElementById("com_kertas");
            com.style.boxSizing = 'content-box';
            com.style.background = '#C4C4C4';
            com.style.borderRadius = '30px';
        }
        
        if (hasil[2] == "gunting") {
            let com = document.getElementById("com_gunting");
            com.style.boxSizing = 'content-box';
            com.style.background = '#C4C4C4';
            com.style.borderRadius = '30px';
        }
        


    }
    if (hasil[0] == "PLAYER 1 WIN") {
        let vs = document.getElementById("VS");
        vs.remove();

        let div = document.createElement('div');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        p.textContent = "PLAYER 1";
        p1.textContent = "WIN";
        div.style.display = 'inline-block';
        div.style.fontFamily = 'Open Sans';
        div.style.fontStyle = 'normal';
        div.style.fontWeight = 'bold';
        div.style.fontSize = '38px';
        div.style.textAlign = 'center';
        div.style.letterSpacing = '0.1em';
        div.style.textTransform = 'uppercase';
        div.style.color = '#FFFFFF';
        div.style.transform = 'rotate(-30.98deg)';
        div.style.paddingLeft = '1em';
        div.style.paddingRight = '1em';
        div.style.paddingTop = '0.5em';
        div.style.paddingBottom = '0.5em';
        div.style.background = '#4C9654';
        div.style.borderRadius = '10px';
        div.style.boxSizing = 'content-box';
        
        p.style.marginBottom = '0';
        p1.style.marginBottom = '0';
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5").appendChild(div);
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5 > div").appendChild(p);
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5 > div").appendChild(p1);

        let player1 = document.getElementById(hasil[1]);
        player1.style.boxSizing = 'content-box';
        player1.style.background = '#C4C4C4';
        player1.style.borderRadius = '30px';

        let com = '';
        if (hasil[2] == "batu") {
           com = document.getElementById("com_batu");
        }
        if (hasil[2] == "kertas") {
            com = document.getElementById("com_kertas");
        }
        
        if (hasil[2] == "gunting") {
            com = document.getElementById("com_gunting");
        }
        com.style.boxSizing = 'content-box';
        com.style.background = '#C4C4C4';
        com.style.borderRadius = '30px';
    }
    if (hasil[0] == "COM WIN") {
        let vs = document.getElementById("VS");
        vs.remove();

        let div = document.createElement('div');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        p.textContent = "COM";
        p1.textContent = "WIN";
        div.style.display = 'inline-block';
        div.style.fontFamily = 'Open Sans';
        div.style.fontStyle = 'normal';
        div.style.fontWeight = 'bold';
        div.style.fontSize = '38px';
        div.style.textAlign = 'center';
        div.style.letterSpacing = '0.1em';
        div.style.textTransform = 'uppercase';
        div.style.color = '#FFFFFF';
        div.style.transform = 'rotate(-30.98deg)';
        div.style.paddingLeft = '4rem';
        div.style.paddingRight = '4rem';
        div.style.paddingTop = '0.5em';
        div.style.paddingBottom = '0.5em';
        div.style.background = '#4C9654';
        div.style.borderRadius = '10px';
        div.style.boxSizing = 'content-box';
        
        p.style.marginBottom = '0';
        p1.style.marginBottom = '0';
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5").appendChild(div);
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5 > div").appendChild(p);
        document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5 > div").appendChild(p1);

        let player1 = document.getElementById(hasil[1]);
        player1.style.boxSizing = 'content-box';
        player1.style.background = '#C4C4C4';
        player1.style.borderRadius = '30px';

        let com = '';
        if (hasil[2] == "batu") {
           com = document.getElementById("com_batu");
        }
        if (hasil[2] == "kertas") {
            com = document.getElementById("com_kertas");
        }
        
        if (hasil[2] == "gunting") {
            com = document.getElementById("com_gunting");
        }
        com.style.boxSizing = 'content-box';
        com.style.background = '#C4C4C4';
        com.style.borderRadius = '30px';
    }
}

function refresh() {
    const elementHasilPermainan = document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5");
    while (elementHasilPermainan.firstChild) {
      elementHasilPermainan.removeChild(elementHasilPermainan.firstChild);
    }

    let p = document.createElement('p');
    p.className = 'vs';
    p.id = "VS";
    p.textContent = "VS";
    /*p.style.fontFamily = 'Open Sans';
    p.style.fontStyle = 'normal';
    p.style.fontWeight = 'bold';
    p.style.fontSize = '144px';
    p.style.textAlign = 'center';
    p.style.letterSpacing = '0.1em';
    p.style.textTransform = 'uppercase';
    p.style.color = '#BD0000';*/

    let player_batu = document.getElementById("batu");
    let player_kertas = document.getElementById("kertas");
    let player_gunting = document.getElementById("gunting");

    let com_batu = document.getElementById("com_batu");
    let com_kertas = document.getElementById("com_kertas");
    let com_gunting = document.getElementById("com_gunting");

    player_batu.style.background = 'none';
    player_kertas.style.background = 'none';
    player_gunting.style.background = 'none';

    com_batu.style.background = 'none';
    com_kertas.style.background = 'none';
    com_gunting.style.background = 'none';

    document.querySelector("body > div > div > div > div.col-auto.align-self-center.me-5.ms-5").appendChild(p);

    console.clear()

}

function goBack() {
  window.history.back();
}


function belumLogin() {
    alert("Login terlebih dahulu");
}
    

