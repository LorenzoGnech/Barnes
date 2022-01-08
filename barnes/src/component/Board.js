import React, { Component } from 'react'
import Chessboard from 'chessboardjsx'

import Engine from './Engine.js'

class Board extends Component {
  render() {
    return (
      <div style={style.boardsContainer}>
        <Engine>
          {({ position, onDrop }) => (
            <Chessboard
              id="stockfish"
              position={position}
              width={750}
              onDrop={onDrop}
              boardStyle={style.boardStyle}
              orientation="black"
              dropSquareStyle={style.dropSquareStyle}
              lightSquareStyle={{ backgroundColor: '#6e6d69' }}
              darkSquareStyle={{ backgroundColor: '#403d39' }}
            />
          )}
        </Engine>
      </div>
    )
  }
}

export default Board

const style = {
  boardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  boardStyle: {
    borderRadius: '5px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
  },

  dropSquareStyle: {
    boxShadow: 'inset 0 0 1px 4px black',
  },
}
