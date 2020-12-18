import React, {useState, useEffect} from 'react';
import './avaukset.css'
const Muokkaaminen = () => {
  const [avaukset, asetaAvaukset] = useState({});
  const [avaus, asetaAvaus] = useState({});
  const [avain, asetaAvain] = useState();
  const [id, asetaId] = useState(0);
  const baseurl = "https://h2c-639ef.firebaseio.com/avaukset";
  // Haetaan tiedot palvelimelta ja tallennetaan avaukset-useStateen
  useEffect(() => {
    fetch(baseurl + ".json")
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Virhe! Virhekoodi: " + response.status
          );
          return;
        }
        response.json().then(function(data) {
          asetaAvaukset(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error : ", err);
      });
  }, []);
  // Tehdään lista palvelimelta tulleesta datasta
  const avauksetArray = Array.from(Object.keys(avaukset), k => avaukset[k]);
  const muokkaaAvausta = avauksetArray.map((avaus, key) => {
    if (key === id) {
      return (
        <div>
          <p>Avauksen Nimi</p>
          <input
            id="nimi"
            name="nimi"
            value={avaus.nimi}
            onChange={e => update(e)}
          />
          <br />
          <p>Avauksen 1. siirto</p>
          <input
            id="siirto1"
            name="siirto1"
            value={avaus.siirto1}
            onChange={e => update(e)}
          />
          <br />
          <p>Avauksen 2. Siirto</p>
          <input
            id="siirto2"
            name="siirto2"
            value={avaus.siirto2}
            onChange={e => update(e)}
          />
          <br />
          <p>Avauksen 3. Siirto</p>
          <input
            id="siirto3"
            name="siirto3"
            value={avaus.siirto3}
            onChange={e => update(e)}
          />
          <br />
          <p>Avauksen 4. Siirto</p>
          <input
            id="siirto4"
            name="siirto4"
            value={avaus.siirto4}
            onChange={e => update(e)}
          />
          <br />
        </div>
      );
    }
  });

  return (
    <div className="sisalto">
      <h2>Avauksien selaaminen, muokkaaminen ja tallentaminen palvelimelle</h2>
      <div className="avausInputit">{muokkaaAvausta}</div>
      <button onClick={edellinen}>{"<"}</button>
      <button onClick={seuraava}>{">"}</button>
      <button onClick={save}>Tallenna</button>
    </div>
  );
  // seuraava-napin luominen
  function seuraava() {
    if (id < avauksetArray.length - 1) asetaId(id + 1);
  }
  // edellinen-napin luominen
  function edellinen() {
    if (id > 0) asetaId(id - 1);
  }

  // Tiedon päivittäminen paikallisesti
  function update(e) {
    // etsitään oikea taulukon alkio
    let i = 0;
    let keynow = null;
    for (const key in avaukset) {
      if (i === id) {
        keynow = key;
      }
      i++;
    }
    // Luodaan uusi objekti, johon muokattavan objektin tiedot tallennetaan
    let avaus = Object.assign({}, avaukset[keynow]);
    // Muutetaan tiedot uuteen objektiin
    avaus[e.target.name] = e.target.value;
    // Luodaan uusi objekti kaikille avauksille.
    let uusiAvaukset = Object.assign({}, avaukset);
    // Lisätään muokattu objekti uusiin avauksiin
    uusiAvaukset[keynow] = avaus;
    // Asetetaan uudet tiedot useStateihin
    asetaAvaukset(uusiAvaukset);
    asetaAvain(keynow);
    asetaAvaus(avaus);
  }
 
  // Funktio tiedon tallentamiseen palvelimelle
  function save() {
    const url = baseurl + "/" + avain + ".json";
    fetch(url, {
      method: "PATCH",
      "Content-Type": "application/json",
      body: JSON.stringify(avaus)
    })
      .then(function(response) {
        if (response.status !== 200) {
          alert(
            "Tallentamisessa tapahtui virhe! Virhekoodi: " + response.status
          );
          return;
        }
        response.json().then(function(data) {
          alert("Tallennus onnistui!")
        });
      })
      .catch(function(err) {
        console.log("Fetch Error : ", err);
      });
  }
}
export default Muokkaaminen;