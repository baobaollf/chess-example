import React, {Component} from 'react';

class Board extends Component {

    drop = (e) => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData('card_id');
      const card = document.getElementById(card_id);
      card.style.display = 'block';
      e.target.appendChild(card);
    };

    dragOver = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div onDrop = {this.drop}
                 id = {this.props.id}
                 className = {this.props.className}
                 onDragOver = {this.dragOver}>

                {this.props.children}
            </div>
        );
    }
}

export default Board;