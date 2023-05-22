
import React from 'react';

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
        };
    }

    handleClick(index) {
        const squares = [...this.state.squares];

        if (squares[index] || this.state.winner) {
            return;
        }

        squares[index] = this.state.currentPlayer;
        const winner = calculateWinner(squares);

        this.setState({
            squares: squares,
            currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
            winner: winner,
        });
    }

    renderSquare(index) {
        return (
            <button className="square" onClick={() => this.handleClick(index)}>
                {this.state.squares[index]}
            </button>
        );
    }

    render() {
        const status = this.state.winner ? 'Winner: ' + this.state.winner : 'Next Player: ' + this.state.currentPlayer;

        return (
            <div className="game">
                <div className="game-board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                <div className="game-info">{status}</div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default TicTacToe;


