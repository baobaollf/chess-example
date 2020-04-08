import React, {Component} from 'react';

class Card extends Component {

    dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
        console.log(target)

    };

    dragOver = (e) => {
        e.stopPropagation();
    };
    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                draggable="true"
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
            >
                {this.props.id}
                {this.props.children}
            </div>
        );
    }
}

export default Card;