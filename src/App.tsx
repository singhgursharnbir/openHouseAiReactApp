import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/index";
import Communities from "./components/Communities";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Communities />
      <Footer />
    </Provider>
  );
}

export default App;
