import { LitElement, html } from 'lit-element'
import { routerMixin } from './node_modules/lit-element-router/lit-element-router'
// import { MainView } from './src/app/views/main-view.js'

import './app-link';
import './app-main';

class RouterOutlet extends routerMixin(LitElement) {

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object }
    }
  }

  static get routes() {
    return [{
      name: 'home',
      pattern: 'home',
      data: { title: 'Home' }
    }, {
      name: 'lineup',
      pattern: 'lineup'
    }, {
      name: 'market',
      pattern: 'market'
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
    <style>
      :host {
      display: block;
    }
    
    .menu-element{
      padding: 2px;
      margin: 2px;
      background-color: white;
    }

    .menu-element > a:link{
      text-decoration: none;
      color: white;
    }

    .menu-bar{
      display: flex;
      justify-content: flex-start;
    }
    </style>
      <main-view></main-view>
      <div class="menu-bar">
          <app-link class="menu-element" href="/home"> Home </app-link>
          <app-link class="menu-element" href="/lineup"> Alineacion</app-link>
          <app-link class="menu-element" href="/market"> Tienda </app-link>
      </div>

      <app-main current-route=${this.route}>
        <div route='home'>
          <p>MAIN</p>
          <main-view></main-view>
        </div>
        <div route='lineup'>
          <p>LINEUP</p>
        </div>
        <div route='market'>
          <p>MARKET</p>
        </div>
        <h1 route='not-found'> Not Found </h1>
      </app-main>
    `
  }
}

customElements.define('router-outlet', RouterOutlet);