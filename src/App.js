import React, {Component} from 'react';
import CurrentDay from "./CurrentDay";
import DayOverView from "./DayOverView"


const itemsFromBackend = [
    {id: '1', name: "park"},
    {id: '2', name: "movie"},
    {id: '3', name: "bridge"},
    {id: '4', name: "airport"},
    {id: '5', name: "tower"}
];

const dayList = [
    {id: "dayOne", name: "day 1", items: itemsFromBackend},
    {id: "dayTwo", name: "day 2"},
    {id: "dayThree", name: "day 3"},
    {id: "dayFour", name: "day 4"},
    {id: "dayFive", name: "day 5"},
];


class App extends Component {

    render() {
        console.log("bola")
        return (

            <div className="flexbox" >

                <DayOverView items={dayList}/>

                <div style={{margin: 5}}>

                </div>
                <CurrentDay items={itemsFromBackend}/>


            </div>
        );
    }
}

export default App