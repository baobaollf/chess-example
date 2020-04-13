import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import DeleteIcon from '@material-ui/icons/Delete';


const getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? "lightblue" : "lightblue",
    background: 'white',
    padding: 8,
    width: 250,
    position: "absolute",
    overflow: "auto",
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer

    userSelect: "none",
    position: 'relative',
    padding: 10,
    margin: `0 0 ${8}px 0`,
    borderRadius: 10,
    // change background colour if dragging
    background: isDragging ? "lightgreen" : '#fffeec',
    // background: '#FA6585',
    // color: '#FFFFFF',
    // styles we need to apply on draggables
    ...draggableStyle
});


class CurrentDay extends Component {
    constructor(props) {
        super(props);
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
    }

    render() {
        return (
            <div className="flexbox">
                <DragDropContext onDragEnd={this.onDragEnd} className="dragDropContext">
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                className="dayList-style"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle()}
                            >
                                {this.props.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index} >
                                        {(provided, snapshot) => (
                                            <div
                                                // onClick={() => console.log(item.name)}
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
                                                <DeleteIcon
                                                    className="deleteIcon"
                                                    onClick={() => {
                                                    this.props.deleteItem(index);
                                                }}
                                                    style={{
                                                        position: 'absolute',
                                                        right: 10,
                                                        top: 5,
                                                    }}
                                                />
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