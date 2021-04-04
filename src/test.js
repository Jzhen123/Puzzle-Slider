import './App.css';
import React from 'react';
import Tile from './Tile'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileArray: []
    }
  }

  // Populating my tileArray with all the tiles with their props
  componentDidMount() {
    if (this.state.tileArray.length < 16) {
      let arr = [];
      for (let i = 0; i < 16; i++) {
        arr.push({
          id: i,
          currentPos: [Math.floor(i / 4), i],
          winPos: [Math.floor(i / 4), i],
          display: [Math.floor(i / 4), i],
          blank: false,
          clickable: false
        })
        if (i === 0) { // Always makes the first tile blank
          arr[0].blank = true
        }
      }
      this.setState({ tileArray: arr })
    }
  }

  // Move function that creates a shallow copy. Then finds the Tile object that is currently blank. Then swaps the Clicked Tile with the Blank Tile
  move = (tile) => {
    if (this.logic(tile) === true) { // Uses Logic function to check if we can swap
      let tempArr = this.state.tileArray.map(arr => { return { ...arr } }) // Shallow Copy
      let blank = tempArr.find(object => object.blank === true) // Finding the object that is blank

      tempArr[tile.id].currentPos = this.state.tileArray[blank.id].currentPos // Switches Clicked Tiles' Current Position with the Blank Tiles'
      tempArr[blank.id].currentPos = this.state.tileArray[tile.id].currentPos // Switches Blank Tiles' Current Position with the Clicked Tiles'

      tempArr[tile.id].blank = this.state.tileArray[blank.id].blank // Sets Clicked Tiles' blank property to true
      tempArr[blank.id].blank = this.state.tileArray[tile.id].blank // Sets Blank Tiles' blank property to false

      this.setState({ tileArray: tempArr }) // Sets shallow copy to current state
    }
  }

  // Logic Function that takes a Tile Object as a parameter and then returns true if a move is legal
  logic(tile) {
    let tempArr = this.state.tileArray.map(arr => { return { ...arr } }) //Don't need this
    let blank = tempArr.find(object => object.blank === true)

    // Very Wet Code but didn't know exactly how to make it shorter
    if (tile.display[0] === blank.display[0] && tile.display[1] === blank.display[1] + 1) { // Lets you move right one tile if you are on the same row
      return true
    } else if (tile.display[0] === blank.display[0] && tile.display[1] === blank.display[1] - 1) { // Lets you move left one tile if you are on the same row
      return true
    } else if (tile.display[0] === blank.display[0] - 1 && tile.display[1] === blank.display[1] - 4) { //Lets you move up one tile if you are on row below the tile and its 4 indexes to the left in the array
      return true
    } else if (tile.display[0] === blank.display[0] + 1 && tile.display[1] === blank.display[1] + 4) { //Lets you move down one tile if you are on row below the tile and its 4 indexes to the right in the array
      return true
    }
  }

  // Win Function that checks if all Tiles' currentPos property is equal to their winPos property
  win() {
    for (let i = 0; i < this.state.tileArray.length; i++) {
      if (JSON.stringify(this.state.tileArray[i].currentPos) === JSON.stringify(this.state.tileArray[i].winPos)) { // Used stringify cause it took more code to set 2 nested arrays === to eachother a normal way
        if (i === 15) return true
      } else return false;
    }
  }

  // Shuffle Function that only runs once for some reason. For Loop was a weird interaction with this that I don't understand
  shuffle = () => {
    for (let i = 0; i < 30; i++) {
      this.move(this.state.tileArray[(Math.floor(Math.random() * 16))])
    }
  }

  render() {
    return (
      <>
      <h1 className="text-center pt-4">Sliding Puzzle</h1>
        <div id="Board" className="container pt-3 pb-5 text-center">  {/* Board Container */}
          {this.win() ? <h2 className="p-1">You Win!</h2> : ""} {/* Displays If you Win */}
          <div className="row">
            {this.state.tileArray.map((item, index) => {
              return (
                <Tile
                  key={index}
                  pos={item.currentPos}
                  blank={item.blank}
                  move={this.move}
                  item={item}
                />
              )
            })}
            <button type="button" onClick={this.shuffle} className="btn btn-primary">Shuffle</button> {/* Shuffle Button */}
          </div>
        </div>
      </>
    )
  }
}
export default App;