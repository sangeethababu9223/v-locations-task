import { Component } from "react";
import Location from "../Location/Location";
class Locations extends Component {
  render() {
    const { places } = this.props;
    return (
      <div className='valtech-locations__inner-wrapper'>
        {places.map((place, index) => {
          return <Location key={index} place={place} index={index + 1} />;
        })}
      </div>
    );
  }
}

export default Locations;
