import React, { Component } from 'react';
import ListPizzas from '../components/list_pizza';
import ButtonAdd from '../components/button_add';

class App extends Component {

    render() {
      return (
        <div className="controls">
          <ButtonAdd />
          <ListPizzas />
        </div>
      );
    }
  }
  export default App;