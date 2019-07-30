import React from 'react';
import MapGrid from './MapGrid'
import MapTactics from './MapTactics'

class TacticBook extends React.Component {
    constructor(props) {
        super(props);
        this.handleToMapsClick = this.handleToMapsClick.bind(this);
        this.handleToTacticsClick = this.handleToTacticsClick.bind(this);
        this.state = {isInMaps: true};
    }

    handleToMapsClick() {
        this.setState({isInMaps: true});
    }

    handleToTacticsClick(name) {
        this.setState({isInMaps: false});
        this.setState({mapname:name.currentTarget.innerText});
    }
    render() {
        const isInMaps = this.state.isInMaps;
        let element;        
        if (isInMaps) {
            element = <MapGrid onClick={this.handleToTacticsClick}/>
        } else {
            element = <MapTactics onClick={this.handleToMapsClick} name={this.state.mapname}/>
        }
        return (
            <div>
                {element}
            </div>
        );
    }
}

export default TacticBook;