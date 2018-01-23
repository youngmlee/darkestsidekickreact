import React from 'react';
import { Ruins } from './ruins';
import { Warrens } from './warrens';
import { Weald } from './weald';
import { Courtyard } from './courtyard';
import { Cove } from './cove';

export class Location extends React.Component {

  selectLocation(){
    let imageTable;
    const name = this.props.name;
    if (name === 'Ruins') {
      imageTable = <Ruins />
      return imageTable;
    } else if (name === 'Warrens') {
      imageTable = <Warrens />
      return imageTable;
    } else if (name === 'Weald') {
      imageTable = <Weald />
      return imageTable;
    } else if (name === 'Cove') {
      imageTable = <Cove />
      return imageTable;
    } else if (name === 'Courtyard') {
      imageTable = <Courtyard />
      return imageTable;
    }
  }

  render() {
    return(
      <div>
        { this.selectLocation() }
      </div>
    )
  }
}
