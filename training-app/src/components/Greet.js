import React from 'react';

export class Greet extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    render(){
        return `Hello, ${this.props.user.name}! You work as a ${this.props.user.job}`
    }
}