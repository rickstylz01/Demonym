import React, { Component } from 'react';
import './demonymApp.css';
import Demonym from "../Demonym/demonym";
import CountrySelector from "../CountrySelector/countrySelector";

class DemonymApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        const countries = data
          .map(countryObj => countryObj.name);
        console.log(countries);
      });
  }

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