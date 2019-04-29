import React, {Component} from 'react';

export default class CalcOperation extends Component {
  render(){
    return (
      <div style={{display:'inline-block', minWidth: 20, minHeight:20, backgroundColor:'red'}}>
        <p>{this.props.calcOp}</p>
      </div>
    );
  }
}