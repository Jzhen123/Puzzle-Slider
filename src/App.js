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
        arr.push(i);
      }
      this.setState({ tileArray: arr })
    }
  }

  move = (tile) => {
    if (this.logic(tile) === true) {
      let temp = [...this.state.tileArray];

      temp[temp.indexOf(tile)] = 0
      temp[this.state.tileArray.indexOf(0)] = tile

      this.setState({ tileArray: temp })
    }
  }

  logic(tile) {
    let temp = [...this.state.tileArray];
    let blankIndex = temp.indexOf(0);
    let tileIndex = temp.indexOf(tile)

    if (blankIndex === tileIndex + 1) return true
    if (blankIndex === tileIndex - 1) return true
    if (blankIndex === tileIndex + 4) return true
    if (blankIndex === tileIndex - 4) return true
  }

  win() {
    for (let i = 0; i < this.state.tileArray.length - 1; i++) {
      if (this.state.tileArray[i] > this.state.tileArray[i + 1]) return false
    }
    return true
  }

  // shuffle = () => {
  //   let temp = [...this.state.tileArray];
  //   for (let i = 0; i < 10; i++) {

  //     temp[temp.indexOf(tile)] = 0
  //     temp[this.state.tileArray.indexOf(0)] = tile
  //     this.move(temp[(Math.floor(Math.random() * 15))])
  //   }
  // }

  render() {
    console.log(this.state.tileArray)
    return (
      <>
        <h1 className="text-center pt-4">Sliding Puzzle</h1>
        <div id="Board" className="container pt-3 pb-5 text-center">  {/* Board Container */}
          {this.win() ? <h2 className="p-1">You Win!</h2> : ""}
          <div className="row" style={{ height: "400px", width:"400px"}}>
            {this.state.tileArray.map((item, index) => {
              return (
                <Tile
                  key={index}
                  id={item}
                  move={this.move}
                />
              )
            })}
          </div>
            <button type="button" onClick={this.shuffle} className="btn btn-primary">Shuffle</button>
        </div>
      </>
    )
  }
}
export default App;