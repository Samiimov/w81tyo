import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

// Komponentti, joka luo taulukon palvelimelta tulleista siirroista.
const Selaaminen = () => {
    // useState avauksille
    const [avaukset, asetaAvaukset] = useState([]);
    // url-josta tiedot haetaan
    const baseurl = "https://h2c-639ef.firebaseio.com/avaukset";
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
                const avausArray = Array.from(Object.keys(data), k => data[k]);
                asetaAvaukset(avausArray);
               
            });
          })
          .catch(function(err) {
            console.log("Fetch Error : ", err);
          });
      }, []);
    
    // Luodaan taulukolle sarakkeet
    const columns = [{
        Header: 'Avauksen nimi',
        accessor: 'nimi',
        headerClassName: 'headeri'
      },{
        Header: 'Siirto 1',
        accessor: 'siirto1',
        headerClassName: 'headeri'
        
      },{
        Header: 'Siirto 2',
        accessor: 'siirto2',
        headerClassName: 'headeri'
        
      },{
        Header: 'Siirto 3',
        accessor: 'siirto3',
        headerClassName: 'headeri'
        
      },{
        Header: 'Siirto 4',
        accessor: 'siirto4',
        headerClassName: 'headeri'
        
      }
    ]
      return (
        // Luodaan react-taulu. Datana on palvelimelta tullut data ja sarakkeina edellä määritellyt sarakkeet.
        <div className="App">
          <ReactTable 
          filterable
          data={avaukset} 
          columns={columns}
          defaultPageSize={20}
          
          filterMethod={(filter, row) =>
          row[filter.id].startsWith(filter.value) &&
          row[filter.id].endsWith(filter.value)}
          filterAll={true}
          />
          </div>
      );
}
export default Selaaminen;