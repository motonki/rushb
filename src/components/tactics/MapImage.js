import React from 'react';
import Inferno from '../../inferno.png';
import Mirage from '../../mirage.png';
import Overpass from '../../overpass.png';

class MapImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rightIcon: []};
        var mapname = this.props.name;
        var mapIcons = [Inferno, Mirage, Overpass];
        var rightIcon = mapIcons.filter(function (map) {
            return map.split('/')[3].split('.')[0] === mapname.toLowerCase();
        });
        this.state = {mapImage:rightIcon[0]};
    }
    render() {
        return (
            <div className="MapImage" onClick={this.props.onClick}>
                <h3>{this.props.name}</h3>
                <img src={this.state.mapImage} alt="Map icon" height="198px" />
            </div>
        );
    }
}

export default MapImage;