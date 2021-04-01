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
      let arr = []
      for (let i = 0; i < 16; i++) {
        arr.push({
          currentPos: i,
          winPos: i,
          blank: false
        })
      }
      this.setState({ tileArray: arr })
    }
  }






  render() {
    {console.log(this.state.tileArray)}
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
      </>
    )
  }

}
export default App;