import React from 'react';

export class Weald extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="curios">
        <div className="button-box">
          <input type="button" className="short" data-id="7" value="Short" />
          <input type="button" className="med" data-id="8" value="Medium" />
          <input type="button" className="long" data-id="9" value="Long" />
          <div className="provisions-container">
            <img className="provdisplay" src=" " />
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src="images/curios/weald/ancient-coffin.png" data-id="31" alt="Ancient coffin" /></td>
                <td><img src="images/curios/weald/beast-carcass.png" data-id="32" alt="Beast carcass" /></td>
                <td><img src="images/curios/weald/eerie-spiderweb.png" data-id="33" alt="Eerie spiderweb" /></td>
                <td><img src="images/curios/weald/left-luggage.png" data-id="34" alt="Left luggage" /></td>
                <td><img src="images/curios/weald/mummified-remains.png" data-id="35" alt="Mummified remains" /></td>
                <td><img src="images/curios/weald/old-tree.png" data-id="36" alt="Old tree" /></td>
                <td><img src="images/curios/weald/pristine-fountain.png" data-id="37" alt="Pristine fountain" /></td>
                <td><img src="images/curios/weald/shallow-grave.png" data-id="38" alt="Shallow grave" /></td>
                <td><img src="images/curios/weald/travellers-tent.png" data-id="39" alt="Travellers tent" /></td>
                <td><img src="images/curios/weald/troubling-effigy.png" data-id="40" alt="Troubling effigy" /></td>
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
        <div className="msg-text">
          Your fate revealed:
          <div className="message">
            <ul>
              <li className="msg">
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
