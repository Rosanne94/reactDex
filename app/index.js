import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";

import * as models from './models'
import App from "./App"

const store = init({
  pkmn
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
