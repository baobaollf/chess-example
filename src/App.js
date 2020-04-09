import React, {Component} from 'react';
import CustomList from "./CustomList";
import DayList from "./DayList";


const itemsFromBackend = [
  [{id: '1', name: "park"},
    {id: '2', name: "movie"},
    {id: '3', name: "bridge"},
    {id: '4', name: "airport"},
    {id: '5', name: "tower"}],
  [{ id: '1', name: "park" },
    { id: '2', name: "park" },
    { id: '3', name: "park" },
    { id: '4', name: "park" },
    { id: '5', name: "park" }],
  [{ id: '1', name: "tower" },
    { id: '2', name: "tower" },
    { id: '3', name: "tower" },
    { id: '4', name: "tower" },
    { id: '5', name: "tower" }],
  [{ id: '1', name: "airport" },
    { id: '2', name: "airport" },
    { id: '3', name: "airport" },
    { id: '4', name: "airport" },
    { id: '5', name: "airport" }],
  [{ id: '1', name: "tower" },
    { id: '2', name: "tower" },
    { id: '3', name: "tower" },
    { id: '4', name: "tower" },
    { id: '5', name: "tower" }]
  ];

const dayList = [
  { id: "0", name: "Day1"},
  { id: "1", name: "Day2"},
  { id: "2", name: "day3"},
  { id: "3", name: "day4"},
  { id: "4", name: "day5"},
];




class App extends Component {
  state =  {
    itemsFromBackend: itemsFromBackend,
    dayList: dayList,
    day: 0,
  }

  _changeDay = (item) => {
    this.setState({
      itemsFromBackend: itemsFromBackend,
      dayList: dayList,
      day: parseInt(item.id),
    })
    console.log(this.state.day)
  }
    render() {
        const items = this.state.itemsFromBackend[this.state.day];
        console.log(items)
        return (
            <div className="flexbox" >
              <DayList items={this.state.dayList}
                changeDay = {this._changeDay}
              />
              <CustomList items={items} day = {this.state.day}/>
            </div>
        );
    }
}

export default App