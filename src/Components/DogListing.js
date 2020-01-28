import React, { useState } from 'react';
import { render } from '@testing-library/react';

export default function DogListing() {

    var petfinder = require("@petfinder/petfinder-js");
    const keyVal = "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4";
    const SecretVal = "ACCq1YmJ2XzZxT6WrvbSU9voepnbCllw0NmSF363";
    const pf = new petfinder.Client({apiKey: keyVal, secret: SecretVal});

    
    


    var types = []
    function onmouseOver(){
      pf.animalData.types()
      .then(resp => {
        for (var i of resp.data.types){
          types.push(i);
        }
      });
    }




    return (
      <div>
        <ol>
          
          {types.map(type => <li>{type}</li>)}
            
          
          
        </ol>
      </div>
    );
}