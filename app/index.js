require("babel-core/register");
require("babel-polyfill");
import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import {pkmns} from './models/pkmn.js'
import App from './App.js'

const store = init({
  models:{
    pkmns
  }
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
