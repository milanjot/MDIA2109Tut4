//use the same components to change the fontSize
// change the color (txt) of the header 
//change the onmouseover for the header 

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
style={{color:color, fontSize:fontSize}}>
    <h1 className="header" onMouseOver={onMouseOver} >Header</h1>
</div>


function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12, 
    color:"#000",
    onMouseOver: alert("Default Alert!") ,
}

export default Header;
