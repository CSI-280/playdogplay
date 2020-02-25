import React, { useState } from 'react';
import './StyledButton.css';

class StyledButton extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    let counterText;

    if(this.props.counter == "true")
    {
      counterText = <p>This feature doesn't work properly</p>
    }
    return (
      <div>
        {counterText}
        <button id={this.props.type}>{this.props.text}</button>
      </div>
    );
  }
}


export default StyledButton;

/*
function StyledButton(props) {
    const [count, setCount] = useState(0);
    let content = (<div>
        <button id={props.type}>
          {props.text}
        </button>
      </div>
    );

    return content;
}
*/
