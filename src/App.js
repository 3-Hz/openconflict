import React from 'react';
import Map from './components/Map.js';
import axios from 'axios';
import moment from 'moment';

import './App.css';
import 'leaflet/dist/leaflet.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      mapRef: null,
      // fGroupRef: null,
      conflicts: [],
      countryData: [],
      startDate: moment().subtract(1, 'months').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    };
    this.onCountryClick = this.onCountryClick.bind(this);
    this.handleMapRef = this.handleMapRef.bind(this);
    this.handleFGroupRef = this.handleFGroupRef.bind(this);
  }

  componentDidMount() {
    // axios.get('http://localhost:1337/countries')
    //   .then(data => {
    //     let countryData = data.data.data;
    //     this.setState({
    //       countryData: countryData
    //     })
    //   })
  }

  handleMapRef(mapRef) {
    this.setState({
      mapRef: mapRef
    })
  }

  // handleFGroupRef(fGroupRef) {
  //   this.setState({
  //     fGroupRef: fGroupRef
  //   })
  // }

  onCountryClick(layer) {
    this.state.mapRef.fitBounds(layer.getBounds());
    axios.get('http://localhost:1337/events/' + layer.feature.properties.ISO_A3 + '/' + this.state.startDate + '|' + this.state.endDate)
    .then(data => {
      let conflicts = data.data.data;
      this.setState({
        conflicts: conflicts
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Map
          countryData={this.state.countryData}
          conflicts={this.state.conflicts}
          onCountryClick={this.onCountryClick}
          handleMapRef={this.handleMapRef}
          // handleFGroupRef={this.handleFGroupRef}
          mapRef={this.state.mapRef}
        />
      </div>
    );
  }
}

export default App;