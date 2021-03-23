import React from 'react';
import Map from './components/Map.js';
import axios from 'axios';

import './App.css';
import 'leaflet/dist/leaflet.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRef: null,
      conflicts: []
    };
    this.handleMapRef = this.handleMapRef.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:1337/events')
      .then(data => {
        let conflicts = data.data.data;
        this.setState({
          conflicts: conflicts
        })
      })
  }

  handleMapRef(mapRef) {
    this.setState({
      mapRef: mapRef
    })
  }

  render() {
    return (
      <div className="App">
        <Map conflicts={this.state.conflicts} handleMapRef={this.handleMapRef} mapRef={this.state.mapRef}/>
      </div>
    );
  }
}

export default App;