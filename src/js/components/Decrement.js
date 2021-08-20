import React from 'react';
import { connect } from 'react-redux';
import {decrementCount} from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        decrementCount:() => dispatch(decrementCount())
    }
}

function ConnectedDecrement(props) {
    return (
        <button type="button" onClick={()=>props.decrementCount()}>-</button>
    )
}

const Decrement = connect(null, mapDispatchToProps)(ConnectedDecrement);

export default Decrement;