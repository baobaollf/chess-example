import React, {Component} from 'react';
import DayOverView from "./DayOverView"

const itemsFromBackend = [
    {id: '1', name: "park1"},
    {id: '2', name: "park2"},
    {id: '3', name: "park3"},
    {id: '4', name: "park4"},
    {id: '5', name: "park5"}
];

const itemsFromBackend2 = [
    {id: '1', name: "movie1"},
    {id: '2', name: "movie2"},
    {id: '3', name: "movie3"},
    {id: '4', name: "movie4"},
    {id: '5', name: "movie5"}
];

const itemsFromBackend3 = [
    {id: '1', name: "bridge1"},
    {id: '2', name: "bridge2"},
    {id: '3', name: "bridge3"},
    {id: '4', name: "bridge4"},
    {id: '5', name: "bridge5"}
];

const itemsFromBackend4 = [
    {id: '1', name: "airport1"},
    {id: '2', name: "airport2"},
    {id: '3', name: "airport3"},
    {id: '4', name: "airport4"},
    {id: '5', name: "airport5"}
];

const itemsFromBackend5 = [
    {id: '1', name: "tower1"},
    {id: '2', name: "tower2"},
    {id: '3', name: "tower3"},
    {id: '4', name: "tower4"},
    {id: '5', name: "tower5"}
];


const dayList = [
    {id: "dayOne", name: "day 1", poi: itemsFromBackend},
    {id: "dayTwo", name: "day 2", poi: itemsFromBackend2},
    {id: "dayThree", name: "day 3", poi: itemsFromBackend3},
    {id: "dayFour", name: "day 4", poi: itemsFromBackend4},
    {id: "dayFive", name: "day 5", poi: itemsFromBackend5},
];


class App extends Component {
    render() {
        return (
            <div className="flexbox" >
                <DayOverView items={dayList}/>


            </div>
        );
    }
}

export default App