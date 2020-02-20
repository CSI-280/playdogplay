import {Client} from '@petfinder/petfinder-js';

const keyVal = "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4";
const SecretVal = "ACCq1YmJ2XzZxT6WrvbSU9voepnbCllw0NmSF363";

export default new Client({apiKey: keyVal, secret: SecretVal});

//allows us to use the client by importing the clint via this file