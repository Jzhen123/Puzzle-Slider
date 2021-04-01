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
        arr.push({
          currentPos: [Math.floor(i/4), i],
          winPos: [Math.floor(i/4), i],
          blank: false,
          clickable: false
        })
      }
      this.setState({ tileArray: arr })
    }
  }

  move = () => {
    let tempArr = this.state.tileArray.map(arr => {return {...arr}})

    tempArr[0].currentPos = this.state.tileArray[1].currentPos
    tempArr[1].currentPos = this.state.tileArray[0].currentPos

    this.setState({ tileArray: tempArr })
  }




  render() {

    return (
      <>
        <div id="Board" className="container pt-5">
          <div className="row">
          {
            this.state.tileArray.map((item, index) => {
              return (
                <Tile key={index} pos={item.currentPos} />
              )
            })
          }
          </div>
        </div>
        <button onClick={this.move} type="button" className="btn btn-primary">Primary</button>
      </>
    )
  }

}
export default App;