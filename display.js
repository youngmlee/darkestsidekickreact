import React from 'react';
import ReactDOM from 'react-dom';
import { Selector } from './selector';
import { Ruins } from './ruins';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ruins' };
    this.changeName = this.changeName.bind(this)
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Selector onChange={this.changeName} />
        <Ruins name={this.state.name} />
      </div>
    );
  }
};

ReactDOM.render(
  <Display />,
  document.getElementById('app')
)
