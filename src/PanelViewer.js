import React, { useState } from "react";
import './PanelViewer.css'

//dont touch, it works, very confusing
//does the changeing of pages for us

const PanelViewer = ({panels}) => {
    const [activePanel, setActivePanel] = useState('Home');
    const keys = Object.keys(panels);

    const handleClick = key => () => setActivePanel(key); 
    
    return (
        <>
        <div id="navbar">
            {keys.map(key => <a href="#" onClick={handleClick (key)} key={key} className="navbar" id={"navbar"+(keys.indexOf(key)+1)}>{key}</a>)}
        </div>
        {panels[activePanel]}
        </>
    );
};


export default PanelViewer;