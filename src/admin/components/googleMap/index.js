import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375,
      },
    };
  }
  handleChange = (address) => {
    this.setState({ address });
    this.props.setIsClicked(false);
  };

  handleSelect = (address) => {
    this.setState({ address });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        // update center state
        this.setState({ mapCenter: latLng });
        this.props.setGoogleLatLong(latLng);
        const a = address;
        this.props.setaddress(a);
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div id="googleMaps">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Enter Address ...",
                  className: "input-google",
                })}
                style={{ color: "black" }}
              />
              <div
                className="autocomplete-dropdown-container"
                onClick={() => this.props.setIsClicked(true)}
              >
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? { cursor: "pointer" }
                    : { cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      style={{ background: "white", padding: "5px 10px" }}
                    >
                      <span style={{ color: "#283562", cursor: "pointer" }}>
                        {suggestion.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        {/* <Map 
            // style={{width: '20%', height: '30%'}}
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map> */}
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCEGEzsuyzx2xsKHdLo970rthA3b1Nkk0Q",
})(MapContainer);
