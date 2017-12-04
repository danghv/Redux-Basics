import React, { Component } from 'react';
import Pizza from '../components/pizza';
import { connect } from 'react-redux';

class ListPizzas extends Component {

  renderListPizza() {
    return this.props.pizzas.map((pizza, index) => {
      return (
        <Pizza pizza={pizza} key={pizza.id}/>
      );
    })
  }

  render() {
    const pizzas = this.props.pizzas;
    console.log(pizzas)
    return (
      <ul className="pizza-list">
        {this.renderListPizza()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {pizzas: state.pizzas}
}

export default connect(mapStateToProps)(ListPizzas);