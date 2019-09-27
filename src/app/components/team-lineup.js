import { LitElement, html, css } from "lit-element";
// import { lineupPlayers } from '../../../api/endpoints/lineup-players';

class TeamLineup extends LitElement {
	static get properties() {
    return {
      lineupPlayers: {
				type: Object
			}
    };
  }
	static get styles() {
		return css`
		  .football-field{
				background: lightgreen url("../../src/assets/images/football-field.jpg") no-repeat;
				background-size: 100% 100%;
				width: 100%;
				height: 100%;
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: 1fr 1fr 1fr 1fr;
				grid-template-areas: "por" 
															"def" 
															"med" 
															"del";				
			}
			
		  .porteria{
			  grid-area: por;
				width: 100%;
				display: flex;
				justify-content: space-around;
		  }
		  .defensa{
				grid-area: def;
				width: 100%;
				display: flex;
				justify-content: space-around;
			}
			.medio{
				grid-area: med;
				width: 100%;
				display: flex;
				justify-content: space-around;
			}
			.delantera{
				grid-area: del;
				width: 100%;
				display: flex;
				justify-content: space-around;
			}
			.player{
				text-align: center;
				border: 3px solid black;
				border-radius: 5px;
				padding: 2px;
				width: 90px;
				background-color: rgba(255,255,255,.4);
				margin: 5px 0;
			}
	`};

	firstUpdated(){
		console.log(this.lineupPlayers);
	}

	render() {
		return html`
			<h3>Alineación</h3>
			<div class="football-field">
				<div class="porteria">
					${this.lineupPlayers.porteros.map(portero => html`<div class="player" id="${portero.id}" name="${portero.name}" position="por" @click="${this.displaySubstitutes}">${portero.name}</div>`)}
				</div>
				<div class="defensa">
					${this.lineupPlayers.defensores.map(defensa => html`<div class="player" id="${defensa.id}" name="${defensa.name}" position="def" @click="${this.displaySubstitutes}">${defensa.name}</div>`)}
				</div>
				<div class="medio">
					${this.lineupPlayers.medios.map(medio => html`<div class="player" id="${medio.id}" name="${medio.name}" position="med" @click="${this.displaySubstitutes}">${medio.name}</div>`)}
				</div>
				<div class="delantera">
					${this.lineupPlayers.delanteros.map(delantero => html`<div class="player" id="${delantero.id}" name="${delantero.name}" position="del" @click="${this.displaySubstitutes}">${delantero.name}</div>`)}
				</div>
			
			</div>
		`;
	}
	
	displaySubstitutes(elem){
		console.log(elem.path[0].getAttribute('name')+': '+elem.path[0].getAttribute('position'));

	}
}
customElements.define('team-lineup', TeamLineup);