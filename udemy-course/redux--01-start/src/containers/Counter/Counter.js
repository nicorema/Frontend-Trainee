import React, { Component } from "react";

import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import {
  increment,
  decrement,
  add,
  substract,
  storeResult,
  deleteResult
} from "../../store/actions/actions";
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
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map(element => (
            <li
              onClick={() => this.props.onDeleteResult(element.id)}
              key={element.id}
            >
              {element.value}
            </li>
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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubstractCounter: () => dispatch(substract(5)),
    onStoreResult: value => dispatch(storeResult(value)),
    onDeleteResult: id => dispatch(deleteResult(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
