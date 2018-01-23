import React from 'react';

export class Cove extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="curios">
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src="images/curios/cove/barnacle-crusted-chest.png" data-id="41" alt="Barnacle crusted chest" /></td>
                <td><img src="images/curios/cove/bas-relief.png" data-id="42" alt="Bas relief" /></td>
                <td><img src="images/curios/cove/brackish-tidepool.png" data-id="43" alt="Brackish tidepool" /></td>
                <td><img src="images/curios/cove/eerie-coral.png" data-id="44" alt="Eerie coral" /></td>
                <td><img src="images/curios/cove/fish-idol.png" data-id="45" alt="Fish idol" /></td>
                <td><img src="images/curios/cove/giant-fish-carcass.png" data-id="46" alt="Giant fish carcass" /></td>
                <td><img src="images/curios/cove/giant-oyster.png" data-id="47" alt="Giant oyster" /></td>
                <td><img src="images/curios/cove/ships-figurehead.png" data-id="48" alt="Ships figurehead" /></td>
              </tr>
              <tr>
                <td><img src="images/curios/all/crate.png" data-id="1" alt="Crate" /></td>
                <td><img src="images/curios/all/discarded-pack.png" data-id="2" alt="Discarded pack" /></td>
                <td><img src="images/curios/all/eldritch-altar.png" data-id="3" alt="Eldritch altar" /></td>
                <td><img src="images/curios/all/heirloom-chest.png" data-id="4" alt="Heirloom chest" /></td>
                <td><img src="images/curios/all/sack.png" data-id="6" alt="Sack" /></td>
                <td><img src="images/curios/all/sconce.png" data-id="7" alt="Sconce" /></td>
                <td><img src="images/curios/all/shamblers-altar.png" data-id="8" alt="Shambler's altar" /></td>
                <td><img src="images/curios/all/stack-of-books.png" data-id="9" alt="Stack of books" /></td>
                <td><img src="images/curios/all/locked-strongbox.png" data-id="10" alt="Unlocked strongbox" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
