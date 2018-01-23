import React from 'react';

export class Ruins extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="curios">
        <h1>The current location is {name}</h1>
        <div>
        <table>
          <tbody>
            <tr>
              <td><img src="images/curios/ruins/alchemy-table.png" data-id="11" alt="Alchemy table" /></td>
              <td><img src="images/curios/ruins/altar-of-light.png" data-id="12" alt="Altar of light" /></td>
              <td><img src="images/curios/ruins/bookshelf.png" data-id="13" alt="Bookshelf" /></td>
              <td><img src="images/curios/ruins/confession-booth.png" data-id="14" alt="Confession booth" /></td>
              <td><img src="images/curios/ruins/decorative-urn.png" data-id="15" alt="Decorative urn" /></td>
              <td><img src="images/curios/ruins/holy-fountain.png" data-id="16" alt="Holy fountain" /></td>
              <td><img src="images/curios/ruins/iron-maiden.png" data-id="17" alt="Iron maiden" /></td>
              <td><img src="images/curios/ruins/locked-display-cabinet.png" data-id="18" alt="Locked display cabinet" /></td>
              <td><img src="images/curios/ruins/locked-sarcophagus.png" data-id="19" alt="Locked sarcophagus" /></td>
              <td><img src="images/curios/ruins/sarcophagus.png" data-id="20" alt="Sarcophagus" /></td>
              <td><img src="images/curios/ruins/suit-of-armor.png" data-id="21" alt="Suit of armor" /></td>
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
