import React, { Component } from 'react';

class Cat extends Component {


conditionalCat = () => {
  if (this.props.className === 'side-bar-cat') {
    return (
      <div className = {this.props.className}>
      <img onClick = {() => {this.props.handleCatClick(this.props.cat)}}
      src = {this.props.cat.cat_img}
      alt = 'this a cat'/>
      <h1>{this.props.cat.name}</h1>
      </div>
    )
  }


  else if (this.props.className === 'cafe-cat'){
    return (
      <div className = {this.props.className} >
      <img onClick = {() => {this.props.handleCatClick(this.props.cat)}}
      src = {this.props.cat.cat_img}
      alt = 'this a cafe cat' />
      <h1>{this.props.cat.personality}</h1>
      </div>
      )
  }}

  render(){
    return(
      <cat>
      {this.conditionalCat()}
      </cat>
    )}

  }

export default Cat;
