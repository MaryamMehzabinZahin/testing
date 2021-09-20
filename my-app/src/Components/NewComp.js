import React, { Component } from 'react';
import im1 from './im1.jpg';
import im2 from './im2.png';


export class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"welcome to m&m",
             sub:"subscribe",
             imUrl:im1
        };
    }
    
    styles={
        color: "purple"
      };
    Change = () =>
    {
        this.setState({sub:"thanks", message:"M&M Family"})
     };
     imgchange = () =>
     {
         this.setState({imUrl:im2})
     };
    render() {
        return (
            <div>
                <h1>hi {this.props.name}</h1>
                <h3 style={this.styles}>
                    {this.state.message}
                </h3>
                <button onClick={this.Change}>{this.state.sub}</button>
                <p/>
                    <img style={{width:"50px",hight:"50px"}} src={this.state.imUrl} onClick={this.imgchange} alt=""/>
                
            </div>
        )
    }
}

export default NewComp
