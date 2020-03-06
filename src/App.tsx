import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/index";
import Communities from "./components/Communities";

function App() {
  return (
    <Provider store={store}>
      <Communities />
    </Provider>
  );
}

export default App;
