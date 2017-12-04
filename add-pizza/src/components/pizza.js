import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleDeletePizza } from '../actions'

class Pizza extends Component {
    render() {
        // console.log(this.props.pizza)
        const pizzas = this.props.pizzas;
        const { id } = this.props.pizza;
        const display = this.props.pizza.visible ? "inline-block" : "none";
            return (
                <li className="pizza" style={{ display }}>
                <p>{id}</p>
                <span onClick={() => this.props.handleDeletePizza(id)}>X</span>
              </li>
            );
        
    }
}

function mapStateToProps(state){
    return {
        pizzas: state.pizzas
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({handleDeletePizza}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Pizza);