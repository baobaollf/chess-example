import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

// a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//     const result = [...list];
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//     return result;
// };

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightblue",
    padding: 8,
    width: 250
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 ${8}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "lightpink",
    // styles we need to apply on draggables
    ...draggableStyle
});


class CurrentDay extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     items: this.props.items,
        // };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    re_order(list, start, end) {
        return this.props.reorder(list, start, end);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        } else {
            this.re_order(
                this.props.items,
                result.source.index,
                result.destination.index,
            )
        }
        // const items = this.props.reorder(
        //     this.props.items,
        //     result.source.index,
        //     result.destination.index,
        // );
        // this.setState({
        //     items: items,
        // });
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
                                {this.props.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="items-style"
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                {item.name}
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

export default CurrentDay;