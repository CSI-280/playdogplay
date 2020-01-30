import React from 'react';
import PanelViewer from './PanelViewer';

//importing all pages
import Home from '../Panels/Home.js';
import FindPet from '../Panels/FindPet.js';
import About from '../Panels/About.js';
import LearnMore from '../Panels/LearnMore.js';
import Contact from '../Panels/Contact.js';

import './Panel.css'

const panels = {"Home":<Home/>, "Find a Pet":<FindPet/>, "About":<About/>, "LearnMore":<LearnMore/>, "Contact":<Contact/>};


//panel alllows us to change what page we are on by changing the html on the page, not navigating to a new page
//calls the plane Viewer with an a list of panels
function Panel() {
    return (
      <>

        <div className="header">
          <h1>PlayDogPlay</h1>
        </div>
        
        
        <PanelViewer panels={panels}/>
        
      
      
      </>
    );
  }
  
  export default Panel;