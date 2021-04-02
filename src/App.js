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

  componentDidMount() {
    if (this.state.tileArray.length < 16) {
      let arr = [];
      for (let i = 0; i < 16; i++) {
        if (i === 0){
          arr.push({
            id: i,
            currentPos: [Math.floor(i/4), i],
            winPos: [Math.floor(i/4), i],
            blank: true,
            clickable: false
          })
          continue;
        }
        arr.push({
          id: i,
          currentPos: [Math.floor(i/4), i],
          winPos: [Math.floor(i/4), i],
          blank: false,
          clickable: false
        })
      }
      this.setState({ tileArray: arr })
    
    }
  }

  move = (tile) => {
    if (this.logic(tile) === true) {
      console.log("Moved")
    let tempArr = this.state.tileArray.map(arr => {return {...arr}})
    let blank = tempArr.find(object => object.blank === true)

    tempArr[tile.id].blank = this.state.tileArray[blank.id].blank
    tempArr[blank.id].blank = this.state.tileArray[tile.id].blank

    this.setState({ tileArray: tempArr })
    }
  }

  logic(tile) {
    let tempArr = this.state.tileArray.map(arr => {return {...arr}})
    let blank = tempArr.find(object => object.blank === true)
    
      if (tile.currentPos[0] === blank.currentPos[0] && tile.currentPos[1] === blank.currentPos[1] + 1) {
       return true
      } else if (tile.currentPos[0] === blank.currentPos[0] && tile.currentPos[1] === blank.currentPos[1] - 1) {
        return true
      } else if (tile.currentPos[0] === blank.currentPos[0] - 1 && tile.currentPos[1] === blank.currentPos[1] - 4) {
        return true
      } else if (tile.currentPos[0] === blank.currentPos[0] - 1 && tile.currentPos[1] === blank.currentPos[1] + 4) {
        return true
      } else if (tile.currentPos[0] === blank.currentPos[0] + 1 && tile.currentPos[1] === blank.currentPos[1] - 4) {
        return true
      } else if (tile.currentPos[0] === blank.currentPos[0] + 1 && tile.currentPos[1] === blank.currentPos[1] + 4) {
        return true
      }
      console.log("Can't Move")
  }



  render() {
    if (this.state.tileArray.length < 1) {
      return null
    }
    return (

      <>
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