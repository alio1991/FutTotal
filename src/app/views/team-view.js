import { LitElement, html } from 'lit-element';
import '../components/team-lineup.js';
import '../components/team-members';
import { lineupPlayers } from '../../../api/endpoints/lineup-players';
import { teamPlayers } from '../../../api/endpoints/team-players';

class TeamView extends LitElement {

  static get properties() {
    return {
      lineupPlayers: {
				type: Object
      },
      teamPlayers: {
				type: Object
			}
    };
  }
  constructor(){
    super();
    this.lineupPlayers = lineupPlayers;
    this.teamPlayers = teamPlayers;
  }
  render(){

    return html`
    <style>
      :host{
        width: 100%;
        height: 100%;
        background-color: blue;
        border: 3px solid black;
        z-index: 99999;

      }
      .panel{
        display: flex;
        justify-content: center;
        height: fit-content;
        background-color: blue;
        z-index: 1;
        margin: 10px;
      }
      team-lineup{
        width: 60%;
        padding: 5px;
        margin: 5px;
      }
      team-members{
        width: 30%;
        background-color: yellow;
        padding: 5px;
        margin: 5px;
      }
    </style>
      <h1>Equipo</h1>
      <div class="panel">
        <team-lineup .lineupPlayers="${this.lineupPlayers}"></team-lineup>
        <team-members .teamPlayers="${this.teamPlayers}"></team-members>
      </div>
    `;
  }
}
customElements.define('team-view', TeamView);