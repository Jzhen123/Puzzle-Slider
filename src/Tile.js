import Earth from './Earth.jpg'

function Tile(props) {
    let top = -100 * Math.floor(props.id / 4)
    let left = -100 * (props.id % 4)
    return (
        // For Each Tile they have the same On Click and have a picture if they aren't the blank tile
        <div id="Tile" onClick={() => props.move(props.id)} className="col-3 p-0 border overflow-hidden position-relative">
            {(props.id !== 0 ? <img className="position-absolute" src={Earth} alt="Earth.jpg" style={{ top, left}}></img> : "" )}
        </div>
    )
}
export default Tile;