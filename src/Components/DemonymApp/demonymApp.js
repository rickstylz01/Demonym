import React, { Component } from 'react';
import './demonymApp.css';
import Demonym from "../Demonym/demonym";
import CountrySelector from "../CountrySelector/countrySelector";

class DemonymApp extends Component {
  render() {
    return (
      <div className="demonym_app">
        <CountrySelector countries={[{name: "Barbados"}, {name:"Bahrain"}]} />
        <Demonym name="Barbadian" country="Barbados" />
      </div>
    );
  }
}

export default DemonymApp;