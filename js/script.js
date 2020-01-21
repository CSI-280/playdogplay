
console.log('Script to be added in the future')

//pet finder API connection
var apikeyVal = "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4";
var secretVal = "ACCq1YmJ2XzZxT6WrvbSU9voepnbCllw0NmSF363";
const pf = new petfinder.Client({apiKey: apikeyVal, secret: secretVal}); //provided by professor chris


//pet finder API DATA Handeling
pf.animalData.types()
  .then(resp => {
    console.log(resp.data.types);
  });






//react testing
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      //return 'You liked this.';
      return e(
        'p',
        {},
        'You liked this!'
      );

    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
