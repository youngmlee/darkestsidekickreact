import React from 'react';
import ReactDOM from 'react-dom';
import { Selector } from './selector';
import { Location } from './locationconditional'
import { Ruins } from './ruins';
import { Warrens } from './warrens';
import { Weald } from './weald';
import { Courtyard } from './courtyard';
import { Cove } from './cove';

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
        <div className = "table">
          <Location name={this.state.name} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <Display />,
  document.getElementById('app')
)
