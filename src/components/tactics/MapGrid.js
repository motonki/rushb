import React from 'react';
import MapImage from './MapImage';

class MagGrid extends React.Component {
    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-sm">
              <MapImage name="Inferno"  onClick={this.props.onClick}/>
              </div>
              <div class="col-sm">
              <MapImage name="Mirage"  onClick={this.props.onClick}/>
              </div>
              <div class="col-sm">
              <MapImage name="Overpass"  onClick={this.props.onClick}/>
              </div>
            </div>
          </div>
        );
    }
}

export default MagGrid;