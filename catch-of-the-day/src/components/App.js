import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  // initial state
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. Take a copy of the existing state (never muted the existing state)
    const fishes = {...this.state.fishes};
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state (overwrite the existing state)
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>

        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;










/* 
* Any custom function that needs to update state, 
* needs to live in the same component where the state lives
*/