import React, { Component } from "react";

import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionCreators from ".././../store/actions/index";
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
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubstractCounter: () => dispatch(actionCreators.substract(5)),
    onStoreResult: value => dispatch(actionCreators.storeResult(value)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
