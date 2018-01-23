import React from 'react';

export class Ruins extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>The current location is {name}</h1>
      </div>
    );
  }
}
