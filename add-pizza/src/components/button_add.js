import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { handleClickAdd } from '../actions';
import { connect } from 'react-redux';

class ButtonAdd extends Component {
    render() {
        const { pizzas } = this.props;
        return <button onClick={() => this.props.handleClickAdd(pizzas.length)}>Add</button>
    }
}

function mapStateToProps(state) {
    return {
        pizzas: state.pizzas
    }
}


export default connect(mapStateToProps, { handleClickAdd })(ButtonAdd);