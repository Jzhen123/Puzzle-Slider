import Earth from './Earth.jpg'

function Tile(props) {
    // let top = -100 * Math.floor(props.item.id / 4)
    // let left = -100 * (props.item.id % 4)
    return (
        // For Each Tile they have the same On Click and have a picture if they aren't the blank tile
        <div id="Tile" onClick={() => props.move(props.id)} className="col-3 border square overflow-hidden position-relative">
            {(props.id !== 0 ? props.id : "" )}
        </div>
    )
}
export default Tile;