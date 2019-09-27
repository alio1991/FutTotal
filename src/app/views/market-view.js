import { LitElement, html } from 'lit-element';

class MarketView extends LitElement {

  render(){

    return html`
      <h1>Mercado de Jugadores</h1>
    `;
  }
}
customElements.define('market-view', MarketView);