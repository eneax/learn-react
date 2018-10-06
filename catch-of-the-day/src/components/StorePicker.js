import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.value.value;
    // 3. Change the store to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text"
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker;


/* 
* getFunName() --> runs immediately as soon as it mounts 
<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />

* ref --> allows us to reference a DOMNode on the page without using document.querySelector()
* In React, methods that we create need to be bind to our custom Components
*/


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