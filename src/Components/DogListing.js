import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import {Client} from '@petfinder/petfinder-js';



const keyVal = "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4";
const SecretVal = "ACCq1YmJ2XzZxT6WrvbSU9voepnbCllw0NmSF363";

const pf = new Client({apiKey: keyVal, secret: SecretVal});

const DogListing = () =>  {
  
    const [petTypes, setPetTypes] = useState([]);
    
    
    useEffect(() => {
      pf.animalData.types()
      .then(resp => {
        setPetTypes(resp.data.types);
      });
    }, []);
   

    return (
      <div>
        <ol>
          
          {petTypes.map(type => <li>{type.name}</li>)}

          
        </ol>
      </div>
    );
}

export default DogListing;