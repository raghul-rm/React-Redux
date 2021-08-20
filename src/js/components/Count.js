import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {count:state.count};
}

const countWrapper = props => {
    return (
        <>
        <p>{props.count}</p>   
        </>
    )
}

const Count = connect(mapStateToProps)(countWrapper);

export default Count;