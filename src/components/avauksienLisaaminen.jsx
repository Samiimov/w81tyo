import React from 'react';
import Tallennus from './avauksenTallentaminen'
import './avaukset.css'
const Lisaaminen = () => {
    function save(){
      // funktio avauksen tallentamiseen REST-palvelimelle. 
        let nimi = document.getElementById("nimi").value 
        let siirto1 = document.getElementById("siirto1").value 
        let siirto2 = document.getElementById("siirto2").value 
        let siirto3 = document.getElementById("siirto3").value 
        let siirto4 = document.getElementById("siirto4").value 
        // Luodaan objekti annetuista tiedoista
        let avaus = new Avaus(nimi, siirto1, siirto2, siirto3, siirto4)
        // Syötetään tiedot "Tallennus"-componenttiin, joka tallentaa tiedot palvelimelle.
        Tallennus(avaus)
    }

    // Funktio, joka luo objektin
    function Avaus(avausNimi, siirto1, siirto2, siirto3, siirto4){
        this.nimi = avausNimi
        this.siirto1 = siirto1
        this.siirto2 = siirto2
        this.siirto3 = siirto3
        this.siirto4 = siirto4
    }
    return (
        
        <div className="sisalto">
            <h1>Uuden avauksen lisääminen</h1>
          <p>Avauksen Nimi</p>
          <input
            id="nimi"
          />
          <br />
          <p>Avauksen 1. siirto</p>
          <input
            id="siirto1"
          />
          <br />
          <p>Avauksen 2. Siirto</p>
          <input
            id="siirto2"
          />
          <br />
          <p>Avauksen 3. Siirto</p>
          <input
            id="siirto3"
          />
          <br />
          <p>Avauksen 4. Siirto</p>
          <input
            id="siirto4"
          />
          <br />
          <button onClick={save}>Tallenna</button>
        </div>
      );
}

export default Lisaaminen