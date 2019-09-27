import { LitElement, html } from "lit-element";

class TeamMembers extends LitElement{

	static get properties() {
		return {
		  teamPlayers: {
					type: Object
				}
		};
	  }

	render(){
		return html`
			<h3>Jugadores</h3>
			${this.teamPlayers.porteros.map(portero => html`<li>${portero.name}</li>`)}
			<p>---------------</p>
			${this.teamPlayers.defensores.map(defensa => html`<li>${defensa.name}</li>`)}
			<p>---------------</p>
			${this.teamPlayers.medios.map(medio => html`<li>${medio.name}</li>`)}
			<p>---------------</p>
			${this.teamPlayers.delanteros.map(delantero => html`<li>${delantero.name}</li>`)}
		`;
	}
}
customElements.define('team-members', TeamMembers);