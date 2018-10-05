import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // every class needs at least one method inside
  render() {
    // the return method can return only one element
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker;



/*
use React.Fragment, so you won't have all those divs

<React.Fragment>
  <p>Fish</p>
  <form className="store-selector">
    <h2>Please Enter A Store</h2>
    <input type="text" required placeholder="Store Name" />
    <button type="submit">Visit Store</button>
  </form>
</React.Fragment>

*/ 