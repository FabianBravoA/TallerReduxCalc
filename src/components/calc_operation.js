import React, {Component} from 'react';
import {connect} from 'react-redux';
import { calcOperation } from '../actions/calcActions';

class CalcOperation extends Component {
  render(){
    return (
      <div onClick={()=>{this.props.doOperation(this.props.calcOp)}} style={{display:'inline-block', minWidth: 20, minHeight:20, backgroundColor:'red'}}>
        <p>{this.props.calcOp}</p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state
});

const mapActionToProps = dispatch => ({
  doOperation: calcOperation(dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(CalcOperation);