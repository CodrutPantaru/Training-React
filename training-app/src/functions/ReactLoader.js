import React from 'react';
import logo from '../logo.svg';

export function ReactLoader(props){
    return(
        <img src={logo} className={props.reverse ? "App-logo" : "App-logo-reverse"} alt="logo" />
    )
    
}