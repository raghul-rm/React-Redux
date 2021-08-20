import React from 'react';
import {connect} from 'react-redux';
import {incrementCount} from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        incrementCount:() => dispatch(incrementCount())
    }
}

function ConnectedIncrement(props) {
    return (
        <button type="button" onClick={()=>props.incrementCount()}>+</button>
    )
}

const Increment = connect(null, mapDispatchToProps)(ConnectedIncrement);

export default Increment;