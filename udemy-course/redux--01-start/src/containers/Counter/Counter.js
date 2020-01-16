import React, { Component } from "react";

import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionTypes from '../../store/actions';

class Counter extends Component {
  state = {
    counter: 0,
    results: []
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button onClick={()=>this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.results.map(element => (
            <li onClick={()=>this.props.onDeleteResult(element.id)}key={element.id}>{element.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterRdcr.counter,
    results: state.resultsRdcr.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubstractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
    onStoreResult: (value) => dispatch({ type: actionTypes.STORE_RESULT, result:value }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, idToRemove:id })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
