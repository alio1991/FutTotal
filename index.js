import { LitElement, html } from 'lit-element'
import { routerMixin } from './node_modules/lit-element-router/lit-element-router'

import './app-link';
import './app-main';
import './src/app/views/main-view.js';
import './src/app/views/market-view.js';
import './src/app/views/team-view.js';

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
      name: 'team',
      pattern: 'team'
    }, {
      name: 'market',
      pattern: 'market',
    },{
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
        background-color: blue;
        height: fit-content;
        z-index: -1;
     }
    
    .menu-element{
      padding: 2px;
      margin: 2px;
      background-color: white;
    }

    .menu-element > a:link{
      text-decoration: none;
      color: purple;
      height: 100px;
    }
    
    .menu-bar{
      display: flex;
      justify-content: flex-start;
    }
    /* .menuOption{
      z-indez
    } */
    </style>
      <div class="menu-bar">
          <app-link class="menu-element" href="/home"> Home </app-link>
          <app-link class="menu-element" href="/team"> Alineacion</app-link>
          <app-link class="menu-element" href="/market"> Tienda </app-link>
      </div>

      <app-main current-route=${this.route}>
        <main-view route='home'></main-view>
        <team-view route='team'></team-view>
        <market-view route='market'></market-view>
        <h1 route='not-found'> Dirección Erronea </h1>
      </app-main>
    `
  }
}

customElements.define('router-outlet', RouterOutlet);