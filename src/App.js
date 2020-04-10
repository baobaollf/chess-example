import React, {Component} from 'react';
import DayOverView from "./DayOverView"
import CurrentDay from "./CurrentDay";

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
    constructor(props) {
        super(props);
        this.state = {
            dayList: dayList,
            currentDayList: dayList[1].poi,
        };
        // this.updateItem = this.updateItem.bind(this);
    }

    updateItem(list) {
        this.setState({
            currentDayList: list,
        });
    }

    reorder(list, startIndex, endIndex) {
        const result = this.state.currentDayList;
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        this.setState({
            currentDayList: result,
        });
        console.log(this.state.currentDayList)
    }

    reorder_day(list, startIndex, endIndex) {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        this.setState({
            dayList: result,
        });
    }

    render() {
        // console.log(this.state.currentDayList);
        return (
            <div className="flexbox" >
                <DayOverView
                    items={this.state.dayList}
                    updateItem={this.updateItem.bind(this)}
                    reorder={this.reorder_day.bind(this)} />

                <CurrentDay
                    items={this.state.currentDayList}
                    reorder={this.reorder.bind(this)} />
            </div>
        );
    }
}

export default App
