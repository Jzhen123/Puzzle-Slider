import './App.css';
import React from 'react';
import Tile from './Tile'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileArray: []
    }
    this.won = false;

  }

  componentDidMount() {
    if (this.state.tileArray.length < 16) {
      let arr = [];
      for (let i = 0; i < 16; i++) {
        if (i === 0) {
          arr.push({
            id: i,
            currentPos: [Math.floor(i / 4), i],
            winPos: [Math.floor(i / 4), i],
            display: [Math.floor(i / 4), i],
            blank: true,
            clickable: false
          })
          continue;
        }
        arr.push({
          id: i,
          currentPos: [Math.floor(i / 4), i],
          winPos: [Math.floor(i / 4), i],
          display: [Math.floor(i / 4), i],
          blank: false,
          clickable: false
        })
      }
      this.setState({ tileArray: arr })

    }
  }

  move = (tile) => {
    if (this.logic(tile) === true) {
      let tempArr = this.state.tileArray.map(arr => { return { ...arr } })
      let blank = tempArr.find(object => object.blank === true)

      tempArr[tile.id].currentPos = this.state.tileArray[blank.id].currentPos
      tempArr[blank.id].currentPos = this.state.tileArray[tile.id].currentPos

      tempArr[tile.id].blank = this.state.tileArray[blank.id].blank
      tempArr[blank.id].blank = this.state.tileArray[tile.id].blank

      this.setState({ tileArray: tempArr })
    }
  }

  logic(tile) {
    let tempArr = this.state.tileArray.map(arr => { return { ...arr } })
    let blank = tempArr.find(object => object.blank === true)

    if (tile.display[0] === blank.display[0] && tile.display[1] === blank.display[1] + 1) {
      return true
    } else if (tile.display[0] === blank.display[0] && tile.display[1] === blank.display[1] - 1) {
      return true
    } else if (tile.display[0] === blank.display[0] - 1 && tile.display[1] === blank.display[1] - 4) {
      return true
    } else if (tile.display[0] === blank.display[0] - 1 && tile.display[1] === blank.display[1] + 4) {
      return true
    } else if (tile.display[0] === blank.display[0] + 1 && tile.display[1] === blank.display[1] - 4) {
      return true
    } else if (tile.display[0] === blank.display[0] + 1 && tile.display[1] === blank.display[1] + 4) {
      return true
    }
  }

  win() {
    for (let i = 0; i < this.state.tileArray.length; i++) {
      if (JSON.stringify(this.state.tileArray[i].currentPos) === JSON.stringify(this.state.tileArray[i].winPos)) {
        if (i === 15) {
          return true
        }
        continue;
      }
      console.log('Havent Won')
      return false;
    }
  }

  render() {
    if (this.state.tileArray.length < 1) {
      return null
    }
    return (
      <>
       
          {this.win() ? 
          <>
          <div>You Win!</div>
          </>
           : ""}
       
        <div id="Board" className="container pt-5">
          <div className="row">
            {
              this.state.tileArray.map((item, index) => {
                return (
                  <Tile
                    key={index}
                    pos={item.currentPos}
                    blank={item.blank}
                    move={this.move}
                    item={item}
                  />
                )
              })
            }
          </div>
        </div>
      </>
    )
  }

}
export default App;