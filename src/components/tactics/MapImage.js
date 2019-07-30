import React from 'react';

class MapImage extends React.Component {
    render() {
        return (
            <div className="MapImage" onClick={this.props.onClick}>
                <h3>{this.props.name}</h3>
                <img src={`/${this.props.name}.png`} alt="Map icon" height="198px" />
            </div>
        );
    }
}

export default MapImage;