import React from 'react';

export class Warrens extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="curios">
        <div className="button-box">
          <input type="button" className="short" data-id="4" value="Short" />
          <input type="button" className="med" data-id="5" value="Medium" />
          <input type="button" className="long" data-id="6" value="Long" />
          <div className="provisions-container">
            <img className="provdisplay" src=" " />
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src="images/curios/warrens/bone-altar.png" data-id="22" alt="Bone altar" /></td>
                <td><img src="images/curios/warrens/dinner-cart.png" data-id="23" alt="Dinner cart" /></td>
                <td><img src="images/curios/warrens/makeshift-dining-table.png" data-id="24" alt="Makeshift dining table" /></td>
                <td><img src="images/curios/warrens/moonshine-barrel.png" data-id="25" alt="Moonshine barrel" /></td>
                <td><img src="images/curios/warrens/occult-scrawlings.png" data-id="26" alt="Occult scrawlings" /></td>
                <td><img src="images/curios/warrens/pile-of-bones.png" data-id="27" alt="Pile of bones" /></td>
                <td><img src="images/curios/warrens/pile-of-scrolls.png" data-id="28" alt="Pile of scrolls" /></td>
                <td><img src="images/curios/warrens/rack-of-blades.png" data-id="29" alt="Rack of blades" /></td>
                <td><img src="images/curios/warrens/sacrificial-stone.png" data-id="30" alt="Sacrificial stone" /></td>
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
