import React, { useState, useEffect } from 'react';
import pf from '../PetFinderClient';

const SingleDogListing = () =>  {
  
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
          {petTypes.map(type => <li key = {type.name}>{type.name}</li>)}
        </ol>
      </div>
    );
}

export default SingleDogListing;