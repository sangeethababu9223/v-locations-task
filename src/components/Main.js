import { Component } from "react";
import axios from "axios";
import Locations from "./Locations/Locations";
// import locationsData from "../data/location-data"; //Dummy data used from file before Mock API

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsData: [],
    };
  }
  getLocations = (places) => {
    this.setState({
      locationsData: [...places],
    });
  };
  componentDidMount() {
    axios
      .get(`https://valtechtask.free.beeceptor.com/getLocations`)
      .then((res) => {
        let places = res.data;
        this.getLocations(places);
      })
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div
        className='valtech-locations__outer-wrapper'
        data-testid='valtechContainer'
      >
        <Locations places={this.state.locationsData} />
      </div>
    );
  }
}

export default Main;
