import React, {Component} from 'react';
import CustomList from "./CustomList";


const itemsFromBackend = [
    {id: '1', name: "park"},
    {id: '2', name: "movie"},
    {id: '3', name: "bridge"},
    {id: '4', name: "airport"},
    {id: '5', name: "tower"}
];

const dayList = [
    {id: "dayOne", dayNumber: 1, items: itemsFromBackend},
    {id: "dayTwo", dayNumber: 2},
    {id: "dayThree", dayNumber: 3},
    {id: "dayFour", dayNumber: 4},
    {id: "dayFive", dayNumber: 5},
];


class App extends Component {
    render() {
        return (
            <div className="flexbox" >
                <CustomList items={itemsFromBackend} dayList={dayList}/>

                <CustomList/>
            </div>
        );
    }
}

export default App