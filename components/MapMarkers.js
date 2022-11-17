import React, {Component} from "react";
import { Marker } from 'react-native-maps';

class MapMarkers extends Component{
    constructor(){
        super()
        this.state = {markers: [],}
    }

    componentDidMount(){
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json')
            .then(response => response.json())
            .then(markersLocation => this.setState({ markers: markersLocation }));
    }
    defineColor(id){
        if(id === 1){
            return 'blue'
        }else if(id === 2){
            return 'green'
        }else if(id === 3){
            return 'yellow'
        }else if(id === 4){
            return 'orange'
        }else if(id === 5){
            return 'pink'
        }else if(id === 6){
            return 'purple'
        }else if(id === 7){
            return 'tan'
        }else if(id === 8){
            return 'teal'
        }else{
            return 'red'
        }
    }

    render() {
        return(
            <>
            {this.state.markers.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={{latitude : marker.latitude , longitude : marker.longitude}}
                  title={marker.name}
                  pinColor= {this.defineColor(marker.place_type_id)}
                />
              ))}
            </>
        )
    }
}

export default MapMarkers;