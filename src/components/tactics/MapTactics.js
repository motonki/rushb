import React from 'react';
import alltactics from '../../tactics';

/*
This file does most of the heavy lifting and it has quite deep nested components.
There could be better way to do this, maybe by splitting components into their own files. Also reconsidering how data is provided
can help in this mess of code.
*/

function Step(props) {
    return(
        <>
        
        <a class="text-primary step" href={props.value.url} target="_blank" rel="noopener noreferrer">>{props.value.name}</a>
        </>
    )
}

function Steps(props) {
    const steps = props.steps.map((step) =>
        <Step key={step.name} value={step} />);
    return(
        <div>
            {steps}
        </div>
    );
}

function Phase(props) {
    return(
        <div>
            {props.value.description}
            <Steps steps={props.value.steps} />
        </div>
    );
}

function Phases(props) {
    const phases = props.phases.map((phase) =>
        <Phase key={phase.id} value={phase} />);
    return(
        <div>
            {phases}
        </div>
    );
}

function Tactic(props) {
    console.log(props.value.phases)
    return (
            <div class="tactic border rounded-sm">
            {props.value.name}
            <p>{props.value.description}</p>
            <Phases phases={props.value.phases}/>
        </div>
    );
}

function Tactics(props) {
    const rawTactics = props.tactics;
    const tactics = rawTactics.map((tactic) =>
        <Tactic key={tactic.name} value={tactic}/>);
    return (
        <div>
            {tactics}
        </div>
    );
}

/*
All the data is provided from a single .JSON file. This is very basic way of doing things.
It is not at very robust and is likely big pain in the ass to maintain. If this is going to be in
production use, data should be provided from some form of persistent storage and possibly through
some kind of API.
*/

class MapTactics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tactics: []};
        var mapname = this.props.name;
        var data = alltactics.filter(function (map) {
            return map.map == mapname;
        });
        this.state={tactics: data[0].tactics};
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onClick} class="btn btn-primary">Back to map list</button>
                <Tactics tactics={this.state.tactics} />
            </div>
        );
    }
}

export default MapTactics;