import { LitElement, html } from 'lit-element'
import { routerMixin } from './node_modules/lit-element-router/lit-element-router'

import './app-link';
import './app-main';

class MyApp extends routerMixin(LitElement) {

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object }
    }
  }

  static get routes() {
    return [{
      name: 'home',
      pattern: '',
      data: { title: 'Home' }
    }, {
      name: 'info',
      pattern: 'info'
    }, {
      name: 'user',
      pattern: 'user/:id'
    }, {
      name: 'not-found',
      pattern: '*'
    }];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
  }

  onRoute(route, params, query, data) {
    this.route = route;
    this.params = params;
    console.log(route, params, query, data)
  }

  render() {
    return html`
    	<script type="module" src="./src/app/views/main-view.js"></script>

      <app-link href="/">Home</app-link>
      <app-link href="/info">Info</app-link>
      <app-link href="/user/14">user/14</app-link>

      <app-main current-route=${this.route}>
          <main-view route='home'></main-view>
          <h1 route='info'>Info</h1>
          <h1 route='user'>User ${this.params.id} </h1>
          <h1 route='not-found'>Not Found </h1>
      </app-main>
    `
  }
}

customElements.define('my-app', MyApp);