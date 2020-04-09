import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import CurrentDay from "./CurrentDay";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    // let i = 0;
    // for (; i < result.length; i++) {
    //     result.name = `day${i}`;
    // }
    // console.log(result);
    return result;
};

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "blue",
    padding: 8,
    width: 100
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 ${8}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "pink",
    // styles we need to apply on draggables
    ...draggableStyle
});


class DayOverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index,
        );
        this.setState({
            items
        });
    }

    render() {
        return (
            <div className="flexbox">
                <DragDropContext onDragEnd={this.onDragEnd} className="dragDropContext">
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle()}
                            >
                                {this.state.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                onClick={() =>  {
                                                    console.log(item.poi)
                                                }}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="items-style"
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                {`day ${index}`}
                                                <CurrentDay items={item.poi}/>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

export default DayOverView;