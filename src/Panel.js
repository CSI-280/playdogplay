import React from 'react';
import PanelViewer from './PanelViewer';

//importing all pages
import Home from './panels/Home';
import FindPet from './panels/FindPet';
import About from './panels/About';
import LearnMore from './panels/LearnMore';
import Contact from './panels/Contact';

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
        
        <div className="grid-container">
          <PanelViewer panels={panels}/>
        </div>
      
      
      </>
    );
  }
  
  export default Panel;