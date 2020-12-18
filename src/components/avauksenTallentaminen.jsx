// Komponentti uuden avauksen lisäämiseen palvelimelle
const Tallennus = (props) => {
    const url = "https://h2c-639ef.firebaseio.com/avaukset/" + props.nimi + ".json"
    fetch(url, {
      method: "PATCH",
      "Content-Type": "application/json",
      body: JSON.stringify(props)
    })
      .then(function(response) {
        if (response.status !== 200) {
          alert(
            "Tallentamisessa tapahtui virhe! Virhekoodi: " + response.status
          );
          return;
        }
        response.json().then(function(data) {
          alert("Tallentaminen onnistui!")
        });
      })
      .catch(function(err) {
        console.log("Fetch Error : ", err);
      });
}

export default Tallennus;