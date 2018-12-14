import React from 'react';
import PropTypes from 'prop-types'; 

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };
  
  createFish = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Create fish
    const fish = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value), // everything stored in cents
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value
    }
    this.props.addFish(fish);
    // 3. Refresh form
    event.currentTarget.reset();
  }

  render() {
    return (
      <div className="AddFishForm">
        <form className="fish-edit" onSubmit={this.createFish}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" ></textarea>
          <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
          <button type="submit">+ Add Fish</button>
        </form>
      </div>
    )
  }
}

export default AddFishForm;
