import React from 'react';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="locations"
          onChange={this.handleChange}>

          <option value="Ruins">Ruins</option>
          <option value="Warrens">Warrens</option>
          <option value="Weald">Weald</option>
          <option value="Cove">Cove</option>
          <option value="Courtyard">Courtyard</option>
          </select>
      </div>
    );
  }
}
