import { LitElement, html } from 'lit-element';

class MainView extends LitElement {

  render(){

    return html`
      <h1>LINEUP</h1>
    `;
  }
}
customElements.define('main-view', MainView);