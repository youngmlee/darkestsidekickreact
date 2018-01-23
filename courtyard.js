import React from 'react';

export class Courtyard extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="curios">
        <div>
          <table>
            <tbody>
              <tr>
                <td><img src="images/curios/courtyard/bloodflowers.jpg" data-id="49" alt="Bloodflowers" /></td>
                <td><img src="images/curios/courtyard/damned-fountain.jpg" data-id="50" alt="Damned fountain" /></td>
                <td><img src="images/curios/courtyard/disturbing-diversion.jpg" data-id="51" alt="Disturbing diversion" /></td>
                <td><img src="images/curios/courtyard/forgotten-delicacies.jpg" data-id="52" alt="Forgotten delicacies" /></td>
                <td><img src="images/curios/courtyard/hooded-shrew.png" data-id="53" alt="Hooded shrew" /></td>
                <td><img src="images/curios/courtyard/pile-of-strange-bones.jpg" data-id="54" alt="Pile of strange bones" /></td>
                <td><img src="images/curios/courtyard/throbbing-coccoons.jpg" data-id="55" alt="Throbbing coccoons" /></td>
                <td><img src="images/curios/courtyard/thronging-hive.jpg" data-id="56" alt="Thronging hive" /></td>
                <td><img src="images/curios/courtyard/wine-crate.jpg" data-id="57" alt="Wine crate" /></td>
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
