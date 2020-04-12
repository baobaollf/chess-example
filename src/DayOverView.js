import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const getListStyle = isDraggingOver => ({
    //background: isDraggingOver ? "lightblue" : "blue",
    background: "white",
    padding: 8,
    width: 100,
    borderColor: '#000000',
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 ${8}px 0`,
    borderWidth: 200,
    borderColor: "black",
    borderRadius: 10,
    // change background colour if dragging
    background: isDragging ? "lightgreen" : '#e1e2da',

    // color: '#FFFFFF',
    // styles we need to apply on draggables
    ...draggableStyle
});


class DayOverView extends Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    re_order(list, start, end) {
        return this.props.reorder(list, start, end);
    }

    add(poi) {
        this.props.updateItem(poi);
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
                                                onClick={() => {
                                                    this.add(item.poi);
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
                                                {`Day ${index + 1}`}
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